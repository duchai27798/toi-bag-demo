import { COMMON_CONST } from '../constants/common.constant';
import { createAction } from 'redux-actions';

const modelAction = {
    setTextureList: createAction(COMMON_CONST.SET_TEXTURE_LIST, (textures) => ({ textures })),
    chooseTextureForPart: createAction(COMMON_CONST.CHOOSE_TEXTURE_FOR_PART, (uid, partName) => ({ uid, partName })),
    changePartName: createAction(COMMON_CONST.CHANGE_PART_NAME),
    setIsLoaded: createAction(COMMON_CONST.IS_LOADED, (status) => ({ isLoaded: status })),
};

export default modelAction;
