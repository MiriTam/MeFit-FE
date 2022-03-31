import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

import { useGoals } from '../../context/GoalContext';
import { usePrograms } from '../../context/ProgramsContext';

const GoalProgramPicker = () => {
	const { programs } = usePrograms();
	const { setNewGoal } = useGoals();
	const [pickedProgram, setPickedProgram] = useState('Hot and Heavy');

	useEffect(() => {
		const matchedProgram = programs.find(program => program.name === pickedProgram);

		setNewGoal(prev => ({
			...prev,
			workoutProgramId: matchedProgram.id
		}));
	}, [pickedProgram, setNewGoal, programs]);

	const handleChange = event => {
		setPickedProgram(event.target.value);
	};

	return (
		<Box className='text-center'>
			<Typography variant='h5' gutterBottom>
				Pick a program
			</Typography>
			<Box className='flex flex-wrap justify-center items-center gap-4 ' sx={{ mt: 2 }}>
				<FormControl>
					<RadioGroup
						aria-labelledby='demo-controlled-radio-buttons-group'
						name='controlled-radio-buttons-group'
						onChange={handleChange}
						value={pickedProgram}>
						{programs.map(program => (
							<Box key={program.name}>
								<FormControlLabel
									value={program.name}
									control={<Radio />}
									label={program.name}
								/>
								<Typography sx={{ fontSize: 16 }} color='text.secondary'>
									Category:{' '}
									<Typography
										variant='span'
										className='font-semibold'
										color='text.primary'>
										{program.category}
									</Typography>
								</Typography>
								<Typography sx={{ fontSize: 16 }} color='text.secondary'>
									Difficulty:{' '}
									<Typography
										variant='span'
										className='font-semibold'
										color='text.primary'>
										{program.difficulty}
									</Typography>
								</Typography>
							</Box>
						))}
					</RadioGroup>
				</FormControl>
			</Box>
		</Box>
	);
};

export default GoalProgramPicker;
