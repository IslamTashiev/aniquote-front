import React, { useEffect, useState } from "react";
import { IQuoteComment } from "../../models";
import { ReactComponent as EditIcon } from "../../assets/Edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/Delete.svg";
import clsx from "clsx";

interface QuoteCommentItemProps {
	info: IQuoteComment;
	authorId: string | undefined;
}

const QuoteCommentItem = ({ info, authorId }: QuoteCommentItemProps) => {
	const [isAuthor, setIsAuthor] = useState<boolean>(info.author._id === authorId);

	useEffect(() => {
		setIsAuthor(info.author._id === authorId);
	}, [authorId, info]);

	return (
		<div className={clsx("comment-item", { author: isAuthor })}>
			<img className='comment-item-user-avatar' src={info.author.avatar} alt='user-avatar' />
			<div className='comment-item-content'>
				<div className='comment-item-user-data'>
					<span className='comment-item-user-name'>
						{info.author.fullName}
						{isAuthor && " (You)"}
					</span>
					<span className='comment-item-user-createdAt'>{info.createdAt}</span>
					{/* <span className='comment-item-user-createdAt'>March 21, 2023 at 10:02 PM</span> */}
				</div>
				<p className='comment-item-text'>{info.text}</p>
				{isAuthor && (
					<div className='author-interface'>
						<div className='author-interface-item'>
							<EditIcon width={20} height={20} />
						</div>
						<div className='author-interface-item'>
							<DeleteIcon width={20} height={20} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default QuoteCommentItem;
