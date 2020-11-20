import { COMMON_CONST } from '../constants/common.constant';

export const rootAction = {
    setTextureList,
    chooseTextureForPart,
    setIsLoaded,
    changePartName,
};

function setTextureList(textures) {
    return { type: COMMON_CONST.SET_TEXTURE_LIST, textures };
}

function chooseTextureForPart(uid, partName) {
    return { type: COMMON_CONST.CHOOSE_TEXTURE_FOR_PART, payload: { uid, partName } };
}

function changePartName(partName) {
    return { type: COMMON_CONST.CHANGE_PART_NAME, partName };
}

function setIsLoaded(status) {
    return { type: COMMON_CONST.IS_LOADED, status };
}
