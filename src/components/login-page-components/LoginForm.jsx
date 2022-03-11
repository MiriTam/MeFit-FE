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
	const { login } = useUser();

	async function onSubmitClick({ email, password }) {
		const apiUsers = await getUsers();
		const apiUser = apiUsers.find(_user => _user.username === email);

		// User does not exist
		if (!apiUser) return;

		// Otherwise, log in user
		login(apiUser);
	}

	return (
		<Box
			sx={{
				marginTop: 14,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
			<Typography component='h1' variant='h5'>
				Login Form
			</Typography>
			<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate sx={{ mt: 4 }}>
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
				<FormControlLabel
					control={<Checkbox value='remember' color='primary' />}
					label='Remember me'
				/>
				<Button type='submit' fullWidth variant='contained' sx={{ mt: 2, mb: 2 }}>
					Login
				</Button>
			</Box>
			<Link to='/register' className='text-blue-400 underline'>
				{'Need an account? Click here to get started'}
			</Link>
		</Box>
	);
};

export default LoginForm;
