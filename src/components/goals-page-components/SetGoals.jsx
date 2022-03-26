import { Button, Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import Calendar from '../calendar-page-components/Calendar';
import ExerciseCardList from '../exercise-page-components/ExerciseCardList';
import ProgramCardList from '../programs-page-components/ProgramCardList';
import WorkoutCardList from '../workout-page-components/WorkoutCardList';

const steps = ['Select program', 'Pick starting date', 'Add workouts', 'Add exercises'];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <ProgramCardList />;
		case 1:
			return <Calendar />;
		case 2:
			return <WorkoutCardList />;
		case 3:
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
