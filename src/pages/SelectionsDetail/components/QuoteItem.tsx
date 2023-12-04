import React from "react";
import { ReactComponent as Reply } from "../../../assets/Reply.svg";
import { ReactComponent as Save } from "../../../assets/Save.svg";
import { ReactComponent as Play } from "../../../assets/Play.svg";
import noComments from "../../../assets/NoComments.png";
import Input from "../../../ui/Input";

interface QuoteItemProps {
	quote: string;
}

const QuoteItem = ({ quote }: QuoteItemProps) => {
	return (
		<div className='quote-item'>
			<div className='quote-item-content'>
				<p className='quote-item-text'>{quote}</p>
				<div className='quote-item-interface'>
					<div className='quote-item-interface-item'>
						<Reply />
					</div>
					<div className='quote-item-interface-item'>
						<Save />
					</div>
					<div className='quote-item-interface-item'>
						<Play />
					</div>
				</div>
			</div>
			<div className='quote-item-comments'>
				<div className='no-comments'>
					<img className='no-comments-image' src={noComments} alt='no-comments' />
					<h3 className='no-comments-title'>No Comments Yet</h3>
					<p className='no-comments-subtitle'>Trailblaze the Discussion: Take the Lead in the Absence of Comments and Add Your Voice</p>
				</div>
				<form className='comments-form'>
					<Input inputWrapperStyles='comments-form-input' label='' onChangeValue={() => {}} placeholder='Leave comment' type='text' />
					<button className='btn'>Leave comment</button>
				</form>
			</div>
		</div>
	);
};

export default QuoteItem;
