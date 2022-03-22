import React, { createContext, useContext, useState } from 'react';

// Creating context
const ExercisesContext = createContext();

export function useExercises() {
	return useContext(ExercisesContext);
}

// Providing the context
export function ExercisesProvider({ children }) {
	const [exercises, setExercises] = useState([]);

	const state = {
		exercises,
		setExercises
	};

	return <ExercisesContext.Provider value={state}>{children}</ExercisesContext.Provider>;
}

export default ExercisesContext;
