import QuoteMachineActionTypes from './quote-machine.types';
import quotesData from '../../data/quotes.data';

const INITIAL_STATE = {
    quotes: quotesData,
    currentQuote: 1
};

const quoteMachineReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case QuoteMachineActionTypes.CHANGE_QUOTE:
            return {
                ...state,
                currentQuote: action.payload
            }
        default:
            return state;    
    }
};

export default quoteMachineReducer;

