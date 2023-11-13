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
	value: string | number;
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
					value={value}
				></textarea>
			)}
			{!isTextArea && (
				<input
					placeholder={placeholder}
					type={type}
					onChange={(e) => onChangeValue(e.target.value)}
					className={clsx("input", { [inputStyles]: !!inputStyles })}
					value={value}
				/>
			)}
		</div>
	);
};

export default Input;
