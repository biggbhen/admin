import { FormControl, TextField, TextareaAutosize } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createCategories } from '../app/features/products/ProductSlice';

const CreateCategory = () => {
	const dispatch = useDispatch();

	const [categoryName, setCategoryName] = React.useState('');
	const [categoryDesc, setcategoryDesc] = React.useState('');

	const handlesubmit = (e) => {
		e.preventDefault();

		if (categoryDesc !== '' && categoryName !== '') {
			dispatch(
				createCategories({ description: categoryDesc, name: categoryName })
			);
		} else {
			toast.warning('fill required fields');
		}
	};
	return (
		<FormControl className='w-full'>
			<h2 className='mb-[1rem] font-bold'>Create Food category</h2>
			<div className='mb-5'>
				<TextField
					id='outlined-basic'
					label='Title'
					variant='outlined'
					className='w-full'
					value={categoryName}
					onChange={(e) => setCategoryName(e.target.value)}
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='description'
					className='block mb-2 text-sm font-medium text-gray-900 '>
					Description
				</label>
				<TextareaAutosize
					id='description'
					value={categoryDesc}
					onChange={(e) => setcategoryDesc(e.target.value)}
					className='w-full border border-[gray] rounded-[8px] min-h-[40px] p-[10px]'
					required
				/>
			</div>
			<button
				type='submit'
				onClick={handlesubmit}
				className='mb-[1rem] text-blue-800 hover:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1rem] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative'>
				Add to kitchen
			</button>
		</FormControl>
	);
};

export default CreateCategory;
