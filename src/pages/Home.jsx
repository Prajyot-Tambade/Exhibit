import React from 'react';
import { Marquee, Navbar } from '../components';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className='pb-4'>
			<Navbar />
			<h2 className='text-center text-8xl my-4 leading-normal'>
				Showcase your best work.
			</h2>
			<Link
				className='bg-white text-black px-4 py-1 rounded-md mx-auto mt-8 block w-max'
				to='/login'
			>
				Start Showcasing your work
			</Link>
		</section>
	);
};

export default Home;
