import axios from "../axios";

const getPropertyById = async (id) => {
	try {
		const response = await axios.get(`/properties/${id}`);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getPropertyById;
