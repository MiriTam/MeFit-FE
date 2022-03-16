import { Container } from '@mui/material';
import React from 'react';

import AuthenticateForm from '../components/authentication-page-components/AuthenticationForm';

const AuthenticationPage = () => {
	return (
		<Container component='main' maxWidth='xs'>
			<AuthenticateForm />
		</Container>
	);
};

export default AuthenticationPage;
