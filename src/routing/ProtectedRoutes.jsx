import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
	const token = localStorage.getItem('accessToken');
	return !token ? <Navigate to='/login' /> : <Outlet />;
};

export default PrivateRoutes;
