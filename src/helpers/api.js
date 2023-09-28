import axios from 'axios'

export const API = () => {
    const baseUrl = import.meta.env.VITE_API_ENDPOINT;
    return axios.create({
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type",
        }
    })
}


// WEBPACK FOOTER //
// ./src/helpers/api.js