import { Container } from '@mui/material';
import React from 'react';
import RegistrationForm from '../components/registration-page-components/RegistrationForm';

const RegistrationPage = () => {
	return (
		<Container component='main' maxWidth='xs'>
			<RegistrationForm />
		</Container>
	);
};

export default RegistrationPage;
