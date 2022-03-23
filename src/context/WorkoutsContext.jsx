import React, { createContext, useContext, useState } from 'react';

// Creating context
const WorkoutsContext = createContext();

export function useWorkouts() {
	return useContext(WorkoutsContext);
}

// Providing the context
export function WorkoutsProvider({ children }) {
	const [workouts, setWorkouts] = useState([]);

	const state = {
		workouts,
		setWorkouts
	};

	return <WorkoutsContext.Provider value={state}>{children}</WorkoutsContext.Provider>;
}

export default WorkoutsContext;
