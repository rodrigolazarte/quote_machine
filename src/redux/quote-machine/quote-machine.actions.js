import QuoteMachineActionTypes from './quote-machine.types';

export const changeQuote = (nextQuote) => ({
    type: QuoteMachineActionTypes.CHANGE_QUOTE,
    payload: nextQuote
})