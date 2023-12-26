import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice.js';
import productReducer from '../features/products/ProductSlice.js';

const store = configureStore({
	reducer: {
		auth: authReducer,
		product: productReducer,
	},
});

export default store;
