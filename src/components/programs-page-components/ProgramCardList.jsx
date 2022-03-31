import { Alert, Box, Typography } from '@mui/material';
import { useState } from 'react';

import { usePrograms } from '../../context/ProgramsContext';
import filterData from '../../utils/filterData';
import getUniqueProgramCategories from '../../utils/getUniqueProgramCategories';
import SearchBar from '../shared-components/SearchBar';
import ProgramCard from './ProgramCard';

const ProgramCardList = () => {
	const { programs } = usePrograms();
	const [searchQuery, setSearchQuery] = useState('');
	const dataFiltered = filterData(searchQuery, programs);

	return (
		<Box className='mt-4'>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} label={'program'} />
			{/* Get unique program types, iterate over them */}
			{dataFiltered.length === 0 ? (
				<Box className='sm:w-1/2 lg:w-1/3 mx-auto mt-4'>
					<Alert severity='warning'>No programs found for given query!</Alert>
				</Box>
			) : (
				getUniqueProgramCategories(dataFiltered).map((programType, idx) => (
					<Box className='mt-6' key={idx}>
						<Typography component='h2' variant='h6' color='text.secondary'>
							Program type:{' '}
							<Box component={'span'} className='font-semibold' color='text.primary'>
								{programType}
							</Box>
						</Typography>
						{/* Display programs for that program type */}
						<Box sx={{ mt: 2 }} className=' flex flex-wrap gap-6  justify-center'>
							{dataFiltered.map(
								program =>
									program.category === programType && (
										<ProgramCard
											key={program.id}
											id={program.id}
											name={program.name}
											difficulty={program.difficulty}
											category={program.category}
											workouts={program.workouts}
										/>
									)
							)}
						</Box>
					</Box>
				))
			)}
		</Box>
	);
};

export default ProgramCardList;
