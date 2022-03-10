import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { postUser } from '../../api/users';

const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick({ firstName, lastName, email, password, role }) {
		await postUser(firstName);
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
				Registration Form
			</Typography>
			<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate sx={{ mt: 4 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('firstName', {
								required: true,
								minLength: 4
							})}
							error={errors.firstName}
							autoComplete='given-name'
							name='firstName'
							fullWidth
							id='firstName'
							label='First Name'
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('lastName', {
								required: true,
								minLength: 4
							})}
							error={errors.lastName}
							fullWidth
							id='lastName'
							label='Last Name'
							name='lastName'
							autoComplete='family-name'
						/>
					</Grid>
					<Grid item xs={12}>
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
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('password', {
								required: true,
								minLength: 4
							})}
							error={errors.password}
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='new-password'
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<FormLabel id='roles'>User role</FormLabel>
							<RadioGroup
								row
								aria-labelledby='roles'
								name='row-radio-buttons-group'
								defaultValue={'regular'}>
								<FormControlLabel
									{...register('role')}
									value='regular'
									control={<Radio />}
									label='Regular'
								/>
								<FormControlLabel
									{...register('role')}
									value='contributor'
									control={<Radio />}
									label='Contributor'
								/>
								<FormControlLabel
									{...register('role')}
									value='admin'
									control={<Radio />}
									label='Admin'
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>
				<Button type='submit' fullWidth variant='contained' sx={{ mt: 2, mb: 2 }}>
					Register
				</Button>
			</Box>
			<Link to='/' className='text-blue-400 underline'>
				{'Already have an account? Sign in'}
			</Link>
		</Box>
	);
};

export default RegistrationForm;
