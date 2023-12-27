import React, { useEffect } from 'react';
import homeIcon from '../assets/home-icon.svg';
import pickupIcon from '../assets/pickup.svg';
import swooppersIcon from '../assets/swooppers.svg';
import Hero from '../components/Hero';
import { useDispatch, useSelector } from 'react-redux';
import {
	createProducts,
	getCategories,
	getProducts,
} from '../app/features/products/ProductSlice';
import { resetLogin } from '../app/features/auth/AuthSlice';
import CustomizedTables from '../components/Table';
import BasicTooltip from '../components/Tooltip';

import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	TextareaAutosize,
} from '@mui/material';
import { productSelector } from '../app/utils/selectors/selectors';
import CreateCategory from '../components/CreateCategory';
import { toast } from 'react-toastify';

const HomePage = () => {
	const dispatch = useDispatch();
	const prodSelector = useSelector(productSelector);
	const [open, setOpen] = React.useState(false);
	const [foodcategory, setfoodcategory] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [defaultprice, setdefaultprice] = React.useState(0);
	const [salesprice, setsalesprice] = React.useState(0);
	const [ingredients, setIngredients] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [img, setImg] = React.useState(null);
	const handleOpen = () => setOpen(true);

	const handleImageChange = (event) => {
		const selectedFile = event.target.files[0];
		setImg(selectedFile);
	};

	const handleChange = (event) => {
		setfoodcategory(event.target.value);
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		if (
			foodcategory !== '' &&
			title !== '' &&
			desc !== '' &&
			salesprice !== 0 &&
			img !== null &&
			ingredients !== ''
		) {
			const formData = new FormData();
			formData.append('productImage', img);
			formData.append('foodCategory', foodcategory);
			formData.append('name', title);
			formData.append('description', desc);
			formData.append('salesPrice', salesprice);
			formData.append('defaultPrice', defaultprice);
			formData.append('ingredients', ingredients);

			dispatch(createProducts(formData));
		} else {
			toast.warning('Please register food properly');
		}
	};

	useEffect(() => {
		dispatch(getCategories());
		dispatch(resetLogin());
		dispatch(getProducts());
		// eslint-disable-next-line
	}, []);

	// console.log(prodSelector.products.length);

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
			{open && (
				<Box className='mt-[2rem]'>
					<FormControl
						className='w-full max-w-[1000px] mx-auto'
						onSubmit={handlesubmit}>
						<div className='mb-5'>
							<TextField
								id='outlined-basic'
								label='Title'
								variant='outlined'
								className='w-full'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
						</div>
						<div className='mb-5'>
							<TextField
								id='outlined-basic'
								label='Ingredients'
								variant='outlined'
								className='w-full'
								value={ingredients}
								onChange={(e) => setIngredients(e.target.value)}
								required
							/>
						</div>
						<div className='mb-5 relative'>
							<InputLabel id='demo-simple-select-helper-label'>
								Category
							</InputLabel>
							<Select
								labelId='demo-simple-select-helper-label'
								id='demo-simple-select-helper-label'
								value={foodcategory}
								label='Category'
								onChange={handleChange}
								className='w-full'
								required>
								{prodSelector?.categories?.length ? (
									prodSelector?.categories.map((item, ind) => (
										<MenuItem value={item.name} key={ind}>
											{item.name}
										</MenuItem>
									))
								) : (
									<MenuItem value={'loading'}>loading</MenuItem>
								)}
							</Select>
						</div>
						<div className='mb-5'>
							<label
								htmlFor='description'
								className='block mb-2 text-sm font-medium text-gray-900 '>
								Description
							</label>
							<TextareaAutosize
								id='description'
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
								className='w-full border border-[gray] rounded-[8px] min-h-[60px] p-[10px]'
								required
							/>
						</div>
						<div className='mb-5'>
							<TextField
								type='number'
								id='outlined-basic'
								label='sales price'
								variant='outlined'
								className='w-full'
								value={salesprice}
								onChange={(e) => setsalesprice(e.target.value)}
								required
							/>
						</div>
						<div className='mb-5'>
							<TextField
								type='number'
								id='outlined-basic'
								label='default price'
								variant='outlined'
								className='w-full'
								value={defaultprice}
								onChange={(e) => setdefaultprice(e.target.value)}
								required
							/>
						</div>
						<div className=''>
							<input type='file' onChange={handleImageChange} required />
						</div>
						<button
							type='submit'
							onClick={handlesubmit}
							className='mt-[2rem] text-blue-800 hover:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1rem] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative'>
							Add to kitchen
						</button>
					</FormControl>
				</Box>
			)}
		</div>
	);
};

export default HomePage;
