import { createSelector } from '@reduxjs/toolkit';

// Auth Selector
export const auth = (state) => state.auth;
export const authSelector = createSelector(auth, (state) => state);

// Product Selector
export const products = (state) => state.products;
export const productSelector = createSelector(products, (state) => state);
