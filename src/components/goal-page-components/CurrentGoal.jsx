import { Box, Button, CardContent, Typography } from '@mui/material';

import { usePrograms } from '../../context/ProgramsContext';
import ProgramCard from '../programs-page-components/ProgramCard';

export default function CurrentGoal() {
	const { programs } = usePrograms();

	return (
		<Box className='shadow-md  rounded-md p-6 text-center ' sx={{ mt: 2 }}>
			<CardContent>
				<Typography sx={{ mb: 3, fontSize: 30 }} variant='h4'>
					My current goal
				</Typography>
				<Box sx={{ mt: 3 }}>
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
				<Button color='error' variant='contained' sx={{ mt: 2 }}>
					Delete Goal
				</Button>
			</CardContent>
		</Box>
	);
}
