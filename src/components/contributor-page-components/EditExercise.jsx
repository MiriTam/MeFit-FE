import { FitnessCenterOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Alert,
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

const EditExercise = ({ name, description, image, video, category, expanded, panel, handleChange }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const [open, setOpen] = useState(false); // Alert-box

	async function onSubmitClick(data) {
		console.log(`Modifying ${name}...`);
		console.log(`New values:`);
		console.log(data);

		setOpen(true); // opens the alert

		// const { name, description } = data;

		// const exerciseToBePatched = { name, description };
		// await patchExercise(userToBePatched, role);
	}

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Box className='flex items-center'>
					<FitnessCenterOutlined sx={{ mr: 1.5 }} />
					<Typography sx={{ fontSize: 20 }}>{name}</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box className=' md:w-2/3 lg:w-1/2 mx-auto text-left pb-10'>
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
									value={name}
									label='Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									{...register('exerciseDescription', {
										required: true,
										minLength: 4
									})}
									error={errors.hasOwnProperty('exerciseDescription')}
									fullWidth
									value={description}
									label='Description'
									name='exerciseDescription'
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									<FormLabel id='category'>Exercise Category</FormLabel>
									<RadioGroup
										defaultValue={category}
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
								<TextField
									{...register('exercisePictureUrl', {
										required: false,
										minLength: 4
									})}
									error={errors.hasOwnProperty('exercisePictureUrl')}
									autoComplete='Picture URL'
									name='exercisePictureUrl'
									fullWidth
									value={image}
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
									value={video}
									label='Video'
									autoFocus
								/>
							</Grid>
						</Grid>
						<Box sx={{width: '100%'}} marginTop={2}>
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
									>The Exercise has been updated!</Alert>
							</Collapse>
						</Box>
						<Box className='flex mt-4 w-1/2 mx-auto gap-4'>
							<Button type='submit' fullWidth variant='contained'>
								Update exercise
							</Button>
						</Box>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default EditExercise;
