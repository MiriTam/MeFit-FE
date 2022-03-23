import { Container, Typography } from '@mui/material';
import SetGoals from '../components/goals-page-components/SetGoals';

const GoalsPage = () => {
	return (
		<Container maxWidth='xl' className='my-12'>
			{/* <Typography component='h1' variant='h4'>
				My Goals
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				This is an overview of all your goals, available to be modified at any time.
			</Typography> */}
			<SetGoals />
		</Container>
	);
};

export default GoalsPage;
