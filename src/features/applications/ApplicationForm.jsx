import Input from "../ui/input/Input";
import Form from "../ui/form/Form";
import { GridRow } from "../ui/form/Form.styled";
import ApplicationFiles from "./ApplicationFiles";

const ApplicationForm = ({ app, setApp, canEdit, handleSubmit, loading }) => {
	return (
		<Form onSubmit={handleSubmit}>
			<h3>Applicant Information</h3>
			<GridRow>
				<Input
					label="First Name"
					value={app.applicant.firstName}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								firstName: e.target.value,
							},
						})
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Middle Name"
					value={app.applicant.middleName}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								middleName: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Last Name"
					value={app.applicant.lastName}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								lastName: e.target.value,
							},
						})
					}
					required
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Birth Date"
					type="date"
					value={app.applicant.dob}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								dob: e.target.value,
							},
						})
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Social Security #"
					value={app.applicant.ssn}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								ssn: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Email Address"
					value={app.applicant.email}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								email: e.target.value,
							},
						})
					}
					required
					disabled={!canEdit}
					type="email"
				/>
				<Input
					label="Cell Phone"
					value={app.applicant.cellPhone}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								cellPhone: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="Home Phone"
					value={app.applicant.homePhone}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								homePhone: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Driver's License #"
					value={app.applicant.driversLicense}
					onChange={(e) =>
						setApp({
							...app,
							applicant: {
								...app.applicant,
								driversLicense: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<h5>All Other Occupants (Under 18)</h5>
			<GridRow>
				<Input
					label="Name"
					value={app.occupantA.name}
					onChange={(e) =>
						setApp({
							...app,
							occupantA: {
								...app.occupantA,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Birth Date"
					value={app.occupantA.dob}
					onChange={(e) =>
						setApp({
							...app,
							occupantA: {
								...app.occupantA,
								dob: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="date"
				/>
				<Input
					label="Relation to Applicant"
					value={app.occupantA.relation}
					onChange={(e) =>
						setApp({
							...app,
							occupantA: {
								...app.occupantA,
								relation: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Name"
					value={app.occupantB.name}
					onChange={(e) =>
						setApp({
							...app,
							occupantB: {
								...app.occupantB,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Birth Date"
					value={app.occupantB.dob}
					onChange={(e) =>
						setApp({
							...app,
							occupantB: {
								...app.occupantB,
								dob: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="date"
				/>
				<Input
					label="Relation to Applicant"
					value={app.occupantB.relation}
					onChange={(e) =>
						setApp({
							...app,
							occupantB: {
								...app.occupantB,
								relation: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Name"
					value={app.occupantC.name}
					onChange={(e) =>
						setApp({
							...app,
							occupantC: {
								...app.occupantC,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Birth Date"
					value={app.occupantC.dob}
					onChange={(e) =>
						setApp({
							...app,
							occupantC: {
								...app.occupantC,
								dob: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="date"
				/>
				<Input
					label="Relation to Applicant"
					value={app.occupantC.relation}
					onChange={(e) =>
						setApp({
							...app,
							occupantC: {
								...app.occupantC,
								relation: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>

			<h3>Rental History</h3>
			<h5>Current Residence</h5>
			<GridRow>
				<Input
					label="Address"
					value={app.currentResidence.address}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								address: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="City"
					value={app.currentResidence.city}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								city: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="State"
					value={app.currentResidence.state}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								state: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="ZIP Code"
					value={app.currentResidence.zip}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								zip: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Monthly Rent ($)"
					value={app.currentResidence.monthlyRent}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								monthlyRent: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
					type="number"
				/>
				<Input
					label="Dates of Residency (From/To)"
					value={app.currentResidence.dates}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								dates: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="Reason for Moving"
					value={app.currentResidence.movingReason}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								movingReason: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Owner/Manager's Name"
					value={app.currentResidence.managerName}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								managerName: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="Phone Number"
					value={app.currentResidence.managerNumber}
					onChange={(e) =>
						setApp({
							...app,
							currentResidence: {
								...app.currentResidence,
								managerNumber: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
			</GridRow>
			<h5>Previous Residence</h5>
			<GridRow>
				<Input
					label="Address"
					value={app.previousResidence.address}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								address: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="City"
					value={app.previousResidence.city}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								city: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="State"
					value={app.previousResidence.state}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								state: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="ZIP Code"
					value={app.previousResidence.zip}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								zip: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Monthly Rent ($)"
					value={app.previousResidence.monthlyRent}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								monthlyRent: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
				<Input
					label="Dates of Residency (From/To)"
					value={app.previousResidence.dates}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								dates: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Reason for Moving"
					value={app.previousResidence.movingReason}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								movingReason: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Owner/Manager's Name"
					value={app.previousResidence.managerName}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								managerName: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Phone Number"
					value={app.previousResidence.managerNumber}
					onChange={(e) =>
						setApp({
							...app,
							previousResidence: {
								...app.previousResidence,
								managerNumber: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>

			<h3>Employment History</h3>
			<h5>Current Employer</h5>
			<GridRow>
				<Input
					label="Employer"
					value={app.currentEmployer.name}
					onChange={(e) =>
						setApp({
							...app,
							currentEmployer: {
								...app.currentEmployer,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Occupation"
					value={app.currentEmployer.occupation}
					onChange={(e) =>
						setApp({
							...app,
							currentEmployer: {
								...app.currentEmployer,
								occupation: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Employer Address"
					value={app.currentEmployer.address}
					onChange={(e) =>
						setApp({
							...app,
							currentEmployer: {
								...app.currentEmployer,
								address: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Employer's Phone"
					value={app.currentEmployer.phone}
					onChange={(e) =>
						setApp({
							...app,
							currentEmployer: {
								...app.currentEmployer,
								phone: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Dates of Employment"
					value={app.currentEmployer.dates}
					onChange={(e) =>
						setApp({
							...app,
							currentEmployer: {
								...app.currentEmployer,
								dates: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Name of Supervisor"
					value={app.currentEmployer.supervisorName}
					onChange={(e) =>
						setApp({
							...app,
							currentEmployer: {
								...app.currentEmployer,
								supervisorName: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Monthly Pay"
					value={app.currentEmployer.monthlyPay}
					onChange={(e) =>
						setApp({
							...app,
							currentEmployer: {
								...app.currentEmployer,
								monthlyPay: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
			</GridRow>
			<h5>Previous Employer</h5>
			<GridRow>
				<Input
					label="Employer"
					value={app.previousEmployer.name}
					onChange={(e) =>
						setApp({
							...app,
							previousEmployer: {
								...app.previousEmployer,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Occupation"
					value={app.previousEmployer.occupation}
					onChange={(e) =>
						setApp({
							...app,
							previousEmployer: {
								...app.previousEmployer,
								occupation: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Employer Address"
					value={app.previousEmployer.address}
					onChange={(e) =>
						setApp({
							...app,
							previousEmployer: {
								...app.previousEmployer,
								address: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Employer's Phone"
					value={app.previousEmployer.phone}
					onChange={(e) =>
						setApp({
							...app,
							previousEmployer: {
								...app.previousEmployer,
								phone: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Dates of Employment"
					value={app.previousEmployer.dates}
					onChange={(e) =>
						setApp({
							...app,
							previousEmployer: {
								...app.previousEmployer,
								dates: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Name of Supervisor"
					value={app.previousEmployer.supervisorName}
					onChange={(e) =>
						setApp({
							...app,
							previousEmployer: {
								...app.previousEmployer,
								supervisorName: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Monthly Pay"
					value={app.previousEmployer.monthlyPay}
					onChange={(e) =>
						setApp({
							...app,
							previousEmployer: {
								...app.previousEmployer,
								monthlyPay: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
			</GridRow>

			<h3>Credit History</h3>
			<h5>Checkings Account</h5>
			<GridRow>
				<Input
					label="Bank/Institution"
					value={app.checkings.bank}
					onChange={(e) =>
						setApp({
							...app,
							checkings: {
								...app.checkings,
								bank: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Balance of Deposit or Balance Owed ($)"
					value={app.checkings.balance}
					onChange={(e) =>
						setApp({
							...app,
							checkings: {
								...app.checkings,
								balance: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
			</GridRow>
			<h5>Savings Account</h5>
			<GridRow>
				<Input
					label="Bank/Institution"
					value={app.savings.bank}
					onChange={(e) =>
						setApp({
							...app,
							savings: {
								...app.savings,
								bank: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Balance of Deposit or Balance Owed ($)"
					value={app.savings.balance}
					onChange={(e) =>
						setApp({
							...app,
							savings: {
								...app.savings,
								balance: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
			</GridRow>
			<h5>Credit Card(s)</h5>
			<GridRow>
				<Input
					label="Bank/Institution"
					value={app.creditCard.bank}
					onChange={(e) =>
						setApp({
							...app,
							creditCard: {
								...app.creditCard,
								bank: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Balance of Deposit or Balance Owed ($)"
					value={app.creditCard.balance}
					onChange={(e) =>
						setApp({
							...app,
							creditCard: {
								...app.creditCard,
								balance: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
			</GridRow>
			<h5>Auto Loan</h5>
			<GridRow>
				<Input
					label="Bank/Institution"
					value={app.autoLoan.bank}
					onChange={(e) =>
						setApp({
							...app,
							autoLoan: {
								...app.autoLoan,
								bank: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Balance of Deposit or Balance Owed ($)"
					value={app.autoLoan.balance}
					onChange={(e) =>
						setApp({
							...app,
							autoLoan: {
								...app.autoLoan,
								balance: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
			</GridRow>
			<h5>Additional Debt</h5>
			<GridRow>
				<Input
					label="Bank/Institution"
					value={app.otherDebt.bank}
					onChange={(e) =>
						setApp({
							...app,
							otherDebt: {
								...app.otherDebt,
								bank: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Balance of Deposit or Balance Owed ($)"
					value={app.otherDebt.balance}
					onChange={(e) =>
						setApp({
							...app,
							otherDebt: {
								...app.otherDebt,
								balance: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					type="number"
				/>
			</GridRow>

			<h3>References</h3>
			<GridRow>
				<Input
					label="Name"
					value={app.reference.name}
					onChange={(e) =>
						setApp({
							...app,
							reference: {
								...app.reference,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Phone Number"
					value={app.reference.number}
					onChange={(e) =>
						setApp({
							...app,
							reference: {
								...app.reference,
								number: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Relationship"
					value={app.reference.relationship}
					onChange={(e) =>
						setApp({
							...app,
							reference: {
								...app.reference,
								relationship: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Name"
					value={app.otherReference.name}
					onChange={(e) =>
						setApp({
							...app,
							otherReference: {
								...app.otherReference,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Phone Number"
					value={app.otherReference.number}
					onChange={(e) =>
						setApp({
							...app,
							otherReference: {
								...app.otherReference,
								number: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
				<Input
					label="Relationship"
					value={app.otherReference.relationship}
					onChange={(e) =>
						setApp({
							...app,
							otherReference: {
								...app.otherReference,
								relationship: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>

			<h3>General Information</h3>
			<GridRow>
				<Input
					label="Have you ever been late on rent?"
					value={app.lateOnRent.response}
					onChange={(e) =>
						setApp({
							...app,
							lateOnRent: {
								...app.lateOnRent,
								response: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="If yes, please explain why."
					value={app.lateOnRent.reason}
					onChange={(e) =>
						setApp({
							...app,
							lateOnRent: {
								...app.lateOnRent,
								reason: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Have you ever been party to a lawsuit?"
					value={app.partyToLawsuit.response}
					onChange={(e) =>
						setApp({
							...app,
							partyToLawsuit: {
								...app.partyToLawsuit,
								response: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="If yes, please explain why."
					value={app.partyToLawsuit.reason}
					onChange={(e) =>
						setApp({
							...app,
							partyToLawsuit: {
								...app.partyToLawsuit,
								reason: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Do you smoke?"
					value={app.doesSmoke}
					onChange={(e) =>
						setApp({
							...app,
							doesSmoke: e.target.value,
						})
					}
					disabled={!canEdit}
					required
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Do you have any pets?"
					value={app.hasPets.response}
					onChange={(e) =>
						setApp({
							...app,
							hasPets: {
								...app.hasPets,
								response: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="If yes, please list breed, weight, and age."
					value={app.hasPets.info}
					onChange={(e) =>
						setApp({
							...app,
							hasPets: {
								...app.hasPets,
								info: e.target.value,
							},
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Why are you moving from your current address?"
					value={app.reasonForMoving}
					onChange={(e) =>
						setApp({
							...app,
							reasonForMoving: e.target.value,
						})
					}
					disabled={!canEdit}
					required
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Are there items on credit/background check you would like to comment on?"
					value={app.additionalComments}
					onChange={(e) =>
						setApp({
							...app,
							additionalComments: e.target.value,
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>
			<GridRow>
				<Input
					label="Additional Questions"
					value={app.questions}
					onChange={(e) =>
						setApp({
							...app,
							questions: e.target.value,
						})
					}
					disabled={!canEdit}
				/>
			</GridRow>

			<h3>Proof of Income</h3>
			<h5>You may submit multiple files. Please upload one at a time.</h5>
			<ApplicationFiles
				files={app.incomeFiles}
				setFiles={(file) => setApp({ ...app, incomeFiles: file })}
			/>

			<h3>Agreement & Authorization</h3>
			<p>
				By signing this application, I verify that the statements in
				this application are true and correct. I authorize the use of
				the information and contacts provided to complete a credit,
				reference, and/or background check. I understand that false or
				lack of information may result in the rejection of this
				application.
			</p>
			<GridRow>
				<Input
					label="Signature (Name)"
					value={app.signature.name}
					onChange={(e) =>
						setApp({
							...app,
							signature: {
								...app.signature,
								name: e.target.value,
							},
						})
					}
					disabled={!canEdit}
					required
				/>
				<Input
					label="Date"
					value={app.signature.date}
					disabled
					readOnly
				/>
			</GridRow>

			<p className="red">
				Important! Make sure the email you provided is correct; it will
				be used to create your account should your application be
				accepted.
			</p>

			<button type="submit" disabled={loading}>
				Submit Application
			</button>
		</Form>
	);
};

export default ApplicationForm;
