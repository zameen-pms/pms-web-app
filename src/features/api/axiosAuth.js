import axios from "axios";
import { URL } from "../../constants";
import { store } from "../store/store";
import { getUser } from "../store/authSlice";

const axiosAuth = axios.create({
	baseURL: URL,
	headers: {
		"Content-Type": "application/json",
		withCredentials: true,
	},
});

axiosAuth.interceptors.request.use(
	(config) => {
		const state = store.getState();
		const user = getUser(state);
		const { accessToken } = user;

		if (accessToken) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);

export default axiosAuth;
