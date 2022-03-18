import React from 'react';
import { isOnRootPage } from '../../utils/isOnRootPage';
import Navbar from './Navbar';

const ApplicationFrame = ({ children }) => {
	const pathname = window.location.pathname;

	return (
		<>
			{!isOnRootPage(pathname) && <Navbar />}
			{children}
		</>
	);
};

export default ApplicationFrame;
