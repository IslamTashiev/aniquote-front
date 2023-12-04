import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

const instance = axios.create({
	baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
	config.headers.Authorization = localStorage.getItem("token");
	return config;
});

export default instance;
