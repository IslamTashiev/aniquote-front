import clsx from "clsx";
import React from "react";

interface QuoteTextProps {
	wrapperClass?: string;
	quote: string;
	author: string;
}

const QuoteText = ({ author, quote, wrapperClass }: QuoteTextProps) => {
	return (
		<div className={clsx("quote", { [wrapperClass ?? ""]: !!wrapperClass })}>
			<p className='quote-text'>
				“{quote}”<span className='quote-author'>- {author}</span>
			</p>
		</div>
	);
};

export default QuoteText;
