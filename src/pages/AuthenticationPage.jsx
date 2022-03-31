import AuthenticationForm from '../components/authentication-page-components/AuthenticationForm';
import { Container } from '@mui/material';
import React from 'react';

const AuthenticationPage = () => {
	return (
		<Container component='main' maxWidth='xs' className='mt-12'>
			<AuthenticationForm />
		</Container>
	);
};

export default AuthenticationPage;
