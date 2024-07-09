import { useEffect, useState } from "react";
import getAsset from "../api/assets/getAsset";

const useGetImageUrl = (key, dependencies = []) => {
	const [imageUrl, setImageUrl] = useState(null);

	const fetchImage = async () => {
		try {
			const { data } = await getAsset(key);
			setImageUrl(data);
		} catch (err) {
			return null;
		}
	};

	useEffect(() => {
		fetchImage();
	}, dependencies);

	return imageUrl;
};

export default useGetImageUrl;
