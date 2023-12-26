import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

const initialState = {
	loading: 'idle',
	error: null,
	products: [],
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
				state.products = [...action.payload];
				// state.admin = action.payload;
			});
	},
});

export default productSlice.reducer;
