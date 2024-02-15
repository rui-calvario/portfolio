import React from 'react';
import shapeTwo from '../../assets/shape-2.png';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import './pricing.css';

const Pricing = () => {
	return (
		<section className='pricing section' id='pricing'>
			<h2 className='section__title text-cs'>Pricing</h2>
			<p className='section__subtitle'>
				My <span>Pricing</span>
			</p>

			<div className='pricing__container container grid'>
				<div className='pricing__item card card-one'>
					<span className='pricing__subtitle text-cs'>Hourly Basis</span>
					<h3 className='pricing__price'>
						<span>R</span> 200 <em>Hour</em>
					</h3>

					<p className='pricing__description'>
						Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua. Quis ipsum
						sespendisse ultrces gravida.
					</p>

					<ul className='pricing__list'>
						<li className='list__item'>
							<FaCheck className='list__icon'></FaCheck>
							<span>Brand Design</span>
						</li>
						<li className='list__item'>
							<FaCheck className='list__icon'></FaCheck>
							<span>Web Development</span>
						</li>
						<li className='list__item'>
							<del>Advertising</del>
						</li>
						<li className='list__item'>
							<del>Photography</del>
						</li>
					</ul>

					<a href='' className='btn pricing__btn text-cs'>
						Start Project
						<FaArrowRight className='pricing__btn-icon'></FaArrowRight>
					</a>

					<img src={shapeTwo} alt='' className='shape c__shape' />
				</div>

				<div className='pricing__item-wrapper'>
					<span className='pricing__label text-cs'>Popular</span>
					<div className='pricing__item card card-one'>
						<span className='pricing__subtitle text-cs'>Freelancing</span>
						<h3 className='pricing__price'>
							<span>R</span> 2500 <em>per Week</em>
						</h3>

						<p className='pricing__description'>
							Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua. Quis ipsum
							sespendisse ultrces gravida.
						</p>

						<ul className='pricing__list'>
							<li className='list__item'>
								<FaCheck className='list__icon'></FaCheck>
								<span>Brand Design</span>
							</li>
							<li className='list__item'>
								<FaCheck className='list__icon'></FaCheck>
								<span>Web Development</span>
							</li>
							<li className='list__item'>
								<FaCheck className='list__icon'></FaCheck>
								<span>Advertising</span>
							</li>
							<li className='list__item'>
								<del>Photography</del>
							</li>
						</ul>

						<a href='' className='btn pricing__btn text-cs'>
							Start Project
							<FaArrowRight className='pricing__btn-icon'></FaArrowRight>
						</a>

						<img src={shapeTwo} alt='' className='shape c__shape' />
					</div>
				</div>

				<div className='pricing__item card card-one'>
					<span className='pricing__subtitle text-cs'>Full Time</span>
					<h3 className='pricing__price'>
						<span>R </span>20 000 <em>per Month</em>
					</h3>

					<p className='pricing__description'>
						Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore magna aliqua. Quis ipsum
						sespendisse ultrces gravida.
					</p>

					<ul className='pricing__list'>
						<li className='list__item'>
							<FaCheck className='list__icon'></FaCheck>
							<span>Brand Design</span>
						</li>
						<li className='list__item'>
							<FaCheck className='list__icon'></FaCheck>
							<span>Web Development</span>
						</li>
						<li className='list__item'>
							<FaCheck className='list__icon'></FaCheck>
							<span>Advertising</span>
						</li>
						<li className='list__item'>
							<FaCheck className='list__icon'></FaCheck>
							<span>Photography</span>
						</li>
					</ul>

					<a href='' className='btn pricing__btn text-cs'>
						Start Project
						<FaArrowRight className='pricing__btn-icon'></FaArrowRight>
					</a>

					<img src={shapeTwo} alt='' className='shape c__shape' />
				</div>
			</div>
		</section>
	);
};

export default Pricing;
