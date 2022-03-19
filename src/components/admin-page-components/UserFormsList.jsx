import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getUsers } from '../../api/users';
import UserForm from './UserForm';

const UserFormsList = () => {
	const [users, setUsers] = useState([]);
	const [expanded, setExpanded] = useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		(async () => {
			const apiUsers = await getUsers();
			setUsers(apiUsers);
		})();
	}, []);

	return (
		<Box className='mt-4'>
			{users.map((user, idx) => (
				<UserForm
					key={user.id}
					email={user.email}
					panel={`panel-${idx + 1}`}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default UserFormsList;
