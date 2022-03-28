import { Box, Button, Card, CardContent, Typography } from '@mui/material';

import { usePrograms } from '../../context/ProgramsContext';
import ProgramCard from '../programs-page-components/ProgramCard';

export default function CurrentGoal() {
	const { programs } = usePrograms();

	return (
		<Card>
			<CardContent>
				<Typography variant='h4'>My current goal</Typography>

				<Box sx={{ mt: 1 }}>
					<Typography variant='h5'>Program:</Typography>
					<Box sx={{ mt: 2 }}>
						{programs.length > 0 && (
							<ProgramCard
								category={programs[0]?.category}
								name={programs[0]?.name}
								workouts={programs[0]?.workouts}
							/>
						)}
					</Box>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5'>Workouts:</Typography>
				</Box>
				<Box sx={{ mt: 1 }}>
					<Typography variant='h5'>Exercises:</Typography>
				</Box>

				<Button sx={{ mt: 2 }} variant='contained' color='error'>
					Remove Goal
				</Button>
			</CardContent>
		</Card>
	);
}
