import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

const initialState = {
	isLoggedIn: false,
	loading: '',
	error: null,
	user: null,
};

export const createAccount = createAsyncThunk(
	'auth/signup',
	async (payload, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`http://localhost:5000/api/user`,
				{
					name: payload.name,
					email: payload.email,
					password: payload.password,
				},
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				// store the user
				localStorage.setItem(
					'accessToken',
					JSON.stringify(response.data.token)
				);
				return response.data;
			}

			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async (payload, { rejectWithValue }) => {
		const token = localStorage.getItem('accessToken');
		setAuthToken(token);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`/api/auth`,
				{
					email: payload.email,
					password: payload.password,
				},
				config
			);

			if (
				response.status === 200 ||
				response.status === 201 ||
				response.status === 'success'
			) {
				// store the user
				localStorage.setItem('accessToken', response.data.token);
				return response.data;
			}
			return rejectWithValue(response);
		} catch (error) {
			toast.error(error.response.data.msg);
			return rejectWithValue(error);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetLogin: (state, action) => {
			state.isLoggedIn = false;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createAccount.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(createAccount.rejected, (state, action) => {
				state.loading = 'failed';
				console.log(action.payload);
				state.error = action.payload.response.data.msg;
			})
			.addCase(createAccount.fulfilled, (state, action) => {
				state.loading = 'success';

				// state.admin = action.payload;
			})
			.addCase(login.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.payload.response.data.msg;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = 'success';
				state.isLoggedIn = true;
			});
	},
});

export default authSlice.reducer;
export const { resetLogin } = authSlice.actions;
