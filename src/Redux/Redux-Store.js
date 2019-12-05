import {combineReducers, createStore} from "redux";
import counterSetting from "./CounterSetting-Reducer";

let reducer = combineReducers({
        counterSettingPage: counterSetting
});

let store = createStore(reducer);
export default store;