import { LibraryBooksOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Autocomplete,
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

import { useAuth0 } from '@auth0/auth0-react';
import { postProgram } from '../../api/programs';

const AddProgram = ({ expanded, panel, handleChange }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const { getAccessTokenSilently } = useAuth0();

	async function onSubmitClick(data) {
		console.log(`Adding program...`);
		console.log(`New values:`);
		console.log(data);

		const newProgram = {
			name: data.programName,
			category: data.category,
			difficulty: data.difficulty
		}

			const token = await getAccessTokenSilently();
			const apiProgram = await postProgram(newProgram, token);

			console.log("New Program ", apiProgram)
	}

	return (
		<Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Box className='flex items-center'>
					<LibraryBooksOutlined sx={{ mr: 1.25 }} />
					<Typography sx={{ fontSize: 20 }}>Add a new program</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box className=' md:w-2/3 lg:w-1/2 mx-auto text-left pb-10'>
					<Box component='form' onSubmit={handleSubmit(onSubmitClick)} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									{...register('programName', {
										required: true,
										minLength: 4
									})}
									error={errors.hasOwnProperty('programName')}
									autoComplete='given-name'
									name='programName'
									fullWidth
									label='Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									<FormLabel id='category'>Program Category</FormLabel>
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
									<FormLabel id='difficulty'>Program Difficulty</FormLabel>
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
								Add program
							</Button>
						</Box>
					</Box>
				</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default AddProgram;
