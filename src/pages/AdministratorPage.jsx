import { useAuth0 } from '@auth0/auth0-react';
import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import EditUserList from '../components/admin-page-components/EditUserList';
import { isAdministrator } from '../utils/isRole';

const AdministratorPage = () => {
	const { user } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAdministrator(user)) navigate('/');
	}, [navigate, user]);

	return (
		<Container maxWidth='xl' className='my-12'>
			<Typography component='h1' variant='h4'>
				Administrator Page
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				As an administrator, you have the right edit and delete registered users on MeFit.
			</Typography>

			<EditUserList />
		</Container>
	);
};

export default AdministratorPage;
