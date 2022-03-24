import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ExerciseCard = ({ id, name, description, video, image }) => {
	const location = useLocation();

	function isHighlighted(id) {
		return location.search.includes(id);
	}

	return (
		<Card
			elevation={4}
			className='w-96  px-6 py-4 text-left '
			sx={{ backgroundColor: isHighlighted(id) ? 'lightskyblue' : 'none' }}>
			{image && (
				<CardMedia
					component='img'
					image={image}
					alt={name}
					sx={{ height: '250px', objectFit: 'contain' }}
				/>
			)}
			<CardContent>
				<Box>
					<Typography component='h3' variant='h5'>
						{name}
					</Typography>
				</Box>
				<Box className='mt-2'>
					<Typography sx={{ fontSize: 16 }} variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</Box>
			</CardContent>
			<CardContent></CardContent>
		</Card>
	);
};

export default ExerciseCard;
