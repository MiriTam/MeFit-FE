import { Box, Container, Typography } from '@mui/material';

const GoalsPage = () => {
	return (
		<Container maxWidth='xl'>
			<Typography component='h1' variant='h4' sx={{ mt: 5 }}>
				Goals Page
			</Typography>
			<Box className='mt-4'>Content of goals page</Box>
		</Container>
	);
};

export default GoalsPage;
