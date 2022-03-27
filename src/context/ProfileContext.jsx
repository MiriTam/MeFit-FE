import React, { createContext, useContext, useState } from 'react';

// import { checkUserExists } from '../api/profiles';

// Creating context
const ProfileContext = createContext();

export function useProfile() {
	return useContext(ProfileContext);
}

// Providing the context
export function ProfileProvider({ children }) {
	const [hasProfile, setHasProfile] = useState(null);
	const [hasCheckedStatus, setHasCheckedStatus] = useState(false);

	async function checkHasProfile(token) {
		// const res = await checkUserExists(token);

		// return res.includes("true");
		return false;
	}

	function hasProfileIsPending() {
		return hasProfile === null;
	}

	const state = {
		hasProfile,
		setHasProfile,
		hasCheckedStatus,
		setHasCheckedStatus,
		checkHasProfile,
		hasProfileIsPending
	};

	return <ProfileContext.Provider value={state}>{children}</ProfileContext.Provider>;
}

export default ProfileContext;
