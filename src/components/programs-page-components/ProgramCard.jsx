import { Box, CardContent, Paper, Typography } from '@mui/material';
import React from 'react';

const ProgramCard = ({ name, category, workouts }) => {
	return (
		<Paper elevation={4} className='w-64 px-6 py-4 text-left'>
			<CardContent>
				<Box>
					<Typography component='h3' variant='h5'>
						{name}
					</Typography>
				</Box>
				<Box className='mt-2'>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						{/* Contributor ID: {contributorId} */}
					</Typography>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Category: {category}
					</Typography>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Workouts: {workouts.toString()}
					</Typography>
				</Box>
			</CardContent>
		</Paper>
	);
};

export default ProgramCard;
