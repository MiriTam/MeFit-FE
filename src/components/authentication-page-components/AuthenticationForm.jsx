import { useAuth0 } from '@auth0/auth0-react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ClipLoader } from 'react-spinners';
import Lottie from 'lottie-react';
import animation from './../../animations/start-anim';

const AuthenticationForm = () => {
	const { loginWithRedirect, isLoading } = useAuth0();

	return (
		<Box
			className='text-center'
			sx={{
				marginTop: 3
			}}>
			<Typography component='h1' variant='h4'>
				MeFit
			</Typography>
		    <Lottie
			    animationData={animation}
				loop={true}
			    height={300}
				width={300}
			/>
			<Box>
				<Typography color='text.secondary' sx={{ mt: 1, fontSize: 20 }}>
					Let's get fit together!
				</Typography>
				<Typography color='text.secondary' sx={{ mt: 1, fontSize: 20 }}>
					Press the button below to be re-directed to login.
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
