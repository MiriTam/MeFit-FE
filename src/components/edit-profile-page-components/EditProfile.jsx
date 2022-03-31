import { Alert, Button, Collapse, Grid, IconButton, TextField, Typography, InputAdornment, } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { patchProfile } from '../../api/profiles';
import { useCurrentUser } from '../../context/CurrentUserContext';


const EditProfile = () => {
	const { profile } = useCurrentUser();
	const { getAccessTokenSilently } = useAuth0();
	const [open, setOpen] = useState(false); // Alert-box
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onAttributesFormSubmitClick(data) {
		console.log(data);

		setOpen(true); // opens the alert

		const token = await getAccessTokenSilently();
		// PATCH profile
		const updatedProfile = patchProfile(data, profile.id, token);
		console.log("updated profile: ", updatedProfile);
	}

	return (
		<Box className='mt-4 md:w-2/3 lg:w-1/2 text-left mx-auto'>
			<Box component='form' onSubmit={handleSubmit(onAttributesFormSubmitClick)} noValidate>
				<Typography component='h2' variant='h5'>
					Fitness Attributes
				</Typography>
				<Grid container spacing={2} sx={{ mt: 0.5 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('weight', {
								minLength: 2,
								maxLength: 3,
								pattern: {
									value: /^\d+$/
								}
							})}
							InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment>,}}
							error={errors.hasOwnProperty('weight')}
							defaultValue={profile?.weight}
							name='weight'
							fullWidth
							id='weight'
							label='Weight'
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('height', {
								minLength: 2,
								maxLength: 3,
								pattern: {
									value: /^\d+$/
								}
							})}
							InputProps={{ endAdornment: <InputAdornment position="end">cm</InputAdornment>,}}
							error={errors.hasOwnProperty('height')}
							defaultValue={profile?.height}
							fullWidth
							id='height'
							label='Height'
							name='height'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('medicalConditions', {
								minLength: 4
							})}
							defaultValue={profile?.medicalConditions}
							error={errors.hasOwnProperty('medicalConditions')}
							fullWidth
							id='medicalConditions'
							label='Medical Conditions'
							name='medicalConditions'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('disabilities', {
								minLength: 4
							})}
							defaultValue={profile?.disabilities}
							error={errors.hasOwnProperty('disabilities')}
							fullWidth
							name='disabilities'
							label='Disabilities'
							id='disabilities'
						/>
					</Grid>
				</Grid>
				<Box sx={{width: '100%'}} marginTop={2}>
							<Collapse in={open}>
									<Alert
										action={
											<IconButton
												aria-label="close"
												color="inherit"
												size="small"
												onClick={() => {
													setOpen(false);
												}}
												>
												<CloseIcon fontSize="inherit" />
											</IconButton>
										}
										sx={{ mb: 2 }}
									>Your profile has been updated!</Alert>
							</Collapse>
						</Box>
				<Box className='w-1/2 mx-auto'>
					<Button type='submit' fullWidth variant='contained' sx={{ mt: 4 }}>
						Update Attributes
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default EditProfile;
