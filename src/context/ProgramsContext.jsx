import React, { createContext, useContext, useState } from 'react';

// Creating context
const ProgramsContext = createContext();

export function usePrograms() {
	return useContext(ProgramsContext);
}

// Providing the context
export function ProgramsProvider({ children }) {
	const [programs, setPrograms] = useState([]);

	const state = {
		programs,
		setPrograms
	};

	return <ProgramsContext.Provider value={state}>{children}</ProgramsContext.Provider>;
}

export default ProgramsContext;
