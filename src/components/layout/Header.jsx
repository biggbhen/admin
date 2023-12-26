import React from 'react';
import menueIcon from '../../assets/menu-icon.svg';
import logo from '../../assets/my-logo.svg';

const Header = () => {
	return (
		<div className='flex items-center justify-between py-[1rem] px-[3rem]'>
			<div className='flex items-center justify-between '>
				<img src={menueIcon} alt='menueIcon' className='pr-[1.5rem]' />
				<img
					src={logo}
					alt='logo'
					className='h-[2.5rem] w-[5rem] pr-[1.5rem]'
				/>
			</div>
		</div>
	);
};

export default Header;
