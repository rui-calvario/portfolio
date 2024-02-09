import React from 'react';
import profileImg from '../assets/profile-img.png';
import shapeOne from '../assets/shape-1.png';
import shapeTwo from '../assets/shape-2.png';

import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';

const Home = () => {
	return (
		<section className='home'>
			<div className='home__container container'>
				<p className='home__subtitle text-cs'>
					Hello, <span>My Name Is</span>
				</p>
				<h1 className='home__title text-cs'>
					<span>Rui</span> Calvario
				</h1>

				<p className='home__job'>
					<span className='text-cs'>I Am</span> <b>Web Developer</b>
				</p>

				<p className='home__text'>
					From Johannesburg, South Africa. I have rich experience in web design, also I am good at Wordpress. I love to talk with you about our unique
					experience.
				</p>

				<div className='home__socials'>
					<a href='' className='home__social-link'>
						<FaTwitter />
					</a>
					<a href='' className='home__social-link'>
						<FaDribbble />
					</a>
					<a href='' className='home__social-link'>
						<FaBehance />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Home;
