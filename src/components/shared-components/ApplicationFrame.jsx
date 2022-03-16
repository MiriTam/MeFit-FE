import React from 'react';

import { isOnRootOrRegisterPage } from '../../utils/isOnRootOrRegisterPage';
import Navbar from './Navbar';

const ApplicationFrame = ({ children }) => {
	const pathname = window.location.pathname;

	return (
		<>
			{!isOnRootOrRegisterPage(pathname) && <Navbar />}
			{children}
		</>
	);
};

export default ApplicationFrame;
