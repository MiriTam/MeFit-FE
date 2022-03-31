import { Box, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import chillingAnimation from './../../animations/chilling';

export default function DashboardSetGoal() {
	return (
		<Box className='shadow-md  rounded-md p-6 '>
			<CardContent>
				<Link to={'/goals'}>
					<Typography variant='h5' className='text-blue-600 underline'>
						Make goal
						</Typography>
				</Link>
				<Box sx={{width: '500px', margin: 'auto'}}>
				    <Lottie
					    animationData={chillingAnimation}
					    loop={true}
					/>
				</Box>
			</CardContent>
		</Box>
	);
}
