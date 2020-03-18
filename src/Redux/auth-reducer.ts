import {authAPI, ResultCode, ResultCodeForCaptcha, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
};

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

type SetAuthUserDataActionPayloadType = {
    id: number | null, email: string | null, login: string | null, isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null,
                                isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch: any) => {
    let meData = await authAPI.me()

    if (meData.resultCode === ResultCode.Success) {
        let {id, login, email} = meData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logIn = (login: string, password: string, rememberMe: boolean,
                      captcha: string) => async (dispatch: any) => {
    let loginData = await authAPI.logIn(login, password, rememberMe, captcha)

    if (loginData.resultCode === ResultCode.Success) {
        //success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.Captcha) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0
            ? loginData.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}));
    }
};


export const logOut = () => async (dispatch: any) => {
    let logoutData = await authAPI.logOut()
    if (logoutData.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer
