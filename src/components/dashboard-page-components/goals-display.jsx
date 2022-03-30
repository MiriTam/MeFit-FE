import { Paper, Typography } from '@mui/material';

export default function GoalsDisplay() {
	return (
		<>
			<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', mt: 3 }}>
				<Typography variant='h6'>Your current goal:</Typography>
			</Paper>

            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', mt: 3 }}>
				<Typography variant='h6'>Set goals (show on no goals set)</Typography>
			</Paper>

			<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', mt: 3 }}>
				<Typography variant='h6'>Previous goals:</Typography>
			</Paper>
		</>
	);
}
