import axios from "../axios";

const sendEmail = async ({ subject, body, recipients }) => {
	try {
		const response = await axios.post("/email", {
			subject,
			body,
			recipients,
		});
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default sendEmail;
