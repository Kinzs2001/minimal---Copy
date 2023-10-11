import axios from "axios";

const API = axios.create({
    baseURL: 'http://192.168.29.72:5000/admin/',  
    mode:'cors' 
});

export default API;

