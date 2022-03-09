import {
	Avatar,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	TextField,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
	return (
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
			<Avatar sx={{ m: 1, bgcolor: 'secondary-main' }}>
				<FitnessCenterIcon />
			</Avatar>
			<Typography component='h1' variant='h5'>
				Sign in
			</Typography>
			<Box component='form' noValidate sx={{ mt: 1 }}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
				/>
				<TextField
					margin='normal'
					required
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
			</Box>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Sign in
			</Button>
			<Grid container>
				<Grid item xs>
					<NavLink to='/register'>{'Need an account? Click here to get started'}</NavLink>
				</Grid>
			</Grid>
		</Box>
	);
};

export default LoginForm;
