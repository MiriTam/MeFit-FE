import React, { createContext, useContext, useState } from 'react';

import { getAllUsers } from '../api/users';

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

		try {
			const apiUsers = await getAllUsers(token);

			setUsers(apiUsers);
			setFirstRequestMade(true);
		} catch (error) {
			console.error(error);
		}
	}

	const state = {
		users,
		setUsers,
		getAndSetUsers
	};

	return <UsersContext.Provider value={state}>{children}</UsersContext.Provider>;
}

export default UsersContext;
