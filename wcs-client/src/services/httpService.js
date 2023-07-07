import axios from 'axios';
axios.defaults.baseURL = "/api";

export function postUser(values) {
 return axios.post("/users", values)
}
