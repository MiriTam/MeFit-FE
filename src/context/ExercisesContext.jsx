import React, { createContext, useContext, useState } from 'react';

import { getAllExercises } from '../api/exercices';

// Creating context
const ExercisesContext = createContext();

export function useExercises() {
	return useContext(ExercisesContext);
}

// Providing the context
export function ExercisesProvider({ children }) {
	const [exercises, setExercises] = useState([]);
	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getAndSetExercises(token) {
		if (firstRequestMade) return;

		const apiExercises = await getAllExercises(token);

		setExercises(apiExercises);
		setFirstRequestMade(true);
	}

	const state = {
		exercises,
		setExercises,
		getAndSetExercises
	};

	return <ExercisesContext.Provider value={state}>{children}</ExercisesContext.Provider>;
}

export default ExercisesContext;
