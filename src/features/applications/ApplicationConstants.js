import { formatDate } from "../utils/utils";

export const appObject = {
	applicant: {
		firstName: "",
		middleName: "",
		lastName: "",
		dob: "",
		ssn: "",
		email: "",
		cellPhone: "",
		homePhone: "",
		driversLicense: "",
	},
	occupantA: {
		name: "",
		dob: "",
		relation: "",
	},
	occupantB: {
		name: "",
		dob: "",
		relation: "",
	},
	occupantC: {
		name: "",
		dob: "",
		relation: "",
	},
	currentResidence: {
		address: "",
		city: "",
		state: "",
		zip: "",
		monthlyRent: 0,
		dates: "",
		movingReason: "",
		managerName: "",
		managerNumber: "",
	},
	previousResidence: {
		address: "",
		city: "",
		state: "",
		zip: "",
		monthlyRent: 0,
		dates: "",
		movingReason: "",
		managerName: "",
		managerNumber: "",
	},
	currentEmployer: {
		name: "",
		occupation: "",
		address: "",
		phone: "",
		dates: "",
		supervisorName: "",
		monthlyPay: 0,
	},
	previousEmployer: {
		name: "",
		occupation: "",
		address: "",
		phone: "",
		dates: "",
		supervisorName: "",
		monthlyPay: 0,
	},
	checkings: {
		bank: "",
		balance: 0,
	},
	savings: {
		bank: "",
		balance: 0,
	},
	creditCard: {
		bank: "",
		balance: 0,
	},
	autoLoan: {
		bank: "",
		balance: 0,
	},
	otherDebt: {
		bank: "",
		balance: 0,
	},
	reference: {
		name: "",
		number: "",
		relationship: "",
	},
	otherReference: {
		name: "",
		number: "",
		relationship: "",
	},
	lateOnRent: {
		response: "",
		reason: "",
	},
	partyToLawsuit: {
		response: "",
		reason: "",
	},
	doesSmoke: "",
	hasPets: {
		response: "",
		info: "",
	},
	reasonForMoving: "",
	additionalComments: "",
	questions: "",
	incomeFiles: [],
	signature: {
		name: "",
		date: formatDate(new Date()),
	},
};