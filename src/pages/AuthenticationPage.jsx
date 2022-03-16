import { Container } from '@mui/material';
import React from 'react';

import AuthenticationForm from '../components/authentication-page-components/AuthenticationForm';

const AuthenticationPage = () => {
	return (
		<Container component='main' maxWidth='xs'>
			<AuthenticationForm />
		</Container>
	);
};

export default AuthenticationPage;
