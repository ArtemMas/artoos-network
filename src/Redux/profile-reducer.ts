import {profileAPI, ResultCode, usersAPI} from "../api/api";
import {stopSubmit} from 'redux-form';
import {PhotosType, PostDataType, PostType, ProfileType} from "../Types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likes: 10},
        {id: 2, message: 'My first project', likes: 20},
        {id: 3, message: 'I love this summer', likes: 15}
    ] as Array<PostType>,
    newPostText: '' as PostDataType | '',
    profile: null as ProfileType | null,
    status: '' as PostDataType |''
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)};
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }
        default:
            return state;
    }
};

export type AddPostCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
type DeleteCreatorActionType = {
    type: typeof DELETE_POST,
    postId: number
}
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}

export const addPostCreator = (newPostText: string): AddPostCreatorActionType => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const deleteCreator = (postId: number): DeleteCreatorActionType => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let getProfileData = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(getProfileData));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let getStatusData = await profileAPI.getStatus(userId);
    dispatch(setStatus(getStatusData));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        let updateStatusData = await profileAPI.updateStatus(status);

        if (updateStatusData.resultCode === ResultCode.Success) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        //
    }
}
export const savePhoto = (file: PhotosType) => async (dispatch: any) => {
    let photoData = await profileAPI.savePhoto(file);
    if (photoData.resultCode === ResultCode.Success) {
        dispatch(savePhotoSuccess(photoData.data.photos));
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let userId = getState().auth.userId;
    let profileData = await profileAPI.saveProfile(profile);

    if (profileData.resultCode === ResultCode.Success) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: profileData.messages[0]}));
        return Promise.reject(profileData.messages[0]);
    }
}


export default profileReducer