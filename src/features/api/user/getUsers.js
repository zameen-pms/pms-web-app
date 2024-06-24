import axios from "../axios";

const getUsers = async (params) => {
	try {
		const response = await axios.get(`/users`, { params });
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getUsers;
