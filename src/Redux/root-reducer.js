import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


import userReducer from "./Users/user.reducer";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ['user']
}
const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistconfig,rootReducer)