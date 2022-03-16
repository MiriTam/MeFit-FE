import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const AuthenticationForm = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Box
			className='text-center'
			sx={{
				marginTop: 14
			}}>
			<Typography component='h1' variant='h4'>
				MeFit FE
			</Typography>
			<Box>
				<Typography color='text.secondary' sx={{ mt: 1, fontSize: 20 }}>
					Press the Login button to start Auth0 authentication to MeFit.
				</Typography>
			</Box>
			<Button onClick={() => loginWithRedirect()} fullWidth variant='contained' sx={{ mt: 4 }}>
				Authenticate
			</Button>
		</Box>
	);
};

export default AuthenticationForm;