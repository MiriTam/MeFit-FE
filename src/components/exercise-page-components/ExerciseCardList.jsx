import { Alert, List, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

import { useExercises } from '../../context/ExercisesContext';
import filterData from '../../utils/filterData';
import getUniqueMuscleGroups from '../../utils/getUniqueMuscleGroups';
import SearchBar from '../shared-components/SearchBar';
import ExerciseCard from './ExerciseCard';

const ExerciseCardList = () => {
	const { exercises } = useExercises();
	const [searchQuery, setSearchQuery] = useState('');
	const dataFiltered = filterData(searchQuery, exercises);

	return (
		<Box className='mt-4'>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} label={'exercise'} />
			{/* Get unique target muscle groups, iterate over them */}
			{dataFiltered.length === 0 ? (
				<Box className='sm:w-1/2 lg:w-1/3 mx-auto mt-4'>
					<Alert severity='warning'>No exercises found for given query!</Alert>
				</Box>
			) : (
				getUniqueMuscleGroups(dataFiltered).map((muscleGroup, idx) => (
					<Box key={idx} className='mt-6'>
						<Typography component='h2' variant='h6' color='text.secondary'>
							Target muscle:{' '}
							<Box component={'span'} className='font-semibold' color='text.primary'>
								{muscleGroup}
							</Box>
						</Typography>
						{/* Display exercises for that target muscle group */}
						<List
							sx={{ mt: 2 }}
							className=' flex flex-wrap gap-6 items-center  justify-center'>
							{dataFiltered.map(
								exercise =>
									exercise.category === muscleGroup && (
										<ExerciseCard
											key={exercise.id}
											id={exercise.id}
											name={exercise.name}
											description={exercise.description}
											category={exercise.category}
											image={exercise.image}
											video={exercise.video}
										/>
									)
							)}
						</List>
					</Box>
				))
			)}
		</Box>
	);
};

export default ExerciseCardList;
