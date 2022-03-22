import { Button, Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ExerciseCardList from '../exercise-page-components/ExerciseCardList';
import ProgramList from '../programs-page-components/ProgramList';
import WorkoutList from '../workout-page-components/WorkoutList';

const steps = ['Select program', 'Add workouts', 'Add exercises'];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <ProgramList />;
		case 1:
			return <WorkoutList />;
		case 2:
			return <ExerciseCardList />;
		default:
			throw new Error('Unknown steps');
	}
}

export default function SetGoals() {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handlePrev = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
			<Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
				<Typography component='h1' variant='h4' align='center'>
					Select your goals for the week
				</Typography>
				<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<React.Fragment>
					{activeStep === steps.length ? (
						<React.Fragment>
							<Typography variant='h5' gutterBottom>
								Your goals has been set!
							</Typography>
							<Typography variant='subtitle1'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati animi
								beatae, vero mollitia pariatur voluptate vitae deleniti sunt unde eveniet,
								et libero cupiditate saepe error commodi officiis vel similique assumenda?
							</Typography>
						</React.Fragment>
					) : (
						<React.Fragment>
							{getStepContent(activeStep)}
							<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								{activeStep !== 0 && (
									<Button onClick={handlePrev} sx={{ mt: 3, ml: 1 }}>
										Back
									</Button>
								)}

								<Button variant='contained' onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
									{activeStep === steps.length - 1 ? 'Set Goals' : 'Next'}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</React.Fragment>
			</Paper>
		</Container>
	);
}
