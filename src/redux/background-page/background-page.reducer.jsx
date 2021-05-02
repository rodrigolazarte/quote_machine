import backgroundPageActionTypes from './background-page.types'

const INITIAL_STATE = {
    colors: {
        blue: {
            id: 1,
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
        },
        red:{
            id: 2,
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,4,4,1) 35%, rgba(255,206,206,1) 100%)'
        },
        green:{
            id: 3,
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,120,27,1) 35%, rgba(104,255,111,1) 100%)'
        }
    },
    currentColor: 'blue'
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