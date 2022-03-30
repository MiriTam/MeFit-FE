import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';

import { useCurrentUser } from '../../context/CurrentUserContext';

const EditProfile = () => {
	const { profile } = useCurrentUser();
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onAttributesFormSubmitClick(data) {
		console.log(data);
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
								required: true,
								minLength: 4
							})}
							// defaultValue={120}
							error={errors.hasOwnProperty('weight')}
							defaultValue={profile?.weight}
							name='weight'
							fullWidth
							id='weight'
							label='Weight (kg)'
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('height', {
								required: true,
								minLength: 4
							})}
							error={errors.hasOwnProperty('height')}
							defaultValue={profile?.height}
							fullWidth
							id='height'
							label='Height (cm)'
							name='height'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('medicalConditions', {
								required: true,
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
								required: true,
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
