import { Person } from '@mui/icons-material';
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

import getDefaultRoleValue from '../../utils/getDefaultRoleString';

// import getManagementApiAccessToken from '../../api/tokens';

const EditUserForm = ({
	user: { firstName, lastName, email, password, isContributor, isAdmin },
	expanded,
	panel,
	handleChange
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick(data) {
		console.log(`Modifying ${email}...`);
		console.log(`New values:`);
		console.log(data);
	}

	return (
		<Accordion variant='elevation' expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Box className='flex items-center' sx={{ fontSize: 20 }}>
					<Person sx={{ mr: 1.25 }} />
					{`${firstName} ${lastName}`}
					<Typography
						variant='span'
						color={'text.secondary'}
						sx={{ fontSize: 18, ml: 1, display: { xs: 'none', lg: 'inline' } }}>
						{email}
					</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box className='mt-6 md:w-2/3 lg:w-1/2 mx-auto text-left pb-10'>
					<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									{...register('firstName', {
										minLength: 4
									})}
									defaultValue={firstName}
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
										minLength: 4
									})}
									defaultValue={lastName}
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
										minLength: 4,
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
										}
									})}
									defaultValue={email}
									error={errors.hasOwnProperty('email')}
									fullWidth
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('nickname', {
										minLength: 4
									})}
									error={errors.hasOwnProperty('nickname')}
									fullWidth
									name='nickname'
									label='Nickname'
									type='nickname'
									autoComplete='new-nickname'
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									<FormLabel id='roles'>User role</FormLabel>
									<RadioGroup
										row
										aria-labelledby='roles'
										defaultValue={getDefaultRoleValue(isContributor, isAdmin)}>
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
						<Box className='flex mt-4 gap-4'>
							<Button type='submit' fullWidth variant='contained'>
								Update user
							</Button>
							<Button type='submit' fullWidth variant='contained' color='error'>
								Delete user
							</Button>
						</Box>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default EditUserForm;
