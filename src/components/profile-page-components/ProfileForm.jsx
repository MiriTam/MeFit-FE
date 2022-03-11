import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';

const ProfileForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick(data) {
		console.log(data);
	}

	return (
		<Box className='mt-4 md:w-4/5 lg:w-7/12 mx-auto'>
			<Typography component='h2' variant='h5'>
				Profile Form
			</Typography>
			<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate sx={{ mt: 4 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('weight', {
								required: true,
								minLength: 4
							})}
							// defaultValue={120}
							error={errors.weight}
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
							error={errors.height}
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
							error={errors.medicalConditions}
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
							error={errors.disabilities}
							fullWidth
							name='disabilities'
							label='Disabilities'
							id='disabilities'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('address', {
								required: true,
								minLength: 4
							})}
							error={errors.address}
							fullWidth
							name='address'
							label='Street Address'
							id='address'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register('postalCode', {
								required: true,
								minLength: 4
							})}
							error={errors.postalCode}
							fullWidth
							name='postalCode'
							label='Postal Code'
							id='postalCode'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register('postalPlace', {
								required: true,
								minLength: 4
							})}
							error={errors.postalPlace}
							fullWidth
							name='postalPlace'
							label='Postal Place'
							id='postalPlace'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register('country', {
								required: true,
								minLength: 4
							})}
							error={errors.country}
							fullWidth
							name='country'
							label='Country'
							id='country'
						/>
					</Grid>
				</Grid>

				{/* TODO: Add Goals  */}
				{/* TODO: Add Workout Programs  */}
				{/* TODO: Add Workouts  */}

				<Button type='submit' fullWidth variant='contained' sx={{ mt: 2, mb: 2 }}>
					Update Profile
				</Button>
			</Box>
		</Box>
	);
};

export default ProfileForm;
