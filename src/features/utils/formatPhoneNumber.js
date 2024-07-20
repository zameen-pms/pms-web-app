export const formatPhoneNumber = (number) => {
	const numbers = number.replace(/\D/g, "");
	const pattern = /(\d{3})(\d{3})(\d{4})/;
	const formatted = numbers.replace(pattern, "$1-$2-$3");
	return formatted;
};
