import axios from "../axios";

const updateApplicationByToken = async (token, body) => {
	try {
		const response = await axios.put(`/applications/token/${token}`, body);
		return response;
	} catch (err) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default updateApplicationByToken;
