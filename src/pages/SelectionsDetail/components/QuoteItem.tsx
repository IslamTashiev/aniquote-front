import React from "react";
import { ReactComponent as Reply } from "../../../assets/Reply.svg";
import { ReactComponent as Save } from "../../../assets/Save.svg";
import { ReactComponent as Play } from "../../../assets/Play.svg";

interface QuoteItemProps {
	quote: string;
}

const QuoteItem = ({ quote }: QuoteItemProps) => {
	return (
		<div className='quote-item'>
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
	);
};

export default QuoteItem;
