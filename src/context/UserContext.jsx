import React, { createContext, useContext, useState } from 'react';
import { storageSave } from '../utils/storage';

// Creating context
const UserContext = createContext();

export function useUser() {
	return useContext(UserContext);
}

// Providing the context
export function UserProvider({ children }) {
	const [username, setUsername] = useState(null);

	function login(_username) {
		// Save user in session storage and state
		storageSave('user', { id: _username.id, username: _username.username });
		setUsername(_username.username);
	}

	function logout(_username) {
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

export default UserContext;
