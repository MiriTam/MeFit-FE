import { Box, CardContent, LinearProgress, Typography } from '@mui/material';

import { usePrograms } from '../../context/ProgramsContext';
import ProgramCard from '../programs-page-components/ProgramCard';

export default function DashboardCurrentGoal() {
	const { programs } = usePrograms();

	return (
		<Box className='shadow-md  rounded-md p-6 ' sx={{ mt: 4 }}>
			<CardContent>
				<Typography sx={{ mb: 3, fontSize: 30 }} variant='h4'>
					My current goal
				</Typography>
				<Box className='lg:w-5/6 mx-auto'>
					<LinearProgress variant='determinate' value={60} />
				</Box>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h5'>Days left: </Typography>
					<Typography sx={{ mt: 0.5, fontSize: 20 }} color='text.secondary'>
						5 days
					</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5'>Program:</Typography>
					<Box className='flex justify-center' sx={{ mt: 1 }}>
						{programs.length > 0 && (
							<ProgramCard
								category={programs[0]?.category}
								name={programs[0]?.name}
								difficulty={programs[0]?.difficulty}
								workouts={programs[0]?.workouts}
							/>
						)}
					</Box>
				</Box>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h5'>Workouts:</Typography>
					<Typography color={'text.secondary'} sx={{ fontSize: 18, mt: 0.5 }}>
						No workouts to show
					</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5'>Exercises:</Typography>
					<Typography color={'text.secondary'} sx={{ fontSize: 18, mt: 0.5 }}>
						No exercises to show
					</Typography>
				</Box>
			</CardContent>
		</Box>
	);
}
