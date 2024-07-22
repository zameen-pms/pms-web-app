import {
	MdAttachMoney,
	MdBuild,
	MdCampaign,
	MdEditDocument,
	MdInsertChartOutlined,
	MdSearch,
} from "react-icons/md";
import { HomeSection, ServiceCard } from "./Home.styled";

const HomeServices = () => {
	return (
		<HomeSection>
			<div className="center-text">
				<h2>Full-Service Property Management Solution</h2>
				<p>
					Our end-to-end services ensure your property is
					well-maintained and tenants are satisfied, all while
					providing you with a{" "}
					<span className="underline">hands-off</span> approach to
					investing.
				</p>
			</div>
			<div className="home-grid">
				<ServiceCard>
					<MdEditDocument />
					<h4>Leasing</h4>
					<p>
						Every lease is carefully crafted to safeguard the
						interests of both property owners and tenants, ensuring
						a fair and balanced agreement for all parties.
					</p>
				</ServiceCard>
				<ServiceCard>
					<MdSearch />
					<h4>Tenant Screening</h4>
					<p>
						We strive to find the best tenants for your property
						with our extensive screening process that includes
						credit checks, background verifications, employment
						confirmations, and rental history cross-checks.
					</p>
				</ServiceCard>
				<ServiceCard>
					<MdCampaign />
					<h4>Marketing</h4>
					<p>
						Enhance your property's visibility and rental income
						with our powerful marketing strategies, blending online
						promotion with strong local connections tailored for
						property management.
					</p>
				</ServiceCard>
				<ServiceCard>
					<MdBuild />
					<h4>Maintenance</h4>
					<p>
						Whether it’s routine maintenance or emergency repairs,
						our team is available around the clock through our
						in-house maintenance request system to address all your
						property needs.
					</p>
				</ServiceCard>
				<ServiceCard>
					<MdAttachMoney />
					<h4>Rent Collection</h4>
					<p>
						Our automated rent collection service guarantees
						seamless payment transitions, eliminating any worries
						about collecting rent.
					</p>
				</ServiceCard>
				<ServiceCard>
					<MdInsertChartOutlined />
					<h4>Financial Reporting</h4>
					<p>
						Rely on us for regular updates on your property's
						financial performance, including detailed reports and
						relevant tax documents, allowing you to focus on asset
						growth.
					</p>
				</ServiceCard>
			</div>
		</HomeSection>
	);
};

export default HomeServices;
