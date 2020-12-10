import { createAction } from 'redux-actions';
import { COMMON_CONST } from '../constants/common.constant';

const threeModelAction = {
    change: createAction(COMMON_CONST.CHANGE),
};

export default threeModelAction;
