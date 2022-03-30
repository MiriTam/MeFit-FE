import { Box, CardContent, LinearProgress, Paper, Typography } from '@mui/material';

import { usePrograms } from '../../context/ProgramsContext';
import ProgramCard from '../programs-page-components/ProgramCard';

export default function DashboardCurrentGoal({ currentGoal, goalProgram }) {
	const { programs } = usePrograms();

	return (
		<Box className='shadow-md  rounded-md p-6 '>
			<CardContent>
				<Typography sx={{ mb: 3, fontSize: 30 }} variant='h4'>
					My current goal
				</Typography>
				<Box className='lg:w-5/6 mx-auto'>
					<LinearProgress variant='determinate' value={60} />
				</Box>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h5'>Days left:</Typography>
					<Typography sx={{ mt: 0.5, fontSize: 20 }} color='text.secondary'>
						7 days
					</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5'>Program:</Typography>
					<Box className='flex justify-center' sx={{ mt: 2 }}>
						<Paper elevation={4} className='w-64 px-6 py-4 text-center'>
							<CardContent>
								<Box>
									<Typography component='h3' variant='h5'>
										{goalProgram?.name}
									</Typography>
								</Box>
								<Box className='mt-2'>
									<Box>
										<Typography sx={{ fontSize: 16 }} color='text.secondary'>
											Category:{' '}
											<Typography
												variant='span'
												className='font-semibold'
												color='text.primary'>
												{goalProgram?.category}
											</Typography>
										</Typography>
										<Typography sx={{ fontSize: 16 }} color='text.secondary'>
											Difficulty:{' '}
											<Typography
												variant='span'
												className='font-semibold'
												color='text.primary'>
												{goalProgram?.difficulty}
											</Typography>
										</Typography>
									</Box>
								</Box>
							</CardContent>
						</Paper>
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
