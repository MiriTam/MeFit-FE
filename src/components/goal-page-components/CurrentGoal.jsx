import { Box, Button, CardContent, Paper, Typography } from '@mui/material';

export default function CurrentGoal({ currentGoal, goalProgram }) {
	return (
		<Box className='shadow-md  rounded-md  text-center '>
			<CardContent>
				<Typography sx={{ mb: 3, fontSize: 30 }} variant='h4'>
					My current goal
				</Typography>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h5'>Program:</Typography>
					<Box className='flex justify-center' sx={{ mt: 2 }}>
						<Paper elevation={4} className='w-64 px-6 py-4 text-center'>
							<CardContent>
								<Box>
									<Typography component='h3' variant='h5'>
										{goalProgram.name}
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
												{goalProgram.category}
											</Typography>
										</Typography>
										<Typography sx={{ fontSize: 16 }} color='text.secondary'>
											Difficulty:{' '}
											<Typography
												variant='span'
												className='font-semibold'
												color='text.primary'>
												{goalProgram.difficulty}
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
				<Button color='error' variant='contained' sx={{ mt: 2 }}>
					Delete Goal
				</Button>
			</CardContent>
		</Box>
	);
}
