import axios from "../axios";

const getAssetUrl = async (key) => {
	try {
		const response = await axios.get(`/assets/url/${key}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getAssetUrl;
