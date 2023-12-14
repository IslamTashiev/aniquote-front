import React from "react";

const NewsItem = () => {
	return (
		<div className='news-item'>
			<img className='news-item-image' src='https://i.pinimg.com/originals/38/7d/96/387d96c1e05e61a3e20d5f47eac7e3d7.jpg' alt='news' />
			<div className='news-item-info'>
				<h3 className='news-item-title'>Announcing a Spectacular Anime Convention!</h3>
				<p>
					We are excited to reveal a thrilling event in the world of anime! An upcoming anime convention is on the horizon, promising an unforgettable experience for all fans. Get ready to immerse
					yourself in a world of cosplay, panels, meet-and-greets with your favorite voice actors, and, of course, a vast collection of anime quotes that will leave you inspired and entertained.
				</p>
				<p>
					This convention will be a haven for anime enthusiasts, where you can meet like-minded fans, engage in discussions about your favorite series, and explore exclusive merchandise. Whether
					you're a seasoned otaku or new to the world of anime, this event has something for everyone.
				</p>
				<p>
					Stay updated on our 'News' section for all the details on this upcoming anime convention, including ticket information, guest appearances, and the latest announcements. Join us in
					celebrating the incredible diversity and creativity of the anime community. It's an event you won't want to miss!
				</p>
			</div>
		</div>
	);
};

export default NewsItem;
