import { Box, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DashboardSetGoal() {
	return (
		<Box className='shadow-md  rounded-md p-6 '>
			<CardContent>
				<Typography sx={{ mb: 2, fontSize: 30 }} variant='h4'>
					You have no goal set
				</Typography>
				<Link to={'/goals'}>
					<Typography variant='h5' className='text-blue-600 underline'>
						Make goal
					</Typography>
				</Link>
			</CardContent>
		</Box>
	);
}
