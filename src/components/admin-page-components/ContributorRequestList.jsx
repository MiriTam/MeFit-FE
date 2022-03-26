import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllContributorRequests } from '../../api/contributor-requests';
import { useContributorRequests } from '../../context/ContributorRequestsContext';
import ContributorRequest from './ContributorRequest';

const ContributorRequestList = () => {
	const { contributorRequests, setContributorRequests } = useContributorRequests();
	const { getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		(async () => {
			if (contributorRequests !== 0) return;

			const token = getAccessTokenSilently();
			const apiContributorRequests = await getAllContributorRequests(token);

			setContributorRequests(apiContributorRequests);
		})();
	}, [setContributorRequests, contributorRequests, getAccessTokenSilently]);

	return (
		<Box className='mt-2'>
			{/* No contributor requests to show */}
			{contributorRequests.length === 0 && (
				<Typography variant='span' color={'text.secondary'} sx={{ fontSize: 18 }}>
					No contributor requests to show
				</Typography>
			)}
			{/* Contributor requests to show */}
			{contributorRequests.length !== 0 &&
				contributorRequests.map((user, idx) => (
					<ContributorRequest key={user.id} user={user} />
				))}
		</Box>
	);
};

export default ContributorRequestList;
