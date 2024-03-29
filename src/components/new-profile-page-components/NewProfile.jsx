import { useAuth0 } from '@auth0/auth0-react';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Grid,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { postContributorRequest } from '../../api/contributor-requests';
import { postProfile } from '../../api/profiles';
import { postUser } from '../../api/users';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { isContributor } from '../../utils/isRole';

const NewProfile = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { setHasProfile } = useCurrentUser();

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onFormSubmitClick(data) {
		const token = await getAccessTokenSilently();

		await postUser(user.email, data, token);
		await postProfile(data, token);

		if (data.request) {
			await postContributorRequest(token);
		}

		setHasProfile(true);
		navigate('/dashboard');
	}

	return (
		<Box className='mt-4 md:w-2/3 lg:w-1/2 mx-auto text-left'>
			<Box component='form' onSubmit={handleSubmit(onFormSubmitClick)} noValidate>
				<Typography component='h2' variant='h5'>
					Personal Information
				</Typography>
				<Grid container spacing={2} sx={{ mt: 0.5 }}>
					<Grid item xs={12}>
						<TextField
							defaultValue={user?.email}
							disabled
							name='email'
							fullWidth
							id='email'
							label='email'
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('firstName', {
								required: true,
								minLength: 4
							})}
							error={errors.hasOwnProperty('firstName')}
							name='firstName'
							fullWidth
							id='firstName'
							label='First name'
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
							label='Last name'
							name='lastName'
						/>
					</Grid>
				</Grid>

				<Typography component='h2' variant='h5' sx={{ mt: 2 }}>
					Fitness Attributes
				</Typography>
				<Grid container spacing={2} sx={{ mt: 0.5 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							{...register('weight', {
								required: true,
								minLength: 2,
								maxLength: 3,
								pattern: {
									value: /^\d+$/
								}
							})}
							InputProps={{
								endAdornment: <InputAdornment position='end'>kg</InputAdornment>
							}}
							error={errors.hasOwnProperty('weight')}
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
								required: true,
								minLength: 2,
								maxLength: 3,
								pattern: {
									value: /^\d+$/
								}
							})}
							InputProps={{
								endAdornment: <InputAdornment position='end'>cm</InputAdornment>
							}}
							error={errors.hasOwnProperty('height')}
							fullWidth
							id='height'
							label='Height'
							name='height'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register('medicalConditions', {
								required: true,
								minLength: 4,
								maxLength: 50
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
								minLength: 4,
								maxLength: 50
							})}
							error={errors.hasOwnProperty('disabilities')}
							fullWidth
							name='disabilities'
							label='Disabilities'
							id='disabilities'
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl>
							<FormLabel id='fitnessLevel'>Fitness level</FormLabel>
							<RadioGroup row aria-labelledby='fitnessLevel' defaultValue={'Beginner'}>
								<FormControlLabel
									{...register('fitnessLevel')}
									value='Beginner'
									control={<Radio />}
									label='Beginner'
								/>
								<FormControlLabel
									{...register('fitnessLevel')}
									value='Intermediate'
									control={<Radio />}
									label='Intermediate'
								/>
								<FormControlLabel
									{...register('fitnessLevel')}
									value='Expert'
									control={<Radio />}
									label='Expert'
								/>
							</RadioGroup>
						</FormControl>
					</Grid>
				</Grid>

				{!isContributor(user) && (
					<Grid item xs={12} sx={{ mt: 1 }}>
						<FormGroup>
							<FormControlLabel
								{...register('request')}
								control={<Checkbox />}
								label='I want to submit a contributor request'
							/>
						</FormGroup>
					</Grid>
				)}

				<Box className='w-1/2 mx-auto'>
					<Button type='submit' fullWidth variant='contained' sx={{ mt: 2 }}>
						Create Profile
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default NewProfile;
