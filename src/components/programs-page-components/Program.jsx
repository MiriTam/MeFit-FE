import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';

const Program = ({ name, type, completed }) => {
	return (
		<Accordion className='mt-2'>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<Typography component='h2' variant='h5'>
					{name}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{type}</Typography>
				<Typography>Completed: {completed ? 'Yes' : 'No'}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default Program;
