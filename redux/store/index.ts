import { createStore, combineReducers } from "redux";
import smsReducer from "../reducers/smsReducer";

const rootReducer = combineReducers({
  sms: smsReducer,
});

const store = createStore(rootReducer);

export default store;
