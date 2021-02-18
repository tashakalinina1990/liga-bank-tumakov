import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ConverterTypes } from "../../const";
import { ActionCreator } from "../../store/action";
import "./converter-history.scss";

const MAX_CONVERSIONS = 10;

const getConverterHistoryItem = (
  date,
  sourceMoney,
  convertedMoney,
  sourceCurrency,
  convertedCurrency,
  key
) => (
  <li className="converter-history__item" key={key}>
    <p className="converter-history__date">{date.toLocaleDateString()}</p>
    <p className={`converter-history__money-${ConverterTypes.SOURCE}`}>
      <span className="converter-history__amount">{sourceMoney}</span>
      <span className="converter-history__currency">{sourceCurrency}</span>
    </p>
    <p className={`converter-history__money-${ConverterTypes.CONVERTED}`}>
      <span className="converter-history__amount">{convertedMoney}</span>
      <span className="converter-history__currency">{convertedCurrency}</span>
    </p>
  </li>
);

const ConverterHistory = (props) => {
  const { conversions, onClearConversions } = props;

  const lastConversions =
    conversions.length > MAX_CONVERSIONS
      ? conversions.slice(0, MAX_CONVERSIONS)
      : conversions;

  const handleClick = () => {
    onClearConversions();
  };

  return (
    <section className="converter-history">
      <h2 className="converter-history__title">История конвертаций</h2>
      <ul
        className={`converter-history__list ${
          lastConversions.length ? "" : "converter-history__list--noline"
        }`}
      >
        {lastConversions.map((item, index) =>
          getConverterHistoryItem(
            item.date,
            item.sourceMoney,
            item.convertedMoney,
            item.sourceCurrency,
            item.convertedCurrency,
            index
          )
        )}
      </ul>
      <button
        className="converter-history__clear-button"
        type="button"
        onClick={handleClick}
      >
        Очистить историю
      </button>
    </section>
  );
};

const mapStateToProps = (store) => ({
  conversions: store.conversions,
});

const mapDispatchToProps = (dispatch) => ({
  onClearConversions() {
    dispatch(ActionCreator.clearConversions());
  },
});

ConverterHistory.propTypes = {
  conversions: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.date,
      sourceMoney: PropTypes.string,
      convertedMoney: PropTypes.string,
      sourceCurrency: PropTypes.string,
      convertedCurrency: PropTypes.string,
      key: PropTypes.number,
    })
  ).isRequired,
  onClearConversions: PropTypes.func.isRequired,
};

export { ConverterHistory };
export default connect(mapStateToProps, mapDispatchToProps)(ConverterHistory);
