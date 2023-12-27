import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

const initialState = {
	loading: 'idle',
	error: null,
	products: [],
	categories: [],
};

// get all products
export const getProducts = createAsyncThunk(
	'get/products',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('accessToken');

		setAuthToken(token);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.get(
				`http://localhost:5000/api/products`,
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				// store the user

				return response.data;
			}
			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);
// create products
export const createProducts = createAsyncThunk(
	'post/products',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('accessToken');

		setAuthToken(token);
		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};
			const response = await axios.post(
				`http://localhost:5000/api/products`,
				payload,
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				// create product

				return response.data;
			}
			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);
// create category
export const createCategories = createAsyncThunk(
	'post/categories',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('accessToken');

		setAuthToken(token);
		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};
			const response = await axios.post(
				`http://localhost:5000/api/category`,
				payload,
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				// create product

				return response.data;
			}
			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);
// get categories
export const getCategories = createAsyncThunk(
	'get/category',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('accessToken');

		setAuthToken(token);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.get(
				`http://localhost:5000/api/category`,
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				return response.data;
			}
			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(getProducts.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.payload.response.data.msg;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = 'success';
				state.products = action.payload;
				// state.admin = action.payload;
			})
			.addCase(createCategories.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(createCategories.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.payload.response.data.msg;
			})
			.addCase(createCategories.fulfilled, (state, action) => {
				state.loading = 'success';
				state.products = action.payload;
				toast.success('category added successfully');
			})
			.addCase(createProducts.pending, (state) => {
				state.loading = 'creatingProduct';
				toast.info('adding to kitchen');
			})
			.addCase(createProducts.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.payload.response.data.msg;
			})
			.addCase(createProducts.fulfilled, (state, action) => {
				state.loading = 'created';
				state.products = action.payload;
				toast.success('added to kitchen');
			})
			.addCase(getCategories.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.payload.response.data.msg;
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.loading = 'success';
				state.categories = [...action.payload];
				// state.admin = action.payload;
			});
	},
});

export default productSlice.reducer;
