import { createStore } from 'vuex';

import axios from 'axios';
axios.defaults.withCredentials = true;

const baseURL = "sewing.mrfox131.software/api/v1/"

export default createStore({
    state: {
        token: '',
    },
    mutations: {
        setToken(state, token){
            state.token = token;
        }
    },
    actions: {
        login({commit}, login, password) {
            return new Promise((resolve, reject) => {
                axios.post(baseURL + "plane_login",
                    {
                        login: login,
                        password: password
                    }
                ).then((response) => {
                    console.log("Logged in successfully")
                    commit("setToken", response.data.token)
                    resolve()
                }).catch((err) => {
                    console.log(err)
                    reject()
                })
            })
        },
        getProfile({state}) {
            return new Promise((resolve, reject) => {
                axios.get(
                    baseURL+"me",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    }
                ).then((response)=>{
                    resolve(response.data);
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        getClothes({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"cloth",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response)=>{
                        resolve(response.data)
                    }).catch((err)=>{
                        reject(err)
                    })
            })
        }
    },
    modules: {
    }
})
