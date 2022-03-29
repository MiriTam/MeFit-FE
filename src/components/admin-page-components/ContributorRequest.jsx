import { useAuth0 } from '@auth0/auth0-react';
import { Person } from '@mui/icons-material';
import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import { deleteContributorRequest } from '../../api/contributor-requests';
import { postRoleToUser } from '../../api/users';
import { useContributorRequests } from '../../context/ContributorRequestsContext';
import { useUsers } from '../../context/UsersContext';

const ContributorRequest = ({ id, userId }) => {
	const [requestingUser, setRequestingUser] = useState(null);
	const { contributorRequests, setContributorRequests } = useContributorRequests();
	const { getAccessTokenSilently } = useAuth0();
	const { users } = useUsers();

	async function onApproveClick(_requestId, _userId) {
		const token = await getAccessTokenSilently();

		await postRoleToUser(_userId, 'Contributor', token);
		await deleteContributorRequest(_requestId, token);

		// Settings new state
		const newContributorRequests = contributorRequests.filter(req => req.id !== _requestId);
		setContributorRequests(newContributorRequests);
	}

	async function onDenyClick(_requestId) {
		const token = await getAccessTokenSilently();
		await deleteContributorRequest(_requestId, token);

		// Settings new state
		const newContributorRequests = contributorRequests.filter(req => req.id !== _requestId);
		setContributorRequests(newContributorRequests);
	}

	useEffect(() => {
		const requestingUser = users.find(user => user.id === userId);
		setRequestingUser(requestingUser);
	}, [users, userId]);

	return (
		<Paper
			variant='elevation'
			className='flex flex-col mt-1 sm:flex-row shadow-md justify-between md:w-2/3 items-center flex-wrap py-3 px-6 '>
			<Box className='flex items-center'>
				<Person sx={{ mr: 1.25 }} />
				<Typography sx={{ fontSize: 20 }}>
					{`${requestingUser?.firstName} ${requestingUser?.lastName}`}
					<Typography
						variant='span'
						color={'text.secondary'}
						sx={{ fontSize: 18, ml: 1, display: { xs: 'none', lg: 'inline' } }}>
						{requestingUser?.email}
					</Typography>
				</Typography>
			</Box>
			<Box className='flex gap-2 mt-1 sm:mt-0'>
				<Button onClick={() => onApproveClick(id, userId)} variant='contained' color='primary'>
					Approve
				</Button>
				<Button onClick={() => onDenyClick(id)} variant='contained' color='error'>
					Deny
				</Button>
			</Box>
		</Paper>
	);
};

export default ContributorRequest;
