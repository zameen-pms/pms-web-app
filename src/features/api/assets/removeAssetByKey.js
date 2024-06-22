import axios from "../axios";

const removeAssetByKey = async (key) => {
	try {
		const response = await axios.delete(`/assets/${key}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default removeAssetByKey;
