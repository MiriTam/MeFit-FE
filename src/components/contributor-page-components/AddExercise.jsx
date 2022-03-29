import { FitnessCenterOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Autocomplete,
	Button,
	Grid,
	TextField,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddExercise = ({ expanded, handleChange, panel }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick(data) {
		console.log(`Adding exercise...`);
		console.log(`New values:`);
		console.log(data);

		// POST new exercise
		// name x
		// description x
		// picture (opt.) x 
		// video (opt.) x
		// category (must be [Arms, Legs, Core, Stamina, Full body, Flexibility])

		//await patchExercise(userToBePatched, role);
	}

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
								<Autocomplete
									{...register('exerciseCategory', {
										required: true
									})}
									disablePortal
									id="exerciseCategory"
									options={["Arms", "Core", "Full body", "Flexibility", "Legs", "Stamina"]}
									//sx={{ width: 300 }}
									fullWidth
									renderInput={(params) => <TextField {...params} label="Category" />}
								/>
							</Grid>
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
