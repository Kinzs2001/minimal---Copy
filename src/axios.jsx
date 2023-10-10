import axios from "axios";

const API = axios.create({
    baseURL: 'http://143.244.131.87:5000/admin/',
})

export default API;