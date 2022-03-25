import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllContributorRequests } from '../../api/contributor-requests';
import ContributorRequest from './ContributorRequest';

const ContributorRequestList = () => {
	const [contributorRequests, setContributorRequests] = useState([]);

	useEffect(() => {
		(async () => {
			const apiContributorRequests = await getAllContributorRequests();
			setContributorRequests(apiContributorRequests);
		})();
	}, []);

	return (
		<Box className='mt-2'>
			{contributorRequests.map((user, idx) => (
				<ContributorRequest key={user.id} user={user} />
			))}
		</Box>
	);
};

export default ContributorRequestList;
