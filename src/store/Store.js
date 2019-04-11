import {createStore,combineReducers} from 'redux';
import StackReducer from './reducer/StackReducer';


const rootReducer = combineReducers({
    sr : StackReducer
});
const store = createStore(rootReducer);

export default store;