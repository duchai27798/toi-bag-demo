import { handleActions } from 'redux-actions';
import threeModelAction from '../actions/three-model.action';

const initialState = {
    isChanged: false,
    textures: {},
};

const threeModelReducer = handleActions(
    {
        [threeModelAction.change]: (state) => ({ ...state, isChanged: true }),
        [threeModelAction.setTextures]: (state, { payload }) => ({ ...state, textures: { ...payload } }),
    },
    initialState
);

export default threeModelReducer;
