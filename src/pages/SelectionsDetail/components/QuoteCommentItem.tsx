import React from "react";

const QuoteCommentItem = () => {
	return (
		<div className='comment-item'>
			<img className='comment-item-user-avatar' src='https://pushinka.top/uploads/posts/2023-04/1680815574_pushinka-top-p-dvigayushchiesya-avatarki-anime-avatarka-k-62.jpg' alt='user-avatar' />
			<div className='comment-item-content'>
				<div className='comment-item-user-data'>
					<span className='comment-item-user-name'>Islam Tashiev</span>
					<span className='comment-item-user-createdAt'>March 21, 2023 at 10:02 PM</span>
				</div>
				<p className='comment-item-text'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, maiores doloremque praesentium quasi quidem earum harum aliquid sit, dicta voluptatum doloribus, totam nisi blanditiis.
					Fuga odio velit error minus provident in voluptatem iste ad, amet accusantium quasi. A, impedit nostrum!
				</p>
			</div>
		</div>
	);
};

export default QuoteCommentItem;
