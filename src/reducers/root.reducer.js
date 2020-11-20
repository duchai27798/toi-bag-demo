import { COMMON_CONST } from '../constants/common.constant';

const initialState = {
    bagSetting: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case COMMON_CONST.SET_TEXTURE_LIST:
            return { ...state, textures: action.textures };
        case COMMON_CONST.CHOOSE_TEXTURE_FOR_PART:
            const bagSetting = { ...state.bagSetting };
            bagSetting[action.payload.partName] = action.payload.uid;
            return { ...state, bagSetting: { ...bagSetting } };
        case COMMON_CONST.IS_LOADED:
            return { ...state, isLoad: action.status };
        case COMMON_CONST.CHANGE_PART_NAME:
            return { ...state, partName: action.partName };
        default:
            return { ...state };
    }
}

export default rootReducer;
