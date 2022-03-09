import {
	Avatar,
	Button,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
	return (
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<FitnessCenterIcon />
			</Avatar>
			<Typography component='h1' variant='h5'>
				Sign up
			</Typography>
			<Box component='form' noValidate sx={{ mt: 3 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							autoComplete='given-name'
							name='firstName'
							required
							fullWidth
							id='firstName'
							label='First Name'
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id='lastName'
							label='Last Name'
							name='lastName'
							autoComplete='family-name'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='new-password'
						/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						name='radio-buttons-group'
						row>
						<FormControlLabel control={<Radio />} value='admin' label='Admin' />
						<FormControlLabel control={<Radio />} value='contributor' label='Contributor' />
					</RadioGroup>
				</Grid>

				<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
					Sign Up
				</Button>
				<Grid container justifyContent='flex-end'>
					<Grid item>
						<NavLink to='/'>{'Already have an account? Sign in'}</NavLink>
						{/* <Link href='#' variant='body2'>
									Already have an account? Sign in
								</Link> */}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default RegisterForm;
