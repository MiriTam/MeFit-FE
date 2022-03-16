import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getUsers } from '../../api/users';
import UserForm from './UserForm';

const UserFormsList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		(async () => {
			const apiUsers = await getUsers();
			setUsers(apiUsers);
		})();
	}, []);

	return (
		<Box className='mt-4'>
			{users.map(user => (
				<UserForm key={user.id} email={user.email} />
			))}
		</Box>
	);
};

export default UserFormsList;
