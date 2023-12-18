import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/";

const instance = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});

instance.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});
instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const oreiginalRequest = error.config;
		if (error.response.status === 401) {
			try {
				const response = await axios.get(`${API_URL}auth/refresh`, {
					withCredentials: true,
				});
				localStorage.setItem("token", response.data.accessToken);
				return instance.request(oreiginalRequest);
			} catch (err) {
				console.log("Unauthorized");
			}
		}
	}
);
export default instance;
