import { Container } from '@mui/material';
import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegistrationPage = () => {
	return (
		<Container component='main' maxWidth='xs'>
			<RegisterForm />
		</Container>
	);
};

export default RegistrationPage;
