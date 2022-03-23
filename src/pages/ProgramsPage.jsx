import { Container, Typography } from '@mui/material';
import React from 'react';

import ProgramCardList from '../components/programs-page-components/ProgramCardList';

const ProgramsPage = () => {
	return (
		<Container maxWidth='xl' className='my-12'>
			<Typography component='h1' variant='h4'>
				Programs Overview
			</Typography>
			<Typography component='p' fontSize={18} sx={{ mt: 1.5 }}>
				This is a list of all programs, categorized by their category.
			</Typography>
			<ProgramCardList />
		</Container>
	);
};

export default ProgramsPage;
