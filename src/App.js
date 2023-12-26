import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './routing/ProtectedRoutes';
import Login from './pages/Login';
import SignnUp from './pages/SignnUp';
import Layout from './components/Layout';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignnUp />} />
				<Route element={<PrivateRoutes />}>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
