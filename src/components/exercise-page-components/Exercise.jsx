import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Exercise = ({ name, description, targetMuscleGroup, video, image }) => {
	return (
		<div>
			<Accordion className='mt-2'>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography component='h2' variant='h5'>
						{targetMuscleGroup}
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography component='h3' variant='h6'>
						{name}
					</Typography>
					<Typography>{description}</Typography>
					<Box sx={{ mt: 4 }}>
						{/* Image here */}
						<img src='' alt=''></img>
						{image}
					</Box>
					<Box sx={{ mt: 4 }}>{video}</Box>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Exercise;
