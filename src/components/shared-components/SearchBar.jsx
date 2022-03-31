import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function SearchBar({ searchQuery, setSearchQuery, label }) {
	return (
		<Box className='sm:w-1/2 lg:w-1/3 mx-auto mt-4'>
			<TextField
				sx={{ mt: 2, width: '100%' }}
				id='search-bar'
				className='text'
				onInput={e => {
					setSearchQuery(e.target.value);
				}}
				value={searchQuery}
				label={`Enter an ${label} name`}
				variant='outlined'
				placeholder='Search...'
				size='medium'
			/>
		</Box>
	);
}
