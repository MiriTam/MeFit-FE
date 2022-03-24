import { Person } from '@mui/icons-material';
import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ContributorRequest = ({ user: { firstName, lastName, email } }) => {
	async function onApproveClick() {
		console.log('approved request');
	}

	async function onDenyClick() {
		console.log('denied request');
	}

	return (
		<Paper
			variant='outlined'
			className='flex flex-col mt-1 sm:flex-row shadow-md justify-between md:w-2/3 items-center flex-wrap py-3 px-6 '>
			<Box className='flex items-center'>
				<Person sx={{ mr: 1.25 }} />
				<Typography sx={{ fontSize: 20 }}>
					{`${firstName} ${lastName}`}
					<Typography
						variant='span'
						color={'text.secondary'}
						sx={{ fontSize: 18, ml: 1, display: { xs: 'none', lg: 'inline' } }}>
						{email}
					</Typography>
				</Typography>
			</Box>
			<Box className='flex gap-2 mt-1 sm:mt-0'>
				<Button onClick={onApproveClick} variant='contained' color='primary'>
					Approve
				</Button>
				<Button onClick={onDenyClick} variant='contained' color='error'>
					Deny
				</Button>
			</Box>
		</Paper>
	);
};

export default ContributorRequest;
