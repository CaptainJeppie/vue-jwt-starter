import { defineStore } from 'pinia'
import axios from "../axios-auth";

export const useHenkStore = defineStore('henk', {
    state: () => ({
        username: '',
        jwt: '',
    }),
    getters: {
        isLoggedIn: (state) => state.jwt !== '',
    },
    actions: {
        autoLogin() {
            if (localStorage.getItem("jwt") && localStorage.getItem("username")) {
                this.jwt = localStorage.getItem("jwt");
                this.username = localStorage.getItem("username");
                axios.defaults.headers.common["Authorization"] = "Bearer " + this.jwt;
            }
        },
        login(username, password) {
            return new Promise((resolve, reject) => { 
            axios.post("users/login", {
                username: username,
                password: password,
              })
                .then((res) => {
                  axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.jwt;
                  this.username = username;
                  this.jwt = res.data.jwt;
                  localStorage.setItem("jwt", res.data.jwt);
                  localStorage.setItem("username", username);
                  console.log(res);
                  resolve();
                })
                .catch((error) => reject(error));})
        }
    },
})