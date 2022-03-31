import chillingAnimation from './../../animations/chilling';
import { Box, Button } from '@mui/material';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

export default function DashboardSetGoal() {
	return (
		<Box className=''>
			<Box sx={{ width: '500px', margin: 'auto', mb: 4 }}>
				<Lottie animationData={chillingAnimation} loop={true} />
			</Box>
			<Button variant='contained' size='large'>
				<Link to={'/goals'}>Make goal</Link>
			</Button>
		</Box>
	);
}
