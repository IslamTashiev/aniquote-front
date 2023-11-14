import React, { useState } from "react";
import TextHeader from "../../../ui/TextHeader";
import Input from "../../../ui/Input";

import "./_style.scss";

const Suggestions = () => {
	const [quote, setQuote] = useState<string>("");
	const [author, setAuthor] = useState<string>("");
	const [anime, setAnime] = useState<string>("");
	const [videoLink, setVideoLink] = useState<string>("");

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
							onChangeValue={(value) => setQuote(value)}
							label='Quote'
							placeholder='Any quote'
							type='text'
							value={quote}
							textareaStyles='suggestions-form-textarea'
						/>
						<div className='suggestions-form-col'>
							<Input
								isRequired
								onChangeValue={(value) => setAnime(value)}
								label='Anime'
								placeholder='The anime from which you took the quote'
								type='text'
								value={anime}
							/>
							<Input
								isRequired
								onChangeValue={(value) => setAuthor(value)}
								label='Author of quote'
								placeholder='Jiraya'
								type='text'
								value={author}
							/>
						</div>
						<div className='suggestions-form-col'>
							<Input
								onChangeValue={(value) => setVideoLink(value)}
								label='Link to video'
								placeholder='https://your-link.com'
								type='text'
								value={videoLink}
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
