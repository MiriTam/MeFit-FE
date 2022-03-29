import { Box, Button, CardContent, Typography } from '@mui/material';

import { usePrograms } from '../../context/ProgramsContext';
import getProgramById from '../../utils/getProgramById';
import ProgramCard from '../programs-page-components/ProgramCard';

export default function CurrentGoal({ endDate, workoutProgramId, subGoals }) {
	const { programs } = usePrograms();

	return (
		<Box className='shadow-md  rounded-md  text-center '>
			<CardContent>
				<Typography sx={{ mb: 3, fontSize: 30 }} variant='h4'>
					My current goal
				</Typography>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h5'>Program:</Typography>
					<Box className='flex justify-center' sx={{ mt: 1 }}>
						<ProgramCard
							category={getProgramById(programs, workoutProgramId)?.category}
							name={getProgramById(programs, workoutProgramId)?.name}
							difficulty={getProgramById(programs, workoutProgramId)?.difficulty}
							workouts={getProgramById(programs, workoutProgramId)?.workouts}
						/>
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
