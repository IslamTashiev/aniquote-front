import React, { useRef, useState } from "react";
import { ReactComponent as Reply } from "../../../assets/Reply.svg";
import { ReactComponent as Save } from "../../../assets/Save.svg";
import { ReactComponent as Play } from "../../../assets/Play.svg";
import noComments from "../../../assets/NoComments.png";
import Input from "../../../ui/Input";
import { IQuoteComment } from "../../../models";
import axios from "../../../axios";
import useUserStore from "../../../store/user/userStore";

interface QuoteItemProps {
	quote: string;
	quoteId: string;
}

const QuoteItem = ({ quote, quoteId }: QuoteItemProps) => {
	const [showComments, setShowComments] = useState<boolean>(false);
	const [comments, setComments] = useState<IQuoteComment[] | null>(null);
	const [commentsIsLoaded, setCommentsIsLoaded] = useState<boolean>(false);
	const [commentText, setCommentText] = useState<string>("");

	const commentsBlockRef = useRef<HTMLDivElement>(null);
	const { userData } = useUserStore((state) => state);

	const getCommentsById = () => {
		setShowComments(!showComments);

		if (!showComments) {
			fetchComments();
		}
	};
	const fetchComments = async () => {
		setCommentsIsLoaded(false);
		const { data } = await axios.post("/quote-commits", { quoteId });
		setCommentsIsLoaded(true);
		setComments(data);
	};
	const handleSubmitComment = async (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const submitedData = {
			text: commentText,
			author: userData?._id,
			quoteId: quoteId,
		};

		await axios.post("/create/commit", submitedData);
		fetchComments();
	};

	return (
		<div className='quote-item'>
			<div className='quote-item-content'>
				<p className='quote-item-text'>{quote}</p>
				<div className='quote-item-interface'>
					<div onClick={getCommentsById} className='quote-item-interface-item'>
						<Reply fillOpacity={showComments ? "1" : "0.4"} />
					</div>
					<div className='quote-item-interface-item'>
						<Save />
					</div>
					<div className='quote-item-interface-item'>
						<Play />
					</div>
				</div>
			</div>
			{showComments && (
				<div className='comments-wrapper'>
					<div ref={commentsBlockRef} className='quote-item-comments'>
						{commentsIsLoaded ? (
							!Boolean(comments?.length) ? (
								<div className='no-comments'>
									<img className='no-comments-image' src={noComments} alt='no-comments' />
									<h3 className='no-comments-title'>No Comments Yet</h3>
									<p className='no-comments-subtitle'>Trailblaze the Discussion: Take the Lead in the Absence of Comments and Add Your Voice</p>
								</div>
							) : (
								<div>Loaded data</div>
							)
						) : (
							<div className='loader-wrapper'>
								<span className='loader'></span>
							</div>
						)}
						<form onSubmit={handleSubmitComment} className='comments-form'>
							<Input inputWrapperStyles='comments-form-input' label='' value={commentText} onChangeValue={(value) => setCommentText(value)} placeholder='Leave comment' type='text' />
							<button type='submit' className='btn'>
								Leave comment
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default QuoteItem;
