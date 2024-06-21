import axios from "../axios";

const getProperties = async (params) => {
	try {
		const response = await axios.get(`/properties`, { params });
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getProperties;
