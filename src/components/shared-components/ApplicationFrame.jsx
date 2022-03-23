import React from 'react';

import { isOnNewProfilePage, isOnRootPage } from '../../utils/isOnPage';
import Navbar from './Navbar';

const ApplicationFrame = ({ children }) => {
	const pathname = window.location.pathname;

	return (
		<>
			{!isOnRootPage(pathname) && !isOnNewProfilePage(pathname) && <Navbar />}
			{children}
		</>
	);
};

export default ApplicationFrame;
