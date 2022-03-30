import { FitnessCenterOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Alert,
	Autocomplete,
	Button,
	Collapse,
	IconButton,
	Grid,
	TextField,
	Typography,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth0 } from '@auth0/auth0-react';
import { postExercise } from '../../api/exercices';
import { useExercises } from '../../context/ExercisesContext';


const AddExercise = ({ expanded, handleChange, panel }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const { getAccessTokenSilently } = useAuth0();
	const { setExercises } = useExercises();
	const [open, setOpen] = useState(false); // Alert-box

	async function onSubmitClick(data) {
		console.log(`Adding exercise...`);
		console.log(`New values:`);

		let imageUrl = null; 
		if (data.exercisePictureUrl) imageUrl = data.exercisePictureUrl;

		const newExercise = {
			name: data.exerciseName,
			description: data.exerciseDescription,
			image: imageUrl,
			video: data.exerciseVideoUrl,
			category: data.category
		}

		setOpen(true); // opens the alert

		console.log("NEW: ", newExercise);
		const token = await getAccessTokenSilently();
		const apiExercise = await postExercise(newExercise, token);

		const jsonized = JSON.parse(apiExercise);
		console.log("New Exercise ", apiExercise);
		

		setExercises(prev => ({ ...prev, jsonized}));
	}
	
	/*
	const handleChange = event => {
		setSelectedCategory(event.value);
	};
	*/

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Box className='flex items-center'>
					<FitnessCenterOutlined sx={{ mr: 1.5 }} />
					<Typography sx={{ fontSize: 20 }}>Add a new exercise</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box className='md:w-2/3 lg:w-1/2 mx-auto text-left pb-10'>
					<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									{...register('exerciseName', {
										required: true,
										minLength: 4
									})}
									error={errors.hasOwnProperty('exerciseName')}
									autoComplete='given-name'
									name='exerciseName'
									fullWidth
									label='Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('exerciseDescription', {
										required: true,
										minLength: 4
										// pattern: {
										// 	value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
										// }
									})}
									error={errors.hasOwnProperty('exerciseDescription')}
									fullWidth
									label='Description'
									name='exerciseDescription'
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									<FormLabel id='category'>Exercise Category</FormLabel>
									<RadioGroup
										row
										aria-labelledby='category'>
																				<Box>
											<FormControlLabel
												{...register('category')}
												value='Arms'
												control={<Radio />}
												label='Arms'
											/>
											<FormControlLabel
												{...register('category')}
												value='Legs'
												control={<Radio />}
												label='Legs'
											/>
											<FormControlLabel
												{...register('category')}
												value='Core'
												control={<Radio />}
												label='Core'
											/>
										</Box>
										<Box>
											<FormControlLabel
												{...register('category')}
												value='Full body'
												control={<Radio />}
												label='Full body'
											/>
											<FormControlLabel
												{...register('category')}
												value='Flexibility'
												control={<Radio />}
												label='Flexibility'
											/>
											<FormControlLabel
												{...register('category')}
												value='Stamina'
												control={<Radio />}
												label='Stamina'
											/>
										</Box>
									</RadioGroup>
								</FormControl>
							</Grid>
							{/* SER grei ut, men categories blir ikke med :(
							<Grid item xs={12}>
								<Autocomplete
									{...register('exerciseCategory', {
										//required: true,
									})}
									onChange={handleChange}
									error={errors.hasOwnProperty('exerciseCategory')}
									autoComplete='Exercise Category'
									name='exerciseCategory'
									label='Category'
									autoFocus
									disablePortal
									id="exerciseCategory"
									options={[
										{label: "Arms", Id: 1},
										{label: "Core", Id: 2},
										{label: "Full body", Id: 3},
										{label: "Flexibility", Id: 4},
										{label: "Legs", Id: 5},
										{label: "Stamina", Id: 6}]}
									fullWidth
									renderInput={(params) => <TextField {...params} label="Category" />}
								/>
								</Grid> */}
							<Grid item xs={12}>
								<TextField
									{...register('exercisePictureUrl', {
										required: false,
										minLength: 4
									})}
									error={errors.hasOwnProperty('exercisePictureUrl')}
									autoComplete='Picture URL'
									name='exercisePictureUrl'
									fullWidth
									label='Picture'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('exerciseVideoUrl', {
										required: false,
										minLength: 4
									})}
									error={errors.hasOwnProperty('exerciseVideoUrl')}
									autoComplete='Video URL'
									name='exerciseVideoUrl'
									fullWidth
									label='Video'
									autoFocus
								/>
							</Grid>
						</Grid>
						<Box sx={{width: '100%'}}>
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
									>Your new Exercise has been submitted!</Alert>
							</Collapse>
						</Box>
						<Box className='flex mt-4 w-1/2 mx-auto gap-4'>
							<Button type='submit' fullWidth variant='contained'>
								Add Exercise
							</Button>
						</Box>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default AddExercise;
