import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createBrowserHistory } from "history"
import { routerMiddleware, connectRouter } from "connected-react-router"
import { combineReducers } from 'redux'
import { counter } from './counter'

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    counter,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
})

export default store
