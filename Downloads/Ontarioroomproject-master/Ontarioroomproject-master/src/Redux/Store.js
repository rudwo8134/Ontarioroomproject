import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from 'redux-devtools-extension'

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


// when I use the developement mode, I will use it
if(process.env.NODE_ENV === "development"){
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)


const value = {store, persistor}

export default value