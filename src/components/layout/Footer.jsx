import React from 'react';
import logo from '../../assets/my-logo.svg';
import googlePlayLogo from '../../assets/play-store-logo.svg';
import appStoreLogo from '../../assets/app-store-logo.svg';

const Footer = () => {
	return (
		<div className='mt-10 bg-[#F9F9F9] py-[2rem]'>
			<div className='flex items-center justify-between px-[3rem] border-b-[1px] border-[#D9DCE2] py-2 pb-6'>
				<img src={logo} alt='' className='h-[4.4581rem] w-[6.687rem]' />
				<div className=''>
					<h4 className='font-semibold text-[#2B2F38] mb-2'>SWOOPPI</h4>
					<p className='text-[.875rem] text-[#48505E] mb-2'>About us</p>
					<p className='text-[.875rem] text-[#48505E] mb-2'>Career</p>
					<p className='text-[.875rem] text-[#48505E]'>Get help</p>
				</div>
				<div className=''>
					<h4 className='font-semibold text-[#2B2F38] mb-2'>RESOURCES</h4>
					<p className='text-[.875rem] text-[#48505E] mb-2'>List your store</p>
					<p className='text-[.875rem] text-[#48505E] mb-2'>
						Become a Swoopper
					</p>
					<p className='text-[.875rem] text-[#48505E]'>View all cities</p>
				</div>
				<div className=''>
					<h4 className='font-semibold text-[#2B2F38] mb-2'>COMMUNITIES</h4>
					<p className='text-[.875rem] text-[#48505E] mb-2'>Facebook</p>
					<p className='text-[.875rem] text-[#48505E] mb-2'>
						X (formerly Twitter)
					</p>
					<p className='text-[.875rem] text-[#48505E]'>Instagram</p>
				</div>
			</div>

			<div className='py-[1rem] flex justify-between items-center w-full px-[3rem] border-b-[1px] border-[#D9DCE2]'>
				<div className='flex justify-between items-center w-[20rem]'>
					<p className='text-[.875rem] text-[#48505E]'>Privacy policy</p>
					<p className='text-[.875rem] text-[#48505E]'>Terms of use</p>
					<p className='text-[.875rem] text-[#48505E]'>Refund Policy</p>
				</div>
				<div className='flex justify-between items-center w-[17.9rem]'>
					<img src={googlePlayLogo} alt='googlePlayLogo' />
					<img src={appStoreLogo} alt='appStoreLogo' />
				</div>
			</div>

			<p className='text-[.875rem] text-[#48505E] mt-8 text-center'>
				©Swooppi Inc. 2023. All Rights Reserved.
			</p>
		</div>
	);
};

export default Footer;
