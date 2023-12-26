import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	TextareaAutosize,
} from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'white',
	boxShadow: 24,
	p: 4,
	borderRadius: '8px',
};

export default function BasicModal({ open, handleClose }) {
	const [foodcategory, setfoodcategory] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [price, setPrice] = React.useState(0);
	const [desc, setDesc] = React.useState('');

	const handleChange = (event) => {
		setfoodcategory(event.target.value);
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<FormControl fullWidth className='max-w-sm mx-auto'>
						<h2 className='text-center mb-[1rem] font-bold text-[1.2rem-+]'>
							Add to Kitchen
						</h2>
						<div className='mb-5'>
							<TextField
								id='outlined-basic'
								label='Title'
								variant='outlined'
								className='w-full'
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
								className='w-full'>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
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
								className='w-full border border-[gray] rounded-[8px] min-h-[60px]'
								required
							/>
						</div>
						<div className='mb-5'>
							<TextField
								type='number'
								id='outlined-basic'
								label='Price'
								variant='outlined'
								className='w-full'
							/>
						</div>
						<button
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Register new account
						</button>
					</FormControl>
				</Box>
			</Modal>
		</div>
	);
}
