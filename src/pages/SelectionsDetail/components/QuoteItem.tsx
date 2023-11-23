import React from "react";
import { ReactComponent as Reply } from "../../../assets/Reply.svg";
import { ReactComponent as Save } from "../../../assets/Save.svg";
import { ReactComponent as Play } from "../../../assets/Play.svg";
import { IQuote } from "../../../models";

interface QuoteItemProps {
	info: IQuote;
}

const QuoteItem = ({ info }: QuoteItemProps) => {
	return (
		<div className='quote-item'>
			<div className='quote-item-header'>
				<h4 className='quote-item-character'>{info.character}</h4>
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
			<p className='quote-item-text'>{info.quote}</p>
		</div>
	);
};

export default QuoteItem;
