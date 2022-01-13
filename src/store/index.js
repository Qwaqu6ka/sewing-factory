import { createStore } from 'vuex';

import axios from 'axios';

const baseURL = "http://sewing.mrfox131.software/api/v1/"

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
        login({commit}, payload) {
            return new Promise((resolve, reject) => {
                axios.post(baseURL + "plane_login",
                    payload
                ).then((response) => {
                    console.log("Logged in successfully")
                    console.log(response)
                    commit("setToken", response.data.access_token)
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
        },
        getAccessories({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"accessory",
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
        },
        getProducts({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"product",
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
        },
    },
    modules: {
    }
})
