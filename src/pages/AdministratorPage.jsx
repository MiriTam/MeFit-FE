import { useAuth0 } from '@auth0/auth0-react';
import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserFormsList from '../components/admin-page-components/UserFormsList';
import { isAdministrator } from '../utils/isRole';

const AdministratorPage = () => {
	const { user } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAdministrator(user)) navigate('/');
	}, [navigate, user]);

	return (
		<Container maxWidth='xl'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Administrator Page
			</Typography>
			<UserFormsList />
		</Container>
	);
};

export default AdministratorPage;
