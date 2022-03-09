import {
	Container,
	createTheme,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	ThemeProvider,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const ProgramsForm = () => {
	const [program, setProgram] = useState('');

	const handleChange = event => {
		setProgram(event.target.value);
	};

	const theme = createTheme();

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs' sx={{ boxShadow: 2, p: 3, mt: 7 }}>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}>
					<Typography>Your active programs</Typography>
					<Box component='form' sx={{ mt: 2, px: 25 }}>
						<FormControl>
							<InputLabel>View programs</InputLabel>
							<Select
								id='select-program'
								label='View Program'
								labelId='select-program-label'
								value={program}
								onChange={handleChange}>
								<MenuItem value='beginner'>Beginner</MenuItem>
								<MenuItem value='advanced'>Advanced</MenuItem>
								<MenuItem value='intermediate'>Intermediate</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<Box>
						<ul>
							<li>Strength Training</li>
							<li>Building muscle matters</li>
							<li>Aerobic Training</li>
							<li>Balance and Stability Training</li>
							<li>Coordination and Agility Training</li>
							<li>Flexibility and Mobility Training</li>
						</ul>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default ProgramsForm;
