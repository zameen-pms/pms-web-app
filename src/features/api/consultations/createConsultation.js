import axios from "../axios";

const createConsultation = async (body) => {
	try {
		const response = await axios.post(`/consultations`, body);
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createConsultation;
