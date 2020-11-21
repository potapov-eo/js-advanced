import {IGlobalState} from './state'

interface IRootState extends IGlobalState{

}

export const selectCurrencies = (state:IGlobalState) => state.currency.currencies
export const selectCurrentCurrency = (state:IGlobalState) => state.currency.currentCurrency
export const selectAmountOfBYN = (state:IGlobalState) => state.currency.amountOfBYN
export const selectIsBuying = (state:IGlobalState) => state.currency.isBuying
export const selectAmountOfCurrency = (state:IGlobalState) => state.currency.amountOfCurrency

export const selectCurrencyState=(state:IGlobalState) => state.currency