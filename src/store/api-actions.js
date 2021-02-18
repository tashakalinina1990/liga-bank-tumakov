import { ActionCreator}  from "./action";
import { CurrencyTypes } from "../const";

export const fetchRates = (baseCurrency = CurrencyTypes.USD, date) => (dispatch, _getState, api) => (
  api.get(`/${date ? date : 'latest'}?base=${baseCurrency}&symbols=USD,GBP,EUR,RUB,CNY`)
  .then(({data}) => dispatch(ActionCreator.loadRates(data.rates)))
);
