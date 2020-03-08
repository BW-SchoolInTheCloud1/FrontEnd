import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${token}`,
		},
		baseURL: 'https://school-in-cloud-api.herokuapp.com/api',
	});
};
