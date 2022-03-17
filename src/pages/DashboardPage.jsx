import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';

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
		<Container maxWidth='xl'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Dashboard Page
			</Typography>
			<Box className='mt-4'>
				<Typography>{JSON.stringify(user)}</Typography>
			</Box>

			{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					label='Basic example'
					value={value}
					onChange={newValue => {
						setValue(newValue);
					}}
					renderInput={params => <TextField {...params} />}
				/>
			</LocalizationProvider> */}
		</Container>
	);
};

export default DashboardPage;
