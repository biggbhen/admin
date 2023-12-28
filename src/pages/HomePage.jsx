import React, { useEffect } from 'react';
import homeIcon from '../assets/home-icon.svg';
import pickupIcon from '../assets/pickup.svg';
import swooppersIcon from '../assets/swooppers.svg';
import Hero from '../components/Hero';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCategories,
	getProducts,
} from '../app/features/products/ProductSlice';
import { resetLogin } from '../app/features/auth/AuthSlice';
import CustomizedTables from '../components/Table';
import BasicTooltip from '../components/Tooltip';
import { productSelector } from '../app/utils/selectors/selectors';
import CreateCategory from '../components/CreateCategory';
import Kitchen from '../components/Kitchen';

const HomePage = () => {
	const dispatch = useDispatch();
	const prodSelector = useSelector(productSelector);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(!open);

	useEffect(() => {
		dispatch(getCategories());
		dispatch(resetLogin());
		dispatch(getProducts());
		// eslint-disable-next-line
	}, []);

	return (
		<div className=' mx-auto w-[90%] max-w-[1000px] pb-[3rem]'>
			<div className='flex items-center gap-x-[1rem] px-4 '>
				<img src={homeIcon} alt='' className='h-[1.3rem] w-[1.3rem] ' />
				<span className='text-[#48505E]'>/</span>
				<p className='text-[#48505E]'>Pizza</p>
				<span className='text-[#48505E]'>/</span>
				<p className='text-[#48505E]'>Resturant</p>
			</div>
			<Hero />
			<div className='w-full'>
				<div className='flex items-center gap-x-[1rem] sm:gap-x-[3rem]'>
					<h5 className='font-bold text-[1.4rem] sm:text-[1.6rem] '>
						The place - Admiralty
					</h5>
					<div className='w-[20%] flex gap-x-[10px]'>
						<img src={swooppersIcon} alt='swooppersIcon' />
						<p className='font-bold text-[2rem] text-[#FD6E5D] '>.</p>
						<img src={pickupIcon} alt='pickupIcon' />
					</div>
				</div>
			</div>

			<div className='mt-[2rem]'>
				<CreateCategory />
				<h3 className=' font-bold  text-[1.5rem] mb-4'>Kitchen</h3>

				{prodSelector?.products?.length !== 0 ? (
					<CustomizedTables />
				) : (
					<h2 className='text-center '>
						No data available, kindly add to kitchen
					</h2>
				)}
			</div>

			<div className='flex items-center justify-center mt-[2rem]'>
				<div className='rounded-full cursor-pointer' onClick={handleOpen}>
					<BasicTooltip />
				</div>
			</div>
			<div>{open && <Kitchen />}</div>
		</div>
	);
};

export default HomePage;
