import { useState } from "react";
import {
	ApplicationFile,
	ApplicationFilesButton,
	StyledApplicationFiles,
} from "./Applications.styled";
import removeAssetByKey from "../api/assets/removeAssetByKey";
import uploadAsset from "../api/assets/uploadAsset";
import { MdDelete, MdUploadFile } from "react-icons/md";

const ApplicationFiles = ({ files, setFiles }) => {
	const [loadingFile, setLoadingFile] = useState(false);
	const [canDelete, setCanDelete] = useState(true);

	const handleUploadFile = async (selectedFile) => {
		try {
			setLoadingFile(true);
			const { data: newFile } = await uploadAsset(selectedFile);
			setFiles([...files, newFile]);
		} catch (err) {
			alert("Unable to upload file at this time.");
		} finally {
			setLoadingFile(false);
		}
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file && !loadingFile) {
			handleUploadFile(file);
		}
	};

	const handleDeleteAsset = async (key) => {
		if (!canDelete) return;
		try {
			setCanDelete(false);
			await removeAssetByKey(key);
			setFiles(files.filter((file) => file !== key));
		} catch (err) {
			alert("Unable to remove file at this time.");
		} finally {
			setCanDelete(true);
		}
	};

	return (
		<StyledApplicationFiles>
			<div className="column gap-05">
				{files.map((asset, index) => (
					<ApplicationFile key={index}>
						<p>{canDelete ? `File ${index + 1}` : "Deleting..."}</p>
						<MdDelete onClick={() => handleDeleteAsset(asset)} />
					</ApplicationFile>
				))}
			</div>
			<ApplicationFilesButton>
				<input
					id="appfile"
					type="file"
					onChange={handleFileChange}
					required
				/>
			</ApplicationFilesButton>
		</StyledApplicationFiles>
	);
};

export default ApplicationFiles;
