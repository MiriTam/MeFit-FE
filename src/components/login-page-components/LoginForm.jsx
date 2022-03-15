import { useAuth0 } from '@auth0/auth0-react';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { getUsers } from '../../api/users';
import useUser from '../../context/UserContext';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	// const { login } = useUser();
	const { loginWithRedirect } = useAuth0();

	async function onSubmitClick({ email, password }) {
		// const apiUsers = await getUsers();
		// const apiUser = apiUsers.find(_user => _user.email === email);
		// // User does not exist
		// if (!apiUser) return;
		// Otherwise, log in user
		// loginWithRedirect();
	}

	return (
		<Box
			className='text-center'
			sx={{
				marginTop: 14,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
			<Typography component='h1' variant='h4'>
				MeFit
			</Typography>

			<Box>
				<Typography color='text.secondary' sx={{ mt: 1, fontSize: 20 }}>
					Press the Login button to start Auth0 authentication.
				</Typography>
			</Box>

			{/* <Box
				component='form'
				onSubmit={handleSubmit(onSubmitClick)}
				noValidate
				sx={{ mt: 4 }}>
				<TextField
					{...register('email', {
						required: true,
						minLength: 4
						// pattern: {
						// 	value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
						// }
					})}
					error={errors.email}
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
				/>
				<TextField
					{...register('password', {
						required: true,
						minLength: 4
					})}
					error={errors.password}
					margin='normal'
					fullWidth
					name='password'
					label='Password'
					type='password'
					id='password'
					autoComplete='current-password'
				/>
			</Box> */}
			<Button
				onClick={() => loginWithRedirect()}
				// type='submit'
				fullWidth
				variant='contained'
				sx={{ mt: 4 }}>
				Login
			</Button>
			{/* <Link to='/register' className='text-blue-400 underline'>
				{'Need an account? Click here to get started'}
			</Link> */}
		</Box>
	);
};

export default LoginForm;
