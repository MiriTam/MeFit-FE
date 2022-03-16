import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getUsers } from '../../api/users';

const Administrator = ({ firstName }) => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		(async () => {
			const user = await getUsers();
			setUser(user);
		})();
	}, []);

	const {
		register,
		formState: { errors }
	} = useForm();

	return (
		<div>
			<Accordion sx={{ mt: 4 }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>A User</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Box
						sx={{
							marginTop: 2,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}>
						<Typography variant='h4'>This users profile</Typography>
						<Box component='form' noValidate sx={{ mt: 4 }}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										{...register('firstName', {
											required: true,
											minLength: 4
										})}
										error={errors.hasOwnProperty('firstName')}
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
										error={errors.hasOwnProperty('lastName')}
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
										error={errors.hasOwnProperty('email')}
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
										error={errors.hasOwnProperty('password')}
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
										<RadioGroup row aria-labelledby='roles' defaultValue={'regular'}>
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
								Update user
							</Button>
						</Box>
					</Box>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Administrator;
