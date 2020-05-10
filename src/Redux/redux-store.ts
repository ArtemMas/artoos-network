import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import searchPageReducer from './search-reducer'
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer"

let rootReducer = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   sidebar: sidebarReducer,
   searchPage: searchPageReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

type propsTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<propsTypes<T>>

type RootReducer = typeof rootReducer // (globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppState = ReturnType<RootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store

export default store
