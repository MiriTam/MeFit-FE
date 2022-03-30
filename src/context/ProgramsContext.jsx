import React, { createContext, useContext, useState } from 'react';

import { getAllPrograms, getAllProgramsByContributor } from '../api/programs';

// Creating context
const ProgramsContext = createContext();

export function usePrograms() {
	return useContext(ProgramsContext);
}

// Providing the context
export function ProgramsProvider({ children }) {
	const [programs, setPrograms] = useState([]);
	const [contributorPrograms, setContributorPrograms] = useState([]);

	const [firstRequestMade, setFirstRequestMade] = useState(false);
	const [firstRequestMade2, setFirstRequestMade2] = useState(false);

	async function getAndSetPrograms(token) {
		if (firstRequestMade) return;

		const apiPrograms = await getAllPrograms(token);

		setPrograms(apiPrograms);
		setFirstRequestMade(true);
	}

	async function getAndSetContributorPrograms(id, token) {
		if (firstRequestMade2) return;

		const apiContributorPrograms = await getAllProgramsByContributor(id, token);

		setFirstRequestMade2(true);
		setContributorPrograms(apiContributorPrograms);
	}

	const state = {
		programs,
		setPrograms,
		getAndSetPrograms,
		contributorPrograms,
		setContributorPrograms,
		getAndSetContributorPrograms
	};

	return <ProgramsContext.Provider value={state}>{children}</ProgramsContext.Provider>;
}

export default ProgramsContext;
