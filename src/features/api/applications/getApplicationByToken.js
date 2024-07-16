import axios from "../axios";

const getApplicationByToken = async (token) => {
	try {
		const response = await axios.get(`/applications/token/${token}`);
		return response;
	} catch (err) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getApplicationByToken;
