import React, { createContext, useContext, useState } from 'react';

import { getGoalById } from '../api/goals';

// Creating context
const GoalContext = createContext();

export function useGoal() {
	return useContext(GoalContext);
}

// Providing the context
export function GoalProvider({ children }) {
	const [goal, setGoal] = useState(false);
	const [newGoal, setNewGoal] = useState({ workoutProgramId: null, endDate: null });

	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getAndSetGoal(goalId, token) {
		if (firstRequestMade) return;

		const apiGoal = await getGoalById(goalId, token);

		setFirstRequestMade(true);
		setGoal(apiGoal);
	}

	const state = {
		goal,
		setGoal,
		newGoal,
		setNewGoal,
		getAndSetGoal
	};

	return <GoalContext.Provider value={state}>{children}</GoalContext.Provider>;
}

export default GoalContext;
