import React, { useState, useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DatePicker, { registerLocale } from "react-datepicker";
import { addDays } from "date-fns";
import ru from "date-fns/locale/ru";
import { fetchRates } from "../../store/api-actions";
import { ActionCreator } from "../../store/action";
import ConverterHistory from "../converter-history/converter-history";
import { ConverterTypes, CurrencyTypes } from "../../const";
import "./converter.scss";
import "react-datepicker/dist/react-datepicker.css";

const MAX_DAYS = 7;
const START_VALUE = 1;

const getSelectCurrency = (type, currency, changeHandler) => (
  <select
    className="converter__input converter__input--currency"
    id={`curerncy-${type}`}
    name={`curerncy-${type}`}
    defaultValue={currency}
    onChange={changeHandler}
  >
    {Object.keys(CurrencyTypes).map((currency) => (
      <option className="converter__option" value={currency} key={currency}>
        {currency}
      </option>
    ))}
  </select>
);

const getDateRange = (date) => {
  const dates = [date];

  for (let i = 1; i <= MAX_DAYS; i++) {
    dates.push(addDays(date, -i));
  }

  return dates;
};

const Converter = (props) => {
  const { rates, onLoadRates, onSaveConversion } = props;

  const sourceInput = useRef(null);
  const convertedInput = useRef(null);

  const [date, setDate] = useState(new Date());
  const [sourceMoney, setSourceMoney] = useState(START_VALUE.toString());
  const [convertedMoney, setConvertedMoney] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState(CurrencyTypes.USD);
  const [convertedCurrency, setConvertedCurrency] = useState(CurrencyTypes.RUB);

  const getConvertedMoneyValue = useCallback(
    () => (sourceInput.current.value / rates[sourceCurrency]).toFixed(2),
    [rates, sourceCurrency]
  );

  const getSourceMoneyValue = useCallback(
    () => (convertedInput.current.value * rates[sourceCurrency]).toFixed(2),
    [rates, sourceCurrency]
  );

  useEffect(() => {
    onLoadRates(convertedCurrency, date.toISOString().split("T")[0]);
  }, [onLoadRates, convertedCurrency, date]);

  useEffect(() => {
    setConvertedMoney(getConvertedMoneyValue());
  }, [rates, getConvertedMoneyValue]);

  const handleSourceMoneyChange = (evt) => {
    evt.preventDefault();

    setSourceMoney(sourceInput.current.value);
    setConvertedMoney(getConvertedMoneyValue);
  };

  const handleConvertedMoneyChange = (evt) => {
    evt.preventDefault();

    setConvertedMoney(convertedInput.current.value);
    setSourceMoney(getSourceMoneyValue);
  };

  const handleSourceCurrencyChange = (evt) => {
    evt.preventDefault();

    setSourceCurrency(evt.target.value);
  };

  const handleConvertedCurrencyChange = (evt) => {
    evt.preventDefault();

    setConvertedCurrency(evt.target.value);
    onLoadRates(evt.target.value, date.toISOString().split("T")[0]);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const conversion = {
      date,
      sourceMoney,
      convertedMoney,
      sourceCurrency,
      convertedCurrency,
    };

    onSaveConversion(conversion);
  };

  registerLocale("ru", ru);

  return (
    <section className="converter wrapper">
      <h1 className="converter__title">Конвертер валют</h1>
      <form className="converter__form" onSubmit={handleFormSubmit}>
        <div className="converter__inputs-wrap">
          <fieldset className="converter__inputs">
            <label
              className="converter__label"
              htmlFor={`money-${ConverterTypes.SOURCE}`}
            >
              У меня есть
            </label>
            <input
              className="converter__input"
              type="number"
              id={`money-${ConverterTypes.SOURCE}`}
              name={`money-${ConverterTypes.SOURCE}`}
              onChange={handleSourceMoneyChange}
              step="0.01"
              value={sourceMoney}
              ref={sourceInput}
            />
            <label
              className="visually-hidden"
              htmlFor={`curerncy-${ConverterTypes.SOURCE}`}
            >
              Моя валюта
            </label>
            {getSelectCurrency(
              ConverterTypes.SOURCE,
              sourceCurrency,
              handleSourceCurrencyChange
            )}
          </fieldset>
          <fieldset className="converter__inputs">
            <label
              className="converter__label"
              htmlFor={`money-${ConverterTypes.CONVERTED}`}
            >
              Хочу приобрести
            </label>
            <input
              className="converter__input"
              type="number"
              id={`money-${ConverterTypes.CONVERTED}`}
              name={`money-${ConverterTypes.CONVERTED}`}
              step="0.01"
              onChange={handleConvertedMoneyChange}
              value={convertedMoney}
              ref={convertedInput}
            />
            <label
              className="visually-hidden"
              htmlFor={`curerncy-${ConverterTypes.CONVERTED}`}
            >
              Хочу валюту
            </label>
            {getSelectCurrency(
              ConverterTypes.CONVERTED,
              convertedCurrency,
              handleConvertedCurrencyChange
            )}
          </fieldset>
        </div>
        <fieldset className="converter__date">
          <label className="visually-hidden" htmlFor="date">
            Выберите дату
          </label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            locale="ru"
            dateFormat="dd.MM.yyyy"
            includeDates={getDateRange(new Date())}
            className="converter__input converter__input--date"
            id="date"
          />
        </fieldset>
        <button className="converter__submit" type="submit">
          Сохранить результат
        </button>
      </form>
      <ConverterHistory />
    </section>
  );
};

Converter.propTypes = {
  rates: PropTypes.object.isRequired,
  onLoadRates: PropTypes.func.isRequired,
  onSaveConversion: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  rates: store.rates,
});
const mapDispatchToProps = (dispatch) => ({
  onLoadRates(baseCurrency, date) {
    dispatch(fetchRates(baseCurrency, date));
  },
  onSaveConversion(conversion) {
    dispatch(ActionCreator.saveConversion(conversion));
  },
});

export { Converter };
export default connect(mapStateToProps, mapDispatchToProps)(Converter);
