import React, { createContext, useContext, useState } from 'react';

// import { checkUserExists } from '../api/profiles';

// Creating context
const CurrentUserContext = createContext();

export function useCurrentUser() {
	return useContext(CurrentUserContext);
}

// Providing the context
export function CurrentUserProvider({ children }) {
	const [userId, setUserId] = useState(null);
	const [hasProfile, setHasProfile] = useState(null);

	async function checkHasProfile(token) {
		// const res = await checkUserExists(token);

		// return res.includes('true');
		return false;
	}

	function hasProfileIsPending() {
		return hasProfile === null;
	}

	const state = {
		hasProfile,
		setHasProfile,
		checkHasProfile,
		hasProfileIsPending,
		userId,
		setUserId
	};

	return <CurrentUserContext.Provider value={state}>{children}</CurrentUserContext.Provider>;
}

export default CurrentUserContext;
