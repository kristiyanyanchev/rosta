import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { translationReducer } from './Translation'
import { toasterReducer } from './Toaster'
import { loginReducer } from './Login'
import { APIReducer } from './API'

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    translation: translationReducer,
    toast: toasterReducer,
    login: loginReducer,
    api: APIReducer
    // other reducers go here with naming convention | name: nameRouter
})

export default createRootReducer