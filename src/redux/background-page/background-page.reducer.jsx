import backgroundPageActionTypes from './background-page.types'
import {pickRandomColor} from '../../utils/functions';

const INITIAL_STATE = {
    currentColor: pickRandomColor()
};

const backgroundPageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case backgroundPageActionTypes.CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                currentColor: action.payload
            }
        default:
            return state;    
    }
}

export default backgroundPageReducer;