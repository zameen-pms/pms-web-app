import axios from "../axios";

const getProperties = async (params) => {
	try {
		const response = await axios.get(`/properties`, { params });
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getProperties;
