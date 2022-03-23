import { Box, CardContent, Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ExerciseCard = ({ id, name, description, video, image }) => {
	const location = useLocation();

	function isHighlighted(id) {
		return location.search.includes(id);
	}

	return (
		<Paper
			elevation={4}
			className='w-96 px-6 py-4 text-left '
			sx={{ backgroundColor: isHighlighted(id) ? 'lightskyblue' : 'none' }}>
			<CardContent>
				<Box>
					<Typography component='h3' variant='h5'>
						{name}
					</Typography>
				</Box>
				<Box className='mt-2'>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						{description}
					</Typography>
				</Box>
			</CardContent>
		</Paper>
	);
};

export default ExerciseCard;
