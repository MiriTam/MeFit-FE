import { DirectionsRunOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Grid,
	TextField,
	Typography,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddWorkout = ({ expanded, panel, handleChange }) => {
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
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Box className='flex items-center'>
					<DirectionsRunOutlined sx={{ mr: 1.5 }} />
					<Typography sx={{ fontSize: 20 }}>Add a new workout</Typography>
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
									<FormLabel id='category'>Workout Category</FormLabel>
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
							<Grid item xs={12}>
								<FormControl>
									<FormLabel id='difficulty'>Workout Difficulty</FormLabel>
									<RadioGroup
										row
										aria-labelledby='difficulty'>
										<FormControlLabel
											{...register('difficulty')}
											value='Beginner'
											control={<Radio />}
											label='Beginner'
										/>
										<FormControlLabel
											{...register('difficulty')}
											value='Intermediate'
											control={<Radio />}
											label='Intermediate'
										/>
										<FormControlLabel
											{...register('difficulty')}
											value='Expert'
											control={<Radio />}
											label='Expert'
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						<Box className='flex mt-4 w-1/2 mx-auto gap-4'>
							<Button type='submit' fullWidth variant='contained'>
								Add Workout
							</Button>
						</Box>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default AddWorkout;
