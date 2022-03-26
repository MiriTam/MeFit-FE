import React, { createContext, useContext, useState } from 'react';

import { getAllPrograms } from '../api/programs';

// Creating context
const ProgramsContext = createContext();

export function usePrograms() {
	return useContext(ProgramsContext);
}

// Providing the context
export function ProgramsProvider({ children }) {
	const [programs, setPrograms] = useState([]);
	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getAndSetPrograms(token) {
		if (firstRequestMade) return;

		const apiPrograms = await getAllPrograms(token);

		setPrograms(apiPrograms);
		setFirstRequestMade(true);
	}

	const state = {
		programs,
		setPrograms,
		getAndSetPrograms
	};

	return <ProgramsContext.Provider value={state}>{children}</ProgramsContext.Provider>;
}

export default ProgramsContext;
