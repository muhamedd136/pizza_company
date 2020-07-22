import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
// import logger from "redux-logger";

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persister = persistStore(store);

// export default { store, persister };
