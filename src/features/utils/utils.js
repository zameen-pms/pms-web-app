export const getAddress = (address) => {
	return `${address?.street}, ${address?.city}, ${address?.state} ${address?.zip}`;
};

export const formatNumber = (number) => {
	const roundedNumber = Math.round(number);
	const numberWithCommas = roundedNumber
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return `${numberWithCommas}`;
};

export const formatDate = (date) => {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
};
