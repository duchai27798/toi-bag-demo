import { combineReducers } from 'redux';
import modelReducer from './model.reducer';
import threeModelReducer from './three-model.reducer';

const rootReducer = combineReducers({
    model: modelReducer,
    three: threeModelReducer,
});

export default rootReducer;
