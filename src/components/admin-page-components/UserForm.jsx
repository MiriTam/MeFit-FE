import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
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
import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({ email }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick(data, event) {
		const parent = event.target.offsetParent;
		const userToBePatched = parent.firstChild.innerText;

		console.log(`Modifying ${userToBePatched}...`);
		console.log(`New values:`);
		console.log(data);

		// const { firstName, lastName, email, password, role } = data;

		// const userToBePatched = { firstName, lastName, email };
		// await patchUser(userToBePatched, role);
	}

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography component='h2' variant='h5'>
					{email}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box className='mt-6 md:w-2/3 lg:w-1/2 mx-auto text-left'>
					<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate>
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
	);
};

export default UserForm;
