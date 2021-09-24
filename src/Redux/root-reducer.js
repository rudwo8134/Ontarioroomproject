import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


import userReducer from "./Users/user.reducer";
import rentcondoReducer from "./Rentcondo/rentcondo.reducer";

const persistconfig = {
  key: "root",
  storage,
  whitelist: []
}
const rootReducer = combineReducers({
  user: userReducer,
  rentcondo: rentcondoReducer,
});

export default persistReducer(persistconfig,rootReducer)