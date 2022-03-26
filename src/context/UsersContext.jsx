import React, { createContext, useContext, useState } from 'react';

// Creating context
const UsersContext = createContext();

export function useUsers() {
	return useContext(UsersContext);
}

// Providing the context
export function UsersProvider({ children }) {
	const [users, setUsers] = useState([]);

	const state = {
		users,
		setUsers
	};

	return <UsersContext.Provider value={state}>{children}</UsersContext.Provider>;
}

export default UsersContext;
