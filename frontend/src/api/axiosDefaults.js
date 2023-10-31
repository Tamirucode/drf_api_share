import axios from "axios";

axios.defaults.baseURL = "https://drf-todo2023-76af1f9fdada.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();