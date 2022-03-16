import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';

const Program = ({ name, type, sets }) => {
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
				<Typography>Type: {type}</Typography>
				{/* <List dense={false}>
					{excercises.map((excercise, idx) => (
						<ListItem key={idx}>
							<ListItemText primary={excercise} />
						</ListItem>
					))}
				</List> */}
			</AccordionDetails>
		</Accordion>
	);
};

export default Program;
