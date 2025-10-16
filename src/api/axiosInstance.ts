import axios from "axios";

//const URL= import.meta.env.VITE_BE_URL;

const axiosInstance = axios.create({ baseURL: "https://api.myriadstoragesystem.com/api/v1", withCredentials: true });

export default axiosInstance;
