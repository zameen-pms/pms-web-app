import { formatDate } from "./features/utils/utils";

export const URL = import.meta.env.VITE_BACKEND_URL;
export const MANAGER_URL = import.meta.env.VITE_MANAGER_URL;
export const WEBAPP_URL = import.meta.env.VITE_WEBAPP_URL;

export const ADDRESS_MODEL = {
	street: "",
	city: "",
	state: "",
	zip: "",
	fromDate: "",
	toDate: "",
	leavingReason: "",
	landlordName: "",
	landlordContactInfo: "",
};

export const EMPLOYER_MODEL = {
	name: "",
	title: "",
	address: "",
	fromDate: "",
	toDate: "",
	monthlyIncome: null,
};

export const FINANCE_MODEL = {
	name: "",
	amount: "",
};

export const REFERENCE_MODEL = {
	name: "",
	phoneNumber: "",
	relationship: "",
};

export const MEMBER_MODEL = {
	type: "",
	name: "",
	dob: "",
	relationship: "",
};

export const APPLICATION_MODEL = {
	personal: {
		firstName: "",
		lastName: "",
		dob: "",
		ssn: "",
		phoneNumber: "",
		email: "",
		driversLicense: "",
	},
	addresses: [ADDRESS_MODEL],
	employers: [EMPLOYER_MODEL],
	finances: [FINANCE_MODEL],
	references: [REFERENCE_MODEL],
	questions: [
		{
			question: "Have you ever been late or delinquent on rent (Yes/No)?",
			response: "",
			reason: "",
		},
		{
			question: "Have you ever been party to a lawsuit (Yes/No)?",
			response: "",
			reason: "",
		},
		{
			question: "Do you smoke (Yes/No)?",
			response: "",
			reason: "",
		},
		{
			question: "Do you have any pets (Yes/No)?",
			response: "",
			reason: "",
		},
		{
			question: "Are you leaving your current residence?",
			response: "Yes",
			reason: "",
		},
	],
	members: [MEMBER_MODEL],
	documents: [],
	authorization: {
		backgroundCheck: false,
		creditCheck: false,
		referenceCheck: false,
		employerCheck: false,
	},
	signature: {
		name: "",
		date: formatDate(new Date()),
	},
	hasPaid: false,
};
