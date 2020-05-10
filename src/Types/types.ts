export type PostType = {
    id: number,
    message: string,
    likes: number
}
export type PostDataType = {
    newPostText: string,
    status: string
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
    aboutMe: string
}
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}
export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean | null
    captcha: string
}

export type DialogType = {
    id: number
    name: string
    img: string
    map(param: (d: DialogType) => any): DialogType
}

export type MessageType = {
    id: number
    message: string
    map(param: (m: MessageType) => any): MessageType
}

export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}