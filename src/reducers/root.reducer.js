import { combineReducers } from 'redux';
import modelReducer from './model.reducer';

const rootReducer = combineReducers({
    model: modelReducer,
});

export default rootReducer;
