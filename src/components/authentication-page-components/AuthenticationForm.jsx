import animation from './../../animations/start-anim';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Lottie from 'lottie-react';
import { ClipLoader } from 'react-spinners';

const AuthenticationForm = () => {
	const { loginWithRedirect, isLoading } = useAuth0();

	return (
		<Box
			className='text-center'
			sx={{
				marginTop: 3
			}}>
			<Typography sx={{ mb: 2 }} component='h1' variant='h3'>
				MeFit
			</Typography>
			<Lottie animationData={animation} loop={true} height={300} width={300} />
			<Box sx={{ mt: 2 }}>
				<Typography color='text.primary' sx={{ mt: 1, fontSize: 24, fontWeight: 500 }}>
					Let's get fit together!
				</Typography>
				<Typography color='text.secondary' sx={{ mt: 1, fontSize: 20 }}>
					Press the button below to be redirected to the login and registration page.
				</Typography>
			</Box>
			<Button onClick={() => loginWithRedirect()} fullWidth variant='contained' sx={{ mt: 4 }}>
				Get started
			</Button>
			<Box className='mt-10'>{isLoading && <ClipLoader color='#2374CE' size={30} />}</Box>
		</Box>
	);
};

export default AuthenticationForm;
