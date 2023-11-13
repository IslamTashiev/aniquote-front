import clsx from "clsx";
import "./_style.scss";

interface InputProps {
	label: string;
	onChangeValue: (value: string | number) => void;
	type: string;
	placeholder: string;
	isTextArea?: boolean;
	inputWrapperStyles?: string;
	textareaStyles?: string;
	inputStyles?: string;
	isRequired?: boolean;
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
	} = props;

	return (
		<div className={clsx("input-wrapper", { [inputWrapperStyles]: !!inputWrapperStyles })}>
			<label>
				{label}
				{isRequired && <span className='required-star'>*</span>}
			</label>
			{isTextArea && (
				<textarea
					placeholder={placeholder}
					onChange={(e) => onChangeValue(e.target.value)}
					className={clsx("textarea", { [textareaStyles]: !!textareaStyles })}
				></textarea>
			)}
			{!isTextArea && (
				<input
					placeholder={placeholder}
					type={type}
					onChange={(e) => onChangeValue(e.target.value)}
					className={clsx("input", { [inputStyles]: !!inputStyles })}
				/>
			)}
		</div>
	);
};

export default Input;
