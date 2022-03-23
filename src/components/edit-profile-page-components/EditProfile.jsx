import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const {
		register: registerInfo,
		handleSubmit: handleSubmitInfo,
		formState: { errors: errorsInfo }
	} = useForm();

	async function onAttributesFormSubmitClick(data) {
		console.log(data);
	}

	async function onInformationFormSubmitClick(data) {
		console.log(data);
	}

	return (
		<Box className='mt-4 md:w-2/3 lg:w-1/2 text-left'>
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
							error={errors.hasOwnProperty('disabilities')}
							fullWidth
							name='disabilities'
							label='Disabilities'
							id='disabilities'
						/>
					</Grid>
				</Grid>

				{/* TODO: Add Goals  */}
				{/* TODO: Add Workout Programs  */}
				{/* TODO: Add Workouts  */}

				<Box className='w-1/2 mx-auto'>
					<Button type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
						Update Attributes
					</Button>
				</Box>
			</Box>

			<Box
				component='form'
				onSubmit={handleSubmitInfo(onInformationFormSubmitClick)}
				noValidate
				className='mt-8'>
				<Typography component='h2' variant='h5'>
					Personal Information
				</Typography>
				<Grid container spacing={2} sx={{ mt: 0.5 }}>
					<Grid item xs={12}>
						<TextField
							{...registerInfo('address', {
								required: true,
								minLength: 4
							})}
							error={errorsInfo.hasOwnProperty('address')}
							fullWidth
							name='address'
							label='Street Address'
							id='address'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...registerInfo('postalCode', {
								required: true,
								minLength: 4
							})}
							error={errorsInfo.hasOwnProperty('postalCode')}
							fullWidth
							name='postalCode'
							label='Postal Code'
							id='postalCode'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...registerInfo('postalPlace', {
								required: true,
								minLength: 4
							})}
							error={errorsInfo.hasOwnProperty('postalPlace')}
							fullWidth
							name='postalPlace'
							label='Postal Place'
							id='postalPlace'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...registerInfo('country', {
								required: true,
								minLength: 4
							})}
							error={errorsInfo.hasOwnProperty('country')}
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

				<Box className='w-1/2 mx-auto'>
					<Button type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
						Update Information
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default EditProfile;
