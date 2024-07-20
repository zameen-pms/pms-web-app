import { forwardRef } from "react";
import { HomeSection } from "./Home.styled";

const HomeForm = forwardRef((props, ref) => {
	return (
		<HomeSection ref={ref}>
			<h2>Form</h2>
		</HomeSection>
	);
});

export default HomeForm;
