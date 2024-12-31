import axios from "axios";
const BASE_URL="https://clickart-backend.vercel.app/api/"
//const Token="8349303859430524";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
    
})
/*export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${Token}`}
})*/
