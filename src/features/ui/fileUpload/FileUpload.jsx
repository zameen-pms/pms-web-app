import { MdFileUpload } from "react-icons/md";
import { StyledFileUpload } from "./FileUpload.styled";

const FileUpload = ({
	multiple = false,
	supportedFileTypes = [],
	onChange,
	text,
	isLoading,
}) => {
	const handleFileChange = (e) => {
		const files = Array.from(e.target.files);
		if (onChange) onChange(files);
	};

	return (
		<StyledFileUpload>
			<input
				id="file-upload"
				type="file"
				multiple={multiple}
				onChange={handleFileChange}
				accept={supportedFileTypes.join(",")}
				disabled={isLoading}
			/>
			<label htmlFor="file-upload">
				<MdFileUpload />
				<p>{isLoading ? "Uploading..." : text || "Select File(s)"}</p>
			</label>
		</StyledFileUpload>
	);
};

export default FileUpload;
