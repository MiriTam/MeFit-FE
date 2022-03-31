import { Alert, List, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useExercises } from '../../context/ExercisesContext';
import filterData from '../../utils/filterData';
import getUniqueMuscleGroups from '../../utils/getUniqueMuscleGroups';
import SearchBar from '../shared-components/SearchBar';
import ExerciseCard from './ExerciseCard';
import Lottie from 'lottie-react';
import armAnimation from './../../animations/arms';
import legAnimation from './../../animations/legs'
import coreAnimation from './../../animations/core';
import staminaAnimation from './../../animations/stamina';
import flexAnimation from './../../animations/flexibility';
import fullAnimation from './../../animations/full-body';

const GetAnimation = (category) => {
	switch (category) {
		case "Arms":
			return armAnimation
		case "Legs":
			return legAnimation
		case "Core":
			return coreAnimation
		case "Stamina":
			return staminaAnimation
		case "Flexibility":
			return flexAnimation
		case "Full body":
			return fullAnimation
	}
}

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
						<Box sx={{ width: '100%' }}>
							<Box sx={{ width: '250px', margin: 'auto' }}>
								<Lottie
									animationData={GetAnimation(muscleGroup)}
									loop={true}
								/>
							</Box>
						</Box>
						<Box sx={{ width: '100%' }}>
							<Typography component='h2' variant='h6' color='text.secondary'>
								Exercise Type:{' '}
								<Box component={'span'} className='font-semibold' color='text.primary'>
									{muscleGroup}
								</Box>
							</Typography>
						</Box>
						{/* Display exercises for that target muscle group */}
						<List sx={{ mt: 2 }} className=' flex flex-wrap gap-6   justify-center'>
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
