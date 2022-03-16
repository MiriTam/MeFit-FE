import { Container, Typography } from '@mui/material';
import React from 'react';

import UserFormsList from '../components/admin-page-components/UserFormsList';

const AdministratorPage = () => {
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
