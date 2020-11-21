import { handleActions } from 'redux-actions';
import modelAction from '../actions/model.action';

const initialState = {
    isLoaded: false,
    bagSetting: {},
    textures: [],
};

const modelReducer = handleActions(
    {
        [modelAction.changePartName]: (state, { payload }) => ({ ...state, partName: payload['partName'] }),
        [modelAction.setIsLoaded]: (state, { payload }) => ({ ...state, isLoaded: payload['isLoaded'] }),
        [modelAction.setTextureList]: (state, { payload }) => ({ ...state, textures: payload['textures'] }),
        [modelAction.chooseTextureForPart]: (state, { payload }) => ({ ...state, bagSetting: { ...state.bagSetting, [payload['partName']]: payload['uid'] } }),
    },
    initialState
);

export default modelReducer;
