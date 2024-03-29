import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from '../../assets/blog1.jpg';
import Blog2 from '../../assets/blog2.jpg';
import Blog3 from '../../assets/blog3.jpg';
import './blog.css';

const Blog = () => {
	return (
		<section className='blog section' id='blog'>
			<h2 className='section__title text-cs'>Latest Blog</h2>
			<p className='section__subtitle'>
				My <span>Articles</span>
			</p>

			<div className='blog__container container grid'>
				<div className='blog__item card card-two'>
					<span className='blog__date text-cs'>OCTOBER 31, 2022</span>
					<h3 className='blog__title'>The Main Thing For the Designer</h3>
					<p className='blog__description'>
						Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit effictiur malesuada. Donec arcu lacus, ornare
						eget...
					</p>

					<a href='' className='link'>
						Read More
						<FaArrowRight className='link__icon'></FaArrowRight>
					</a>

					<img src={Blog1} alt='' className='blog__img' />
				</div>

				<div className='blog__item card card-two'>
					<span className='blog__date text-cs'>OCTOBER 31, 2022</span>
					<h3 className='blog__title'>Follow Your Own Design Process</h3>
					<p className='blog__description'>
						Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit effictiur malesuada. Donec arcu lacus, ornare
						eget...
					</p>

					<a href='' className='link'>
						Read More
						<FaArrowRight className='link__icon'></FaArrowRight>
					</a>

					<img src={Blog2} alt='' className='blog__img' />
				</div>

				<div className='blog__item card card-two'>
					<span className='blog__date text-cs'>NOVEMBER 28, 2022</span>
					<h3 className='blog__title'>Usability Secrets to Create Better Interfaces</h3>
					<p className='blog__description'>
						Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis. Aliquam vel sem vel velit effictiur malesuada. Donec arcu lacus, ornare
						eget...
					</p>

					<a href='' className='link'>
						Read More
						<FaArrowRight className='link__icon'></FaArrowRight>
					</a>

					<img src={Blog3} alt='' className='blog__img' />
				</div>
			</div>
		</section>
	);
};

export default Blog;
