import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import Navbar from '../components/shared-components/Navbar';

const DashboardPage = () => {
	const { user, getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			console.log(token);
		})();
	}, [getAccessTokenSilently]);

	return (
		<>
			<Navbar />
			<Container maxWidth='xl'>
				<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
					Dashboard Page
				</Typography>
				<Box className='mt-4'>
					<Typography>{JSON.stringify(user)}</Typography>
				</Box>
			</Container>
		</>
	);
};

export default DashboardPage;
