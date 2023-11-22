import React from "react";
import { ReactComponent as Reply } from "../../../assets/Reply.svg";
import { ReactComponent as Save } from "../../../assets/Save.svg";
import { ReactComponent as Play } from "../../../assets/Play.svg";

const QuoteItem = () => {
	return (
		<div className='quote-item'>
			<div className='quote-item-header'>
				<h4 className='quote-item-character'>Naruto Uzumaki</h4>
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
			<p className='quote-item-text'>
				You're not the only one who draws power from the moon. (Hama is shocked that Katara managed to resist her bloodbending) My bending Hama, is more powerful than yours. Your technique is useless
				on me! (draws water from the ground and forms a ring around herself before directing it at Hama)
			</p>
		</div>
	);
};

export default QuoteItem;
