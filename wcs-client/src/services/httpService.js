import axios from 'axios';
axios.defaults.baseURL = "/api";

export function postUser(values) {
 return axios.post("/users", values)
}

export function postTastes(values) {
    return axios.post("/tastes", values)
}

export function getAll(ressources) {
    return axios.get(`/${ressources}`)
    .then(({data}) => data)
    .catch(error => error)
}