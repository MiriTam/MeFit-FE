import { Container, Typography } from '@mui/material';

const GoalsPage = () => {
	return (
		<Container maxWidth='xl' className='my-12'>
			<Typography component='h1' variant='h4'>
				My Goals
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				This is an overview of all your goals, available to be modified at any time.
			</Typography>
		</Container>
	);
};

export default GoalsPage;
