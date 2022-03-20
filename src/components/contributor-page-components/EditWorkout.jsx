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

const EditWorkout = ({ name, type, expanded, panel, handleChange }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick(data) {
		console.log(`Modifying ${name}...`);
		console.log(`New values:`);
		console.log(data);

		// const { name, description } = data;

		// const exerciseToBePatched = { name, description };
		// await patchExercise(userToBePatched, role);
	}

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography sx={{ fontSize: 20 }}>{name}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Box className='mt-6 md:w-2/3 lg:w-1/2 mx-auto text-left pb-10'>
					<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									{...register('workoutName', {
										required: true,
										minLength: 4
									})}
									error={errors.hasOwnProperty('workoutName')}
									autoComplete='given-name'
									name='workoutName'
									fullWidth
									placeholder={name}
									label='Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('workoutType', {
										required: true,
										minLength: 4
										// pattern: {
										// 	value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
										// }
									})}
									error={errors.hasOwnProperty('workoutType')}
									fullWidth
									placeholder={type}
									label='Type'
									name='workoutType'
								/>
							</Grid>
						</Grid>
						<Box className='flex mt-4 w-1/2 mx-auto gap-4'>
							<Button type='submit' fullWidth variant='contained'>
								Update workout
							</Button>
						</Box>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default EditWorkout;