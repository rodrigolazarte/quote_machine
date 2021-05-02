import backgroundPageActionTypes from './background-page.types';

export const changeBackgroundColor = (nextColor) => ({
    type: backgroundPageActionTypes.CHANGE_BACKGROUND_COLOR,
    payload: nextColor
});