import axios from "axios";
import { URL } from "../../constants";

const getAccessToken = async () => {
	try {
		const response = await axios.post(`${URL}/auth/public-login`, {
			token: import.meta.env.VITE_FRONTEND_TOKEN,
		});
		return response;
	} catch (error) {
		console.log(err);
		return null;
	}
};

const publicAxios = axios.create({
	baseURL: URL,
	headers: { "Content-Type": "application/json" },
	withCredentials: true,
});

publicAxios.interceptors.request.use(
	async (config) => {
		const { data } = await getAccessToken();
		const { accessToken } = data;
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default publicAxios;
