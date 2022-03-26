import { Box, Typography } from '@mui/material';

import { useContributorRequests } from '../../context/ContributorRequestsContext';
import ContributorRequest from './ContributorRequest';

const ContributorRequestList = () => {
	const { contributorRequests } = useContributorRequests();

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
