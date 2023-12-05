import React from "react";
import { IQuoteComment } from "../../../models";

interface QuoteCommentItemProps {
	info: IQuoteComment;
}

const QuoteCommentItem = ({ info }: QuoteCommentItemProps) => {
	return (
		<div className='comment-item'>
			<img className='comment-item-user-avatar' src={info.author.avatar} alt='user-avatar' />
			<div className='comment-item-content'>
				<div className='comment-item-user-data'>
					<span className='comment-item-user-name'>{info.author.fullName}</span>
					<span className='comment-item-user-createdAt'>{info.createdAt}</span>
					{/* <span className='comment-item-user-createdAt'>March 21, 2023 at 10:02 PM</span> */}
				</div>
				<p className='comment-item-text'>{info.text}</p>
			</div>
		</div>
	);
};

export default QuoteCommentItem;
