import backgroundPageActionTypes from './background-page.types'

const INITIAL_STATE = {
    currentColor: {
        backgroundColor:'blue',
        transition:'background-color 1s ease-out'
    }
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