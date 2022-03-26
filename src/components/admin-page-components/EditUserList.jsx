import { Box } from '@mui/material';
import { useState } from 'react';

import { useUsers } from '../../context/UsersContext';
import EditUserForm from './EditUser';

const EditUserList = () => {
	const { users } = useUsers();
	const [expanded, setExpanded] = useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Box className='mt-2 '>
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
