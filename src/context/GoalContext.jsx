import React, { createContext, useContext, useState } from 'react';

import { getAllGoals, getGoalById, getManyGoalsById } from '../api/goals';

// Creating context
const GoalContext = createContext();

export function useGoals() {
	return useContext(GoalContext);
}

// Providing the context
export function GoalProvider({ children }) {
	const [goal, setGoal] = useState(false);
	const [goals, setGoals] = useState([]);
	const [newGoal, setNewGoal] = useState({ workoutProgramId: null, endData: null });
	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getAndSetAllGoals(token) {
		if (firstRequestMade) return;

		const apiGoals = await getAllGoals(token);
		console.log("GET ALL GOALS", apiGoals);
		setGoals(apiGoals);
		setFirstRequestMade(true);
	}

	/*
	async function getAndSetGoal(goalId, token) {
		if (firstRequestMade) return;

		const apiGoal = await getGoalById(goalId, token);
		setGoal(apiGoal);
		setFirstRequestMade(true);
	}
	

	// Call with an array of goal-ids (user goals)
	async function getAndSetManyGoals(goalIdArray, token) {

		const apiGoals = await getManyGoalsById(goalIdArray, token);
		console.log("API goals", apiGoals);
		setGoals(apiGoals);
	}
	*/

	const state = {
		goal,
		setGoal,
		newGoal,
		setNewGoal,
		goals,
		setGoals,
		getAndSetAllGoals,
		//getAndSetGoal,
		//getAndSetManyGoals
	};

	return <GoalContext.Provider value={state}>{children}</GoalContext.Provider>;
}

export default GoalContext;
