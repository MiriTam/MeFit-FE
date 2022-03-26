import React, { createContext, useContext, useState } from 'react';

import { getAllWorkouts } from '../api/workouts';

// Creating context
const WorkoutsContext = createContext();

export function useWorkouts() {
	return useContext(WorkoutsContext);
}

// Providing the context
export function WorkoutsProvider({ children }) {
	const [workouts, setWorkouts] = useState([]);
	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getAndSetWorkouts(token) {
		if (firstRequestMade) return;

		const apiWorkouts = await getAllWorkouts(token);

		setWorkouts(apiWorkouts);
		setFirstRequestMade(true);
	}

	const state = {
		workouts,
		setWorkouts,
		getAndSetWorkouts
	};

	return <WorkoutsContext.Provider value={state}>{children}</WorkoutsContext.Provider>;
}

export default WorkoutsContext;
