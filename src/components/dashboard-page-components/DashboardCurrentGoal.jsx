import { Box, CardContent, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { usePrograms } from '../../context/ProgramsContext';
import { useGoals } from '../../context/GoalContext';
import { useSubGoals } from '../../context/SubGoalContext';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { useWorkouts } from '../../context/WorkoutsContext';

export default function DashboardCurrentGoal() {

	const { programs } = usePrograms();
	const { currentUser } = useCurrentUser();
	const { goals } = useGoals();
	const { subGoals } = useSubGoals();
	const { getAccessTokenSilently } = useAuth0();
	const { workouts } = useWorkouts();

	//const [progressValue, setProgressValue] = useState(0);
	//const [activeGoal, setActiveGoal] = useState(null);
	//const [activeProgram, setActiveProgram] = useState(null);

	//console.log("ProgressValue: ", progressValue);
	// regn ut utifra end-date - today-date ? elns, finnes sikkert en funksjon for det
	let daysLeftInGoal = 1;
	let progressValue = 50;

	/*

	console.log("USER: ", currentUser);
	console.log("Goals: ", goals);
	console.log("SubGoals: ", subGoals);

	console.log("active goal: ", activeGoal);
	console.log("active program: ", activeProgram);

	*/

	// TODO
	// Make shit work >:(
	// Get user goals, get user subgoals, render
	// Lage Subgoal component, med knapp

	/* Ikke lov med set utenfor useeffect :P

	// Find active goal for USER
	setActiveGoal(goals.filter(checkAchieved));
	function checkAchieved(goal) {
		return !goal.achieved && currentUser.goals.includes(goal.Id);
	}

	// Find active program for user
	let activeGoalProgramId = null;
	if (activeGoal) {
		activeGoalProgramId = activeGoal.workoutProgramId;
		let _activeProgram = (programs.filter(checkForId));
		function checkForId(prog) {
			return prog.id === activeGoalProgramId;
		}
		setActiveProgram(_activeProgram);
	}

	let achievedSubGoals = [];
		if (subGoals) achievedSubGoals = subGoals.filter(checkAchievedSubGoal);
		function checkAchievedSubGoal(sg) {
			return sg.achieved;
		}
	console.log("achieved len", achievedSubGoals.length);
	console.log("len", subGoals.length);

	if (achievedSubGoals.length > 0) setProgressValue((achievedSubGoals.length/subGoals.length)*100);
	
	*/

	return (
		<Box className='shadow-md  rounded-md p-6 '>
			<CardContent>
				<Typography sx={{ mb: 3, fontSize: 30 }} variant='h4'>
					My current goal
				</Typography>
				<Box className='lg:w-5/6 mx-auto'>
					<LinearProgress variant='determinate' value={progressValue} />
				</Box>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h5'>Days left: </Typography>
					<Typography sx={{ mt: 0.5, fontSize: 20 }} color='text.secondary'>
						{daysLeftInGoal}
					</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5'>Program:</Typography>
					<Box className='flex justify-center' sx={{ mt: 1 }}>
						{/*
						{activeProgram && (
							<ProgramCard
								category={activeProgram?.category}
								name={activeProgram?.name}
								difficulty={activeProgram?.difficulty}
								workouts={activeProgram?.workouts}
							/>
						)}
						*/}
					</Box>
				</Box>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h5'>Workouts:</Typography>
					<Typography color={'text.secondary'} sx={{ fontSize: 18, mt: 0.5 }}>
					{/*
					{workouts.map(
							workout =>
								workout.category === workoutType && (
									<WorkoutCard
										key={workout.id}
										id={workout.id}
										contributorId={workout.contributorId}
										name={workout.name}
										type={workout.category}
										difficulty={workout.difficulty}
										sets={workout.sets}
									/>
								)
						)}
					*/}
					</Typography>
				</Box>
				<Box sx={{ mt: 2 }}>
					<Typography variant='h5'>Exercises:</Typography>
					<Typography color={'text.secondary'} sx={{ fontSize: 18, mt: 0.5 }}>
						No exercises to show
					</Typography>
				</Box>
			</CardContent>
		</Box>
	);
}
