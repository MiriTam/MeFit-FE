import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect } from 'react';

const color = blue[500];

const DashboardPage = () => {
	const { user, getAccessTokenSilently, getIdTokenClaims } = useAuth0();

	useEffect(() => {
		(async () => {
			const jwt_token = await getAccessTokenSilently();
			const id_token = await getIdTokenClaims();

			console.log(jwt_token);
			console.log(id_token);
		})();
	}, [getAccessTokenSilently, getIdTokenClaims]);

	return (
		<Container maxWidth='xl' className='my-12'>
			<Typography component='h1' variant='h2' color='text.secondary' sx={{ mt: 6 }}>
				Welcome back, <br />{' '}
				<Box component='span' color={color} className=' font-semibold '>
					{user?.nickname}
				</Box>
			</Typography>
			<Typography component='h2' variant='h4' sx={{ mt: 4 }}></Typography>
		</Container>
	);
};

export default DashboardPage;
