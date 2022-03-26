import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ContributorRequestList from '../components/admin-page-components/ContributorRequestList';
import EditUserList from '../components/admin-page-components/EditUserList';
import { isAdministrator } from '../utils/isRole';

const AdministratorPage = () => {
	const { user, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated && !isAdministrator(user)) navigate('/');
	}, [navigate, user, isAuthenticated]);

	return (
		<Container maxWidth='xl' className='pt-12 pb-24 overflow-hidden'>
			<Typography component='h1' variant='h4'>
				Administrator Page
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				As an administrator, you have the right edit and delete registered users on MeFit,
				aswell as approve or deny contributor requests from normal users.
			</Typography>

			<Box className='mt-6'>
				<Typography component='h2' variant='h5'>
					Edit/Delete Users
				</Typography>
				<EditUserList />
			</Box>

			<Box className='mt-6'>
				<Typography component='h2' variant='h5'>
					Approve/Deny Contributor Requests
				</Typography>
				<ContributorRequestList />
			</Box>
		</Container>
	);
};

export default AdministratorPage;
