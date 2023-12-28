import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProducts } from '../app/features/products/ProductSlice';
import { toast } from 'react-toastify';
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	TextareaAutosize,
	Tooltip,
} from '@mui/material';
import { productSelector } from '../app/utils/selectors/selectors';
import CloseIcon from '@mui/icons-material/Close';

const Kitchen = () => {
	const dispatch = useDispatch();
	const prodSelector = useSelector(productSelector);
	const [foodcategory, setfoodcategory] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [defaultprice, setdefaultprice] = React.useState(0);
	const [salesprice, setsalesprice] = React.useState(0);
	const [ingredients, setIngredients] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [img, setImg] = React.useState(null);
	const [extras, setExtras] = React.useState('');
	const [reqOptions, setreqOptions] = React.useState([]);

	const handleImageChange = (event) => {
		const selectedFile = event.target.files[0];
		setImg(selectedFile);
	};

	const handleChange = (event) => {
		setfoodcategory(event.target.value);
	};
	const addextra = (opt) => {
		if (extras !== '') {
			const requiredObj = {
				name: extras,
				isSingleChoice: opt === 'Yes' ? true : false,
			};
			setreqOptions([...reqOptions, requiredObj]);
		} else {
			toast.error('extra name required');
		}
	};

	const removeOpt = (id) => {
		const newArr = [];
		reqOptions.map((opt, optId) => {
			if (optId !== id) {
				return newArr.push(opt);
			}
		});
		setreqOptions(newArr);
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
			formData.append('requiredOptions', JSON.stringify(reqOptions));

			dispatch(createProducts(formData));
		} else {
			toast.warning('Please register food properly');
		}
	};

	return (
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
					<InputLabel id='demo-simple-select-helper-label'>Category</InputLabel>
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

				<div className='my-[1.5rem] flex gap-x-[1rem]'>
					<TextField
						type='text'
						variant='outlined'
						id='outlined-basic'
						label='extras'
						className='w-1/2'
						value={extras}
						onChange={(e) => setExtras(e.target.value)}
						required
					/>
					<div className='flex gap-x-[1rem]'>
						<Button
							className='w-[80px]'
							variant='outlined'
							color='error'
							onClick={() => addextra('Yes')}>
							Yes
						</Button>
						<Button
							className='w-[80px]'
							variant='outlined'
							color='success'
							onClick={() => addextra('No')}>
							No
						</Button>
					</div>
				</div>
				<div className='flex gap-y-[10px] gap-x-[10px] flex-wrap'>
					{reqOptions.length > 0 &&
						reqOptions.map((reqOption, id) => (
							<Button
								key={id}
								variant='outlined'
								color={reqOption.isSingleChoice === true ? 'success' : 'error'}
								className='px-[20px] py-[10px] w-max flex items-center gap-x-[10px]'>
								{reqOption.name}
								<Tooltip title='Remove' onClick={() => removeOpt(id)}>
									<CloseIcon />
								</Tooltip>
							</Button>
						))}
				</div>

				<button
					type='submit'
					onClick={handlesubmit}
					className='mt-[2rem] text-blue-800 hover:text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1rem] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative'>
					Add to kitchen
				</button>
			</FormControl>
		</Box>
	);
};

export default Kitchen;
