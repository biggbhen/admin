import axios from 'axios';

const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common['x-auth-token'] = 'Bearer ' + token;
	} else {
		delete axios.defaults.headers.common['x-auth-token'];
	}
};

// const setAuthToken = (token) => {
// 	if (token) {
// 		axios.interceptors.request.use((config) => {
// 			config.headers.Authorization = token;
// 			return config;
// 		});
// 	} else {
// 		// Remove the interceptor to delete the Authorization header
// 		axios.interceptors.request.eject(axios.interceptors.request);
// 	}
// };

export default setAuthToken;
