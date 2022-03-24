import React, { createContext, useContext, useState } from 'react';

// Creating context
const UserContext = createContext();

export function useUser() {
	return useContext(UserContext);
}

// Providing the context
export function UserProvider({ children }) {
	const [hasProfile, setHasProfile] = useState(true);

	const state = {
		hasProfile,
		setHasProfile
	};

	return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export default UserContext;
