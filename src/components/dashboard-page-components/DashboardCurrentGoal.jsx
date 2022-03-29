import { Box, CardContent, LinearProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { usePrograms } from '../../context/ProgramsContext';
import { useGoal } from '../../context/GoalContext';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { useWorkouts } from '../../context/WorkoutsContext';
import { useSubGoal } from '../../context/SubGoalContext';
import ProgramCard from '../programs-page-components/ProgramCard'; 

export default function DashboardCurrentGoal() {

	const { programs } = usePrograms();
	const { currentUser } = useCurrentUser();
	const { getAndSetManyGoals, goals } = useGoal();
	const { getAndSetManySubGoals, subGoals } = useSubGoal();
	const { getAccessTokenSilently } = useAuth0();
	const { workouts } = useWorkouts();

	console.log("USER: ", currentUser);

	// lol
	let currentUserGoals = null;
	if (currentUser) currentUserGoals = [... currentUser.goals];

	// regn ut utifra antall completed workouts
	let progressValue = 25;
	// regn ut utifra end-date - today-date ? elns, finnes sikkert en funksjon for det
	let daysLeftInGoal = 1;

	//currentUser.goals; // int array
	console.log("goals: ", currentUserGoals);
	console.log("Goals: ", goals);

	// Find active goal
	let activeGoal = goals.filter(checkAchieved);
	function checkAchieved(goal) {
		return !goal.achieved;
	}
	console.log("ACTIVE: ", activeGoal);

	let subGoalIdArray = null;
	if (activeGoal.length >= 1) subGoalIdArray = activeGoal[0].subGoals;

	console.log("SubGoals: ", subGoals);

	//let activeGoalProgram = activeGoal[0].workoutProgramId; // :/
	// TODO, legge inn programId i goalReadDTO
	// Lage Subgoal component, med knapp

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			getAndSetManyGoals(currentUserGoals, token);
			getAndSetManySubGoals(subGoalIdArray, token);
		})();
	}, []);
	

	return (
		<Box className='shadow-md  rounded-md p-6 ' sx={{ mt: 4 }}>
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
						{programs.length > 0 && (
							<ProgramCard
								category={programs[0]?.category}
								name={programs[0]?.name}
								difficulty={programs[0]?.difficulty}
								workouts={programs[0]?.workouts}
							/>
						)}
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
