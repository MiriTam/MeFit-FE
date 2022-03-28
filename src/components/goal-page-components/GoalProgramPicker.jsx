import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { usePrograms } from '../../context/ProgramsContext';
import GoalProgramCard from './GoalProgramCard';

const GoalProgramPicker = () => {
	const { programs } = usePrograms();

	return (
		<Box sx={{ my: 3 }} className='text-center'>
			<Typography variant='h5' gutterBottom>
				Pick a program
			</Typography>
			<Box className='flex flex-wrap justify-center items-center gap-4 ' sx={{ mt: 4 }}>
				{programs.map(program => (
					<GoalProgramCard
						key={program.id}
						name={program.name}
						difficulty={program.difficulty}
						category={program.category}
						workouts={program.workouts}
					/>
				))}
			</Box>
		</Box>
	);
};

export default GoalProgramPicker;
