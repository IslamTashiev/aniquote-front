import React from "react";
import QuoteItem from "./QuoteItem";

const QuotesList = () => {
	return (
		<div className='quotes-list container'>
			<h2 className='quotes-list-title'>
				Collection of <span>Naruto Shippuden</span>
			</h2>
			<div className='quotes'>
				<QuoteItem />
			</div>
		</div>
	);
};

export default QuotesList;
