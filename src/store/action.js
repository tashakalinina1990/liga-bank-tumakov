export const ActionType = {
  LOAD_RATES: 'LOAD_RATES',
  SAVE_CONVERSION: 'SAVE_CONVERSION',
  CLEAR_CONVERSIONS: 'CLEAR_CONVERSIONS'
}

export const ActionCreator = {
  loadRates: (rates) => ({
    type: ActionType.LOAD_RATES,
    payload: rates
  }),
  saveConversion: (conversion) => ({
    type: ActionType.SAVE_CONVERSION,
    payload: conversion
  }),
  clearConversions: () => ({
    type: ActionType.CLEAR_CONVERSIONS,
  })
};
