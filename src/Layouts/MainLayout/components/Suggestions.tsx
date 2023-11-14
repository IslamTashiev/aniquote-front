import React from "react";
import TextHeader from "../../../ui/TextHeader";
import Input from "../../../ui/Input";

import "./_style.scss";

const Suggestions = () => {
	return (
		<div className='suggestions'>
			<div className='suggestions-content container'>
				<TextHeader
					title='Your ideas and suggestions'
					subtitle='Fill out the form, leave a request and we will contact you upon your request. You can also submit a request to add your favorite anime quotes'
				/>
				<div className='suggestions-form-wrapper'>
					<form className='suggestions-form'>
						<Input
							isTextArea
							isRequired
							onChangeValue={() => {}}
							label='Quote'
							placeholder='Any quote'
							type='text'
							value={""}
							textareaStyles='suggestions-form-textarea'
						/>
						<div className='suggestions-form-col'>
							<Input
								isRequired
								onChangeValue={() => {}}
								label='Anime'
								placeholder='The anime from which you took the quote'
								type='text'
								value={""}
							/>
							<Input
								isRequired
								onChangeValue={() => {}}
								label='Author of quote'
								placeholder='Jiraya'
								type='text'
								value={""}
							/>
						</div>
						<div className='suggestions-form-col'>
							<Input
								onChangeValue={() => {}}
								label='Link to video'
								placeholder='https://your-link.com'
								type='text'
								value={""}
								inputWrapperStyles='link-input'
							/>
							<Input
								onChangeValue={() => {}}
								label='Or upload video from your device (.png, .vid, .pdf)'
								placeholder='The anime from which you took the quote'
								type='file'
								value={""}
							/>
						</div>
						<div className='suggestions-form-col'>
							<button className='btn'>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Suggestions;
