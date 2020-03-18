import axios from "axios";
import {PhotosType, ProfileType, UserType} from "../Types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8ff90064-dabe-4e65-9961-9607de23d3e6'
    }
})

export enum ResultCode {
    Success = 0,
    Error = 1
}
export enum ResultCodeForCaptcha {
    Captcha = 10
}



type RequestUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {

    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get<RequestUsersType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    follow(userId: number) {
        instance.post(`folllow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        instance.delete(`folllow/${userId}`).then(res => res.data)
    }
}



type UpdateStatusType = {
    data: { }
    resultCode: ResultCode
    messages: Array<string>
}
type SavePhotoType = {
    data: {photos: PhotosType}
    messages: Array<string>
    resultCode: ResultCode
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data);
    },
    getStatus(userId: number) {
        return instance.get<any>(`profile/status/` + userId).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status/`,
            {status: status}).then(res => res.data)
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<SavePhotoType>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(res => res.data)
    }
}



type LoginType = {
    data: {
        userId: number
    }
    resultCode: ResultCode | ResultCodeForCaptcha
    messages: Array<string>
}
type LogoutType = {
    data: { }
    resultCode: ResultCode
    messages: Array<string>
}
type MeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}

export const authAPI = {
    me () { return instance.get<MeType>(`auth/me`, ).then(res => res.data) },

    logIn(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginType>(`auth/login`,
            { email, password, rememberMe, captcha }).then(res => res.data)
    },
    logOut() {
        return instance.delete<LogoutType>(`auth/login` ).then(res => res.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}