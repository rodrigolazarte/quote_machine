import {combineReducers} from 'redux';
import QuoteMachineReducer from './quote-machine/quote-machine.reducer';
import backgroundPageReducer from './background-page/background-page.reducer';

const rootReducer = combineReducers({
    quote: QuoteMachineReducer,
    page: backgroundPageReducer
})

export default rootReducer;