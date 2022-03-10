import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Program = ({ name, description, excercises }) => {
	return (
		<Accordion className='mt-2'>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<Typography component='h2' variant='h6'>
					{name}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{description}</Typography>
				<List dense={false}>
					{excercises.map((excercise, idx) => (
						<ListItem key={idx}>
							<ListItemText primary={excercise} />
						</ListItem>
					))}
				</List>
			</AccordionDetails>
		</Accordion>
	);
};

export default Program;
