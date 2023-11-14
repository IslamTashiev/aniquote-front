import clsx from "clsx";
import "./_style.scss";

interface InputProps {
	label: string;
	onChangeValue: (value: string) => void;
	type: string;
	placeholder: string;
	isTextArea?: boolean;
	inputWrapperStyles?: string;
	textareaStyles?: string;
	inputStyles?: string;
	isRequired?: boolean;
	value?: string;
	files?: FileList | null;
	onChangeFiles?: (files: FileList | null) => void;
}

const Input = (props: InputProps) => {
	const {
		isTextArea = false,
		placeholder,
		label,
		onChangeValue,
		type = "text",
		inputWrapperStyles = "",
		textareaStyles = "",
		inputStyles = "",
		isRequired = false,
		value,
		onChangeFiles,
		files,
	} = props;

	const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (type === "file" && onChangeFiles) {
			const files = event.target.files;
			onChangeFiles(files);
		} else {
			onChangeValue(event.target.value);
		}
	};

	return (
		<div className={clsx("input-wrapper", { [inputWrapperStyles]: !!inputWrapperStyles })}>
			<label>
				{label}
				{isRequired && <span className='required-star'>*</span>}
				{isTextArea && (
					<textarea
						placeholder={placeholder}
						onChange={(e) => onChangeValue(e.target.value)}
						className={clsx("textarea", { [textareaStyles]: !!textareaStyles })}
						value={value}
					></textarea>
				)}
				{!isTextArea && (
					<input
						placeholder={placeholder}
						type={type}
						onChange={(e) => handleChangeInputValue(e)}
						className={clsx("input", { [inputStyles]: !!inputStyles })}
						value={value}
					/>
				)}
				{type === "file" && (
					<div className='input file'>
						{!files && <span className='file-input-placeholder'>No file chosen</span>}
						{files && (
							<span className='file-input-placeholder chosen'>
								{files[0].name.slice(0, 20) + " ... " + files[0].type}
							</span>
						)}
					</div>
				)}
			</label>
		</div>
	);
};

export default Input;
