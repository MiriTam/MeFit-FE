import React, { createContext, useContext, useState } from 'react';

import { getCurrentUser } from '../api/users';

// Creating context
const CurrentUserContext = createContext();

export function useCurrentUser() {
	return useContext(CurrentUserContext);
}

// Providing the context
export function CurrentUserProvider({ children }) {
	const [userId, setUserId] = useState(null);
	const [hasProfile, setHasProfile] = useState(null);
	const [currentUser, setCurrentUser] = useState();
	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getCurrentUserFromApi(token) {
		if (firstRequestMade) return;

		const apiUser = await getCurrentUser(token);
		setCurrentUser(apiUser);
		setFirstRequestMade(true);
	}
	
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
		setUserId,
		currentUser,
		setCurrentUser,
		getCurrentUserFromApi
	};

	return <CurrentUserContext.Provider value={state}>{children}</CurrentUserContext.Provider>;
}

export default CurrentUserContext;
