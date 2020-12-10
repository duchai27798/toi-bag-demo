import { handleActions } from 'redux-actions';
import threeModelAction from '../actions/three-model.action';

const initialState = {
    isChanged: false,
};

const threeModelReducer = handleActions(
    {
        [threeModelAction.change]: (state) => ({ ...state, isChanged: true }),
    },
    initialState
);

export default threeModelReducer;
