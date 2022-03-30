import React, { createContext, useContext, useState } from 'react';

import { getAllExercises, getAllExercisesByContributor } from '../api/exercices';

// Creating context
const ExercisesContext = createContext();

export function useExercises() {
	return useContext(ExercisesContext);
}

// Providing the context
export function ExercisesProvider({ children }) {
	const [exercises, setExercises] = useState([]);
	const [contributorExercises, setContributorExercises] = useState([]);

	const [firstRequestMade, setFirstRequestMade] = useState(false);
	const [firstRequestMade2, setFirstRequestMade2] = useState(false);

	async function getAndSetExercises(token) {
		if (firstRequestMade) return;

		const apiExercises = await getAllExercises(token);

		setFirstRequestMade(true);
		setExercises(apiExercises);
	}

	async function getAndSetContributorExercises(id, token) {
		if (firstRequestMade2) return;

		const apiContributorExercises = await getAllExercisesByContributor(id, token);

		setFirstRequestMade2(true);
		setContributorExercises(apiContributorExercises);
	}

	const state = {
		exercises,
		setExercises,
		contributorExercises,
		setContributorExercises,
		getAndSetExercises,
		getAndSetContributorExercises
	};

	return <ExercisesContext.Provider value={state}>{children}</ExercisesContext.Provider>;
}

export default ExercisesContext;
