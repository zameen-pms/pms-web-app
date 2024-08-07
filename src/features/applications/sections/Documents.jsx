import { useDispatch, useSelector } from "react-redux";
import { ApplicationSection, StyledDocument } from "../Applications.styled";
import {
	getApplication,
	getCanEdit,
	setApplication,
} from "../../store/applicationSlice";
import FileUpload from "../../ui/fileUpload/FileUpload";
import { useState } from "react";
import uploadAsset from "../../api/assets/uploadAsset";
import { MdDelete } from "react-icons/md";
import removeAssetByKey from "../../api/assets/removeAssetByKey";
import { getImageUrl } from "../../utils/getImageUrl";

const Documents = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const [isLoading, setIsLoading] = useState(false);
	const canEdit = useSelector(getCanEdit);

	const handleUpload = async (files) => {
		try {
			setIsLoading(true);
			const uploadedFiles = [];

			for (const file of application.documents) {
				await removeAssetByKey(file);
			}

			for (const file of files) {
				const { data: key } = await uploadAsset(file);
				uploadedFiles.push(key);
			}

			dispatch(
				setApplication({ ...application, documents: uploadedFiles })
			);
		} catch (err) {
			console.log(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async (key) => {
		try {
			await removeAssetByKey(key);
			dispatch(
				setApplication({
					...application,
					documents: application.documents.filter(
						(document) => document !== key
					),
				})
			);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<ApplicationSection>
			<div className="row justify-sb align-center gap-05">
				<div className="column">
					<h2>Supporting Documents</h2>
					<p className="gray">
						Please provide any relevant documents (pay stubs, bank
						invoices, letters, etc.).
					</p>
				</div>
				{canEdit && (
					<FileUpload
						onChange={handleUpload}
						multiple
						supportedFileTypes={["image/*"]}
						isLoading={isLoading}
					/>
				)}
			</div>
			<div className="column gap-05">
				{application.documents.length > 0 && <h4>Documents:</h4>}
				<div className="column gap-1">
					{application.documents.map((document, index) => (
						<Document
							key={index}
							document={document}
							onClick={() => handleDelete(document)}
						/>
					))}
				</div>
			</div>
		</ApplicationSection>
	);
};

const Document = ({ document, onClick }) => {
	const canEdit = useSelector(getCanEdit);
	return (
		<StyledDocument>
			<img src={getImageUrl(document)} alt="Document" />
			{canEdit && <MdDelete onClick={onClick} className="close-icon" />}
		</StyledDocument>
	);
};

export default Documents;
