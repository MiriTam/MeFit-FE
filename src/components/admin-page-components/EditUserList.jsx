import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllUsers } from '../../api/users';
import EditUserForm from './EditUser';

const EditUserList = () => {
	const [users, setUsers] = useState([]);
	const [expanded, setExpanded] = useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		(async () => {
			const apiUsers = await getAllUsers();
			setUsers(apiUsers);
		})();
	}, []);

	return (
		<Box className='mt-2'>
			{users.map((user, idx) => (
				<EditUserForm
					key={user.id}
					user={user}
					panel={`panel-${idx + 1}`}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditUserList;
