import { Box, CardContent, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { usePrograms } from '../../context/ProgramsContext';
import { useGoal } from '../../context/GoalContext';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { useWorkouts } from '../../context/WorkoutsContext';
import { useSubGoal } from '../../context/SubGoalContext';

export default function DashboardCurrentGoal() {

	const { programs } = usePrograms();
	const { currentUser } = useCurrentUser();
	const { getAndSetManyGoals, goals } = useGoal();
	const { getAndSetManySubGoals, subGoals } = useSubGoal();
	const { getAccessTokenSilently } = useAuth0();
	const { workouts } = useWorkouts();

	const [progressValue, setProgressValue] = useState(0);
	const [activeGoal, setActiveGoal] = useState(null);
	const [activeProgram, setActiveProgram] = useState(null);

	console.log("ProgressValue: ", progressValue);
	// regn ut utifra end-date - today-date ? elns, finnes sikkert en funksjon for det
	let daysLeftInGoal = 1;


	console.log("Goals: ", goals);
	console.log("USER: ", currentUser);
	console.log("active program: ", activeProgram);
	console.log("SubGoals: ", subGoals);

	// TODO
	// Lage Subgoal component, med knapp

	// Get goals from the api
	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();

			// Get goals
			getAndSetManyGoals(currentUser.goals, token);

			console.log("**************\n Goals useEffect done");
		})();
	}, [currentUser]);

	// Set activegoal
	useEffect(() => {

		// Find active goal
		setActiveGoal(goals[0]);
		/*
		setActiveGoal(goals.filter(checkAchieved));
		function checkAchieved(goal) {
			return !goal.achieved;
		}
		*/

		// Find active program
		let activeGoalProgramId = activeGoal.workoutProgramId;
		let _activeProgram = (programs.filter(checkForId));
		function checkForId(prog) {
			return prog.id === activeGoalProgramId;
		}
		setActiveProgram(_activeProgram);


	}, [goals]);

	// Get subgoals from the api
	useEffect(() => {
		(async () => {

			const token = await getAccessTokenSilently();
			// Get subgoals
			let subGoalIdArray = [];
			if (activeGoal.length >= 1) subGoalIdArray = activeGoal.subGoals;
			
			if (subGoalIdArray) getAndSetManySubGoals(subGoalIdArray, token);
		})();
	}, [goals, activeGoal]);


	// Wait for and subgoals from api
	useEffect(() => {

		// regn ut utifra antall completed workouts
		let achievedSubGoals = [];
		if (subGoals) achievedSubGoals = subGoals.filter(checkAchievedSubGoal);
		function checkAchievedSubGoal(sg) {
			return sg.achieved;
		}
		console.log("achieved len", achievedSubGoals.length);
		console.log("len", subGoals.length);

		if (achievedSubGoals.length > 0) setProgressValue((achievedSubGoals.length/subGoals.length)*100);
		console.log("**************\n Other useEffect done");

	}, [subGoals]);
	

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
