import React, { useRef, useState } from "react";
import { ReactComponent as Reply } from "../../../assets/Reply.svg";
import { ReactComponent as Save } from "../../../assets/Save.svg";
import { ReactComponent as Play } from "../../../assets/Play.svg";
import noComments from "../../../assets/NoComments.png";
import Input from "../../../ui/Input";

interface QuoteItemProps {
	quote: string;
}

const QuoteItem = ({ quote }: QuoteItemProps) => {
	const [showComments, setShowComments] = useState<boolean>(false);

	const commentsBlockRef = useRef<HTMLDivElement>(null);

	console.log(commentsBlockRef);

	return (
		<div className='quote-item'>
			<div className='quote-item-content'>
				<p className='quote-item-text'>{quote}</p>
				<div className='quote-item-interface'>
					<div onClick={() => setShowComments(!showComments)} className='quote-item-interface-item'>
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
			<div className='comments-wrapper' style={{ height: showComments ? commentsBlockRef.current?.offsetHeight : 0, marginTop: showComments ? "" : 0 }}>
				<div ref={commentsBlockRef} className='quote-item-comments'>
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
		</div>
	);
};

export default QuoteItem;
