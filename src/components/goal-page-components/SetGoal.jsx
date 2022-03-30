import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import { postGoal } from '../../api/goals';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { useGoals } from '../../context/GoalContext';
import GoalDatePicker from './GoalDatePicker';
import GoalProgramPicker from './GoalProgramPicker';

const steps = ['Select program', 'Pick starting date', 'Submit goal'];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <GoalProgramPicker />;
		case 1:
			return <GoalDatePicker />;
		case 2:
			return (
				<Box sx={{ my: 3 }} className='text-center '>
					<Typography variant='h5' gutterBottom>
						Your goal has been made!
					</Typography>
					<Typography variant='subtitle1'>
						Your goal has been made and is ready for submission. If you are not sure about
						your choices, you may go back and change them, otherwise, press the submit button.
					</Typography>
				</Box>
			);
		default:
			throw new Error('Unknown steps');
	}
}

export default function SetGoal() {
	const [activeStep, setActiveStep] = useState(0);
	const { newGoal } = useGoals();
	const { setCurrentUser } = useCurrentUser();
	const { getAccessTokenSilently } = useAuth0();

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	async function handleSubmit() {
		const token = await getAccessTokenSilently();
		const apiGoal = await postGoal(newGoal, token);

		console.log(apiGoal);

		setCurrentUser(prev => ({ ...prev, goals: [apiGoal.id] }));
	}

	return (
		<Container component='main' maxWidth='md'>
			<Paper variant='outlined' sx={{ p: { xs: 2, md: 3 } }}>
				<Typography component='h1' variant='h4' align='center' sx={{ mb: 3 }}>
					Select your weekly goal
				</Typography>
				<Stepper alternativeLabel activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<>
					{getStepContent(activeStep)}
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button
							sx={{ mt: 3, ml: 1 }}
							variant='contained'
							onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}>
							{activeStep === steps.length - 1 ? 'Submit Goal' : 'Next'}
						</Button>
					</Box>
				</>
			</Paper>
		</Container>
	);
}
