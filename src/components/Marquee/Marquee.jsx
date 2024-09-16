import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
	return (
		<div className='flex gap-32 max-w-screen overflow-hidden px-32'>
			<motion.div
				className='flex flex-shrink-0 h-40 mt-32 gap-32'
				initial={{ x: 0 }}
				animate={{ x: '-200%' }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'linear',
					repeatType: 'loop',
				}}
			>
				<img src='./brand-name-logo.svg' alt='Exhibit' />
				<img src='./logo.svg' alt='Exhibit' />
			</motion.div>
			<motion.div
				className='flex flex-shrink-0 h-40 mt-32 gap-32'
				initial={{ x: 0 }}
				animate={{ x: '-200%' }}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'linear',
					repeatType: 'loop',
				}}
			>
				<img src='./brand-name-logo.svg' alt='Exhibit' />
				<img src='./logo.svg' alt='Exhibit' />
			</motion.div>
		</div>
	);
};

export default Marquee;
