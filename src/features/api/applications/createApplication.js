import axios from "../axios";

const createApplication = async (body) => {
	try {
		const response = await axios.post(`/applications`, body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createApplication;
