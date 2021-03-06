import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5008bd51-4561-4f8f-938d-df3e74c9126e"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },



}

export const authMeAPI = {
    auth() {
        return instance.get('auth/me/')
    },
    login(email,
        password,
        rememberMe = false,
        captcha) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfileUser(userId) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)

    },
    updateStatusAPI(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    savePhotoSuccess(photoFile) {
        debugger;
        var formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    saveProfileQuery(contact) {
        debugger;
        return instance.put(`profile/`, contact
        )
    }
}
