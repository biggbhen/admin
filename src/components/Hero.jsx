import React from 'react';
import loveIcon from '../assets/love-icon.svg';
import storeLogo from '../assets/store-logo.svg';
import banner from '../assets/banner.svg';

const Hero = () => {
	return (
		<div className='relative mt-6 mb-16 w-full'>
			<img src={banner} alt='Banner' />

			<div className='absolute top-4 right-4'>
				<img
					src={loveIcon}
					alt='Love Icon'
					className='h-[1.125rem] w-[1.25rem]'
				/>
			</div>

			<div className='absolute left-8  bottom-[-3rem]'>
				<img
					src={storeLogo}
					alt='Store Logo'
					className='h-[6.375rem] w-[6.375rem]'
				/>
			</div>
		</div>
	);
};

export default Hero;
