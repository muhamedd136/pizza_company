import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { cartReducer } from "./cart/reducer";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
