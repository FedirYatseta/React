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
        .then(response =>{
            return response.data
        })
    },
    getProfileUser(userId = 2) {
        return instance.get('profile/' + userId).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    auth() {
        return instance.get('auth/me/')
    }
}