import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProgramForm = () => {
	return (
		<div className='pt-20'>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='h5'>Strength Training</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quo, quibusdam
						molestiae voluptatem excepturi molestias impedit voluptatum rerum eum, aliquid
						cumque, vitae recusandae est tempore sint suscipit maxime labore!
						<img src="musclearm.svg" alt='musclearm' className='w-40 mt-6'></img>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='h5'>Balance and Stability Training</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur rem
						quisquam nisi, saepe dolor laudantium voluptatum assumenda provident, vel at nemo
						nostrum repudiandae ratione. Omnis obcaecati tempore quaerat quae.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography variant='h5'>Aerobic Training</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur rem
						quisquam nisi, saepe dolor laudantium voluptatum assumenda provident, vel at nemo
						nostrum repudiandae ratione. Omnis obcaecati tempore quaerat quae.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default ProgramForm;
