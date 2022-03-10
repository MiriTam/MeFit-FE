import React, { createContext, useContext, useState } from 'react';

import { storageSave } from '../utils/storage';

// Creating context
const UserContext = createContext();

export default function useUser() {
	return useContext(UserContext);
}

// Providing the context
export function UserProvider({ children }) {
	const [username, setUsername] = useState(null);

	function login(_user) {
		// Save user in session storage and state
		storageSave('user', _user);
		setUsername(_user.username);
	}

	function logout() {
		// Clear user in session storage and state
		storageSave('user', {});
		setUsername(null);
	}

	const state = {
		username,
		setUsername,
		login,
		logout
	};

	return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
}
