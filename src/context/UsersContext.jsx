import { getAllUsers } from '../api/users';
import React, { createContext, useContext, useState } from 'react';

// Creating context
const UsersContext = createContext();

export function useUsers() {
	return useContext(UsersContext);
}

// Providing the context
export function UsersProvider({ children }) {
	const [users, setUsers] = useState([]);
	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getAndSetUsers(token) {
		if (firstRequestMade) return;

		const apiUsers = await getAllUsers(token);

		setUsers(apiUsers);
		setFirstRequestMade(true);
	}

	const state = {
		users,
		setUsers,
		getAndSetUsers
	};

	return <UsersContext.Provider value={state}>{children}</UsersContext.Provider>;
}

export default UsersContext;
