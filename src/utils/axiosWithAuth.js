import axios from 'axios';

//Refigure After BackEnd Discussion

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: '',
	});
};
