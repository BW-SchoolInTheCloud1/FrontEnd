import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
	return (
		<Route
			{...props}
			render={() => {
				//Relook after BackEnd Discussion
				if (localStorage.getItem('token')) {
					return <Component />;
				} else {
					return <Redirect to='/login' />;
				}
			}}
		/>
	);
};

export default ProtectedRoute;
