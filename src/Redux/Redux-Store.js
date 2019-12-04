import {combineReducers, createStore} from "redux";
import counterSetting from "./CounterSetting-Reducer";
import counterButtons from "./CounterButtons-Reducer";

let reducer = combineReducers({
        counterSettingPage: counterSetting,
        counterButtonsPage: counterButtons
});

let store = createStore(reducer);
export default store;