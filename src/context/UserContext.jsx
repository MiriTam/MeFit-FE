import React, { createContext, useContext, useState } from 'react';

import { storageSave } from '../utils/storage';

// Creating context
const UserContext = createContext();

export default function useUser() {
	return useContext(UserContext);
}

// Providing the context
export function UserProvider({ children }) {
	const [loggedInUser, setLoggedInUser] = useState(null);

	function login(user) {
		const _user = { ...user, fullName: `${user.firstName} ${user.lastName}` };

		// Save user in session storage and state
		storageSave('loggedInUser', _user);
		setLoggedInUser(_user);
	}

	function logout() {
		// Clear user in session storage and state
		storageSave('loggedInUser', null);
		setLoggedInUser(null);
	}

	const state = {
		loggedInUser,
		setLoggedInUser,
		login,
		logout
	};

	return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
