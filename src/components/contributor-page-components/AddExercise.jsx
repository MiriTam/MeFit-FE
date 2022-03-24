import { FitnessCenterOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Grid,
	TextField,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddExercise = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick(data) {
		console.log(`Adding exercise...`);
		console.log(`New values:`);
		console.log(data);

		// const { name, description } = data;

		// const exerciseToBePatched = { name, description };
		// await patchExercise(userToBePatched, role);
	}

	return (
		<Accordion className=''>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Box className='flex items-center'>
					<FitnessCenterOutlined sx={{ mr: 1.5 }} />
					<Typography sx={{ fontSize: 20 }}>Add a new exercise</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box className='mt-6 md:w-2/3 lg:w-1/2 mx-auto text-left pb-10'>
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
