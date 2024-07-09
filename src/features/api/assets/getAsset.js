import axios from "../axios";

const getAsset = async (key) => {
	try {
		const response = await axios.get(`/assets/${key}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAsset;
