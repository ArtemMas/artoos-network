import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8ff90064-dabe-4e65-9961-9607de23d3e6'
    }
});

export const usersAPI = {

    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        instance.post(`folllow/${userId}`)
    },
    unfollow(userId) {
        instance.delete(`folllow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    },
};


export const authAPI = {
    me () { return instance.get(`auth/me`, ) },

    logIn(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logOut() {
        return instance.delete(`auth/login` )
    }
};
