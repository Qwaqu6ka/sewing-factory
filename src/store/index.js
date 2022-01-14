import { createStore } from 'vuex';

import axios from 'axios';
import createPersistedState from "vuex-persistedstate";
import resolve from "resolve";

const baseURL = "http://sewing.mrfox131.software/api/v1/"

export default createStore({
    state: {
        token: '',
        baseStaticURL: "http://sewing.mrfox131.software/"
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
        getOrders({state}) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"order",
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
        getAccessoryDetails({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"accessory_with_info/"+article,
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
        accessoryDecommission({ state }, payload) {
            return new Promise((resolve, reject) => {
                axios.patch(baseURL+"accessory/"+payload.article+"?quantity="+payload.count.toString(),
                    {
                    },
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                .then((response)=>{
                    resolve()
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        getClothDetails({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"cloth/"+article,
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
        getClothById({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"cloth_by_id/"+article,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response)=>{
                        resolve(response.data)
                    })
                    .catch((err)=>{
                        reject(err)
                    })
            })
        },
        clothDecommission({state}, payload) {
            return new Promise((resolve,reject) => {
                axios.patch(baseURL+"cloth/"+payload.article+"/"+payload.number+"?length="+payload.length.toString(),
                    {
                        length: payload.length
                    },
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    }
                ).then((response) => {resolve()}).catch(err => {
                    reject(err)
                })
            })
        },
        getProductInfo({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"product/"+article,
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response)=>{
                        resolve(response.data)
                    })
                    .catch((err)=>{
                        reject(err)
                    })
            })
        },
        getPreviousProducts({state}, article) {
            return new Promise((resolve, reject) => {
                axios.get(baseURL+"product/"+article+"/previous",
                    {
                        headers: {
                            "Authorization": "Bearer " + state.token
                        }
                    })
                    .then((response)=>{
                        resolve(response.data)
                    })
                    .catch((err)=>{
                        reject(err)
                    })
            })
        },
        createNewAccessory({state}, payload){
            return new Promise((resolve, reject) => {
                resolve()
            })
        }
    },
    modules: {
    },
    plugins: [createPersistedState()]
})
