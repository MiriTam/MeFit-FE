import React, { createContext, useContext, useState } from 'react';

// Creating context
const UserContext = createContext();

export function useUser() {
	return useContext(UserContext);
}

// Providing the context
export function UserProvider({ children }) {
	const [userHasProfile, setUserHasProfile] = useState(true);

	const state = {
		userHasProfile,
		setUserHasProfile
	};

	return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}

export default UserContext;
