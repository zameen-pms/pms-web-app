import axios from "../axios";

const createUser = async (body) => {
	try {
		const response = await axios.post(`/users`, body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createUser;
