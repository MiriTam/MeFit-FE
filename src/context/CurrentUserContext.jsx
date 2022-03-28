import React, { createContext, useContext, useState } from 'react';

import { checkUserExists } from '../api/profiles';
import { getMyUser } from '../api/users';

// Creating context
const CurrentUserContext = createContext();

export function useCurrentUser() {
	return useContext(CurrentUserContext);
}

// Providing the context
export function CurrentUserProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [hasProfile, setHasProfile] = useState(null);

	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function checkHasProfile(token) {
		const res = await checkUserExists(token);

		return res.includes('true');
	}

	function hasProfileIsPending() {
		return hasProfile === null;
	}

	async function getAndSetCurrentUser(token) {
		if (firstRequestMade) return;

		const apiCurrentUser = await getMyUser(token);

		setFirstRequestMade(true);
		setCurrentUser(apiCurrentUser);

		return apiCurrentUser;
	}

	const state = {
		hasProfile,
		setHasProfile,
		checkHasProfile,
		hasProfileIsPending,
		currentUser,
		setCurrentUser,
		getAndSetCurrentUser
	};

	return <CurrentUserContext.Provider value={state}>{children}</CurrentUserContext.Provider>;
}

export default CurrentUserContext;
