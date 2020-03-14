import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import searchPageReducer from './search-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: dialogsReducer,
   sidebar: sidebarReducer,
   searchPage: searchPageReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//window.store = store;

export default store;
