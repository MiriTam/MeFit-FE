import { Box, Card, CardContent, Typography } from '@mui/material';

const ExerciseCard = ({ name, description, video, image }) => {
	return (
		<Card
			className='max-w-xs px-6 py-4 text-left shadow-lg'
			sx={{ backgroundColor: '#EFF6FF' }}
			variant='outlined'>
			<CardContent>
				<Box>
					<Typography component='h2' variant='h5'>
						{name}
					</Typography>
				</Box>
				<Box className='mt-2'>
					<Typography sx={{ fontSize: 16 }} color='text.secondary'>
						{description}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ExerciseCard;
