import React, { createContext, useContext, useState } from 'react';

import { getSubGoalById, getManySubGoalsById } from '../api/subGoals';

// Creating context
const SubGoalContext = createContext();

export function useSubGoal() {
	return useContext(SubGoalContext);
}

// Providing the context
export function SubGoalProvider({ children }) {
	//const [subGoal, setSubGoal] = useState(false);
	const [subGoals, setSubGoals] = useState([]);
	//const [firstRequestMade, setFirstRequestMade] = useState(false);

    /*
	async function getAndSetSubGoal(goalId, token) {
		//if (firstRequestMade) return;

		const apiSubGoal = await getSubGoalById(goalId, token);
		setGoal(apiSubGoal);
		//setFirstRequestMade(true);
	}
    */

	// Call with an array of subGoal-ids (goals have a list of sub-goals)
	async function getAndSetManySubGoals(subGoalIdArray, token) {

		const apiSubGoals = await getManySubGoalsById(subGoalIdArray, token);

		setSubGoals(apiSubGoals);
	}

	const state = {
		//subGoal,
		//setSubGoal,
		subGoals,
		setSubGoals,
		//getAndSetSubGoal,
		getAndSetManySubGoals
	};

	return <SubGoalContext.Provider value={state}>{children}</SubGoalContext.Provider>;
}

export default SubGoalContext;
