import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Exercise = ({ name, description, video, image }) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<Typography component='h3' variant='h6'>
					{name}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{description}</Typography>
				<Box>{image ? <img src={image} alt={name} /> : null}</Box>
				<Box>{video ? <video src={video} /> : null}</Box>
			</AccordionDetails>
		</Accordion>
	);
};

export default Exercise;
