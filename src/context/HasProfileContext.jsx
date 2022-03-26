import React, { createContext, useContext, useState } from 'react';

// Creating context
const hasProfileContext = createContext();

export function useHasProfile() {
	return useContext(hasProfileContext);
}

// Providing the context
export function HasProfileProvider({ children }) {
	const [hasProfile, setHasProfile] = useState(true);

	const state = {
		hasProfile,
		setHasProfile
	};

	return <hasProfileContext.Provider value={state}>{children}</hasProfileContext.Provider>;
}

export default hasProfileContext;
