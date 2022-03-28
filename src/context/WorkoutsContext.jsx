import React, { createContext, useContext, useState } from 'react';

import { getAllWorkouts, getAllWorkoutsByContributor } from '../api/workouts';

// Creating context
const WorkoutsContext = createContext();

export function useWorkouts() {
	return useContext(WorkoutsContext);
}

// Providing the context
export function WorkoutsProvider({ children }) {
	const [workouts, setWorkouts] = useState([]);
	const [contributorWorkouts, setContributorWorkouts] = useState([]);

	const [firstRequestMade, setFirstRequestMade] = useState(false);
	const [firstRequestMade2, setFirstRequestMade2] = useState(false);

	async function getAndSetWorkouts(token) {
		if (firstRequestMade) return;

		const apiWorkouts = await getAllWorkouts(token);

		setWorkouts(apiWorkouts);
		setFirstRequestMade(true);
	}

	async function getAndSetContributorWorkouts(id, token) {
		if (firstRequestMade2) return;

		const apiContributorWorkouts = await getAllWorkoutsByContributor(id, token);

		setFirstRequestMade2(true);
		setContributorWorkouts(apiContributorWorkouts);
	}

	const state = {
		workouts,
		setWorkouts,
		getAndSetWorkouts,
		contributorWorkouts,
		setContributorWorkouts,
		getAndSetContributorWorkouts
	};

	return <WorkoutsContext.Provider value={state}>{children}</WorkoutsContext.Provider>;
}

export default WorkoutsContext;
