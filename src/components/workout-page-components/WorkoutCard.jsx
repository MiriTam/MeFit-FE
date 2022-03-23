import { Box, CardContent, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ name, type, sets, contributorId }) => {
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
						Contributor ID: {contributorId}
					</Typography>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Type: {type}
					</Typography>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						Sets: <Link to={`/exercises?id=${sets[0]}`}>{sets[0]}</Link>
					</Typography>
				</Box>
			</CardContent>
		</Paper>
	);
};

export default WorkoutCard;
