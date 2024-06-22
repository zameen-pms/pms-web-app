import Button from "../../features/ui/button/Button";

const ApplicationsPay = () => {
	const handleVenmo = () => {
		window.open(
			"https://venmo.com/?txn=pay&audience=public&recipients=@Faiqa-Kamran&amount=40.00&note=Rental%20Application%20Fee",
			"_blank"
		);
	};

	const handleZelle = async () => {
		try {
			await navigator.clipboard.writeText("faiqakamran@icloud.com");
			alert(
				"Text copied to clipboard. Please pay $40 via Zelle using your bank app."
			);
		} catch (err) {
			alert("Unable to copy text at this time.");
		}
	};

	return (
		<section className="padding column gap-1">
			<h2>Application Fee</h2>
			<p>
				Once you have submitted your application, you can pay your
				application fee via Venmo or Zelle. The application fee is $40
				per applicant (all adults living in the house must apply and be
				approved).
			</p>
			<div className="row align-center gap-2">
				<Button onClick={handleVenmo}>Pay via Venmo</Button>
				<Button onClick={handleZelle}>Copy Zelle Email</Button>
			</div>
		</section>
	);
};

export default ApplicationsPay;
