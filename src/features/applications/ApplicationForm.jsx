import { useSelector } from "react-redux";
import Button from "../ui/button/Button";
import { StyledApplicationForm } from "./Applications.styled";
import Authorization from "./sections/Authorization";
import Documents from "./sections/Documents";
import Finances from "./sections/Finances";
import GeneralQuestions from "./sections/GeneralQuestions";
import Members from "./sections/Members";
import PersonalInformation from "./sections/PersonalInformation";
import References from "./sections/References";
import RentalHistory from "./sections/RentalHistory";
import Signature from "./sections/Signature";
import WorkHistory from "./sections/WorkHistory";
import { getCanEdit, getIsLoading } from "../store/applicationSlice";

const ApplicationForm = ({ onSubmit, newForm = true }) => {
	const isLoading = useSelector(getIsLoading);
	const canEdit = useSelector(getCanEdit);

	const handleSubmit = (e) => {
		if (isLoading) return;
		e.preventDefault();
		onSubmit && onSubmit();
	};

	return (
		<StyledApplicationForm onSubmit={handleSubmit}>
			{newForm && <PersonalInformation />}
			<RentalHistory />
			<WorkHistory />
			<Finances />
			<References />
			<GeneralQuestions />
			<Members />
			<Documents />
			{newForm && <Authorization />}
			{newForm && <Signature />}
			{canEdit && (
				<Button type="submit">
					{isLoading
						? "Submitting..."
						: newForm
						? "Submit Application"
						: "Update Application"}
				</Button>
			)}
		</StyledApplicationForm>
	);
};

export default ApplicationForm;
