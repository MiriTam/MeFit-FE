import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';

const Program = ({ name, category }) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<Typography component='h2' variant='h5'>
					{name}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>Category: {category}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default Program;
