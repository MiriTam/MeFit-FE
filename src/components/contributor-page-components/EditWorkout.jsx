import { DirectionsRunOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const EditWorkout = ({ id, name, category, difficulty, expanded, panel, handleChange }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	async function onSubmitClick(data) {
		console.log(`Modifying ${name} with id ${id}...`);
		console.log(`New values:`);
		console.log(data);
	}

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Box className='flex items-center'>
					<DirectionsRunOutlined sx={{ mr: 1.5 }} />
					<Typography sx={{ fontSize: 20 }}>{name}</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box className=' md:w-2/3 lg:w-1/2 mx-auto text-left pb-10'>
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
									value={name}
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
									value={category}
									label='Type'
									name='workoutType'
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									<FormLabel id='difficulty'>Workout difficulty</FormLabel>
									<RadioGroup row aria-labelledby='roles' defaultValue={difficulty}>
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
