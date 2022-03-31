import { Alert, Box, Typography } from '@mui/material';
import { useState } from 'react';

import { useWorkouts } from '../../context/WorkoutsContext';
import filterData from '../../utils/filterData';
import getUniqueWorkoutTypes from '../../utils/getUniqueWorkoutTypes';
import SearchBar from '../shared-components/SearchBar';
import WorkoutCard from './WorkoutCard';
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

const WorkoutCardList = () => {
	const { workouts } = useWorkouts();
	const [searchQuery, setSearchQuery] = useState('');
	const dataFiltered = filterData(searchQuery, workouts);

	return (
		<Box className='mt-4'>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} label={'workout'} />
			{/* Get unique workout categories, iterate over them */}
			{dataFiltered.length === 0 ? (
				<Box className='sm:w-1/2 lg:w-1/3 mx-auto mt-4'>
					<Alert severity='warning'>No workouts found for given query!</Alert>
				</Box>
			) : (
				getUniqueWorkoutTypes(dataFiltered).map((workoutType, idx) => (
					<Box className='mt-6' key={idx}>
						<Box sx={{ width: '100%' }}>
							<Box sx={{ width: '250px', margin: 'auto' }}>
								<Lottie
									animationData={GetAnimation(workoutType)}
									loop={true}
								/>
							</Box>
						</Box>
						<Box sx={{ width: '100%' }}>
							<Typography component='h2' variant='h6' color='text.secondary'>
								Workout Type:{' '}
								<Box component={'span'} className='font-semibold' color='text.primary'>
									{workoutType}
								</Box>
							</Typography>
						</Box>

						{/* Display workouts for that workout category */}
						<Box sx={{ mt: 2 }} className=' flex flex-wrap gap-6  justify-center'>
							{dataFiltered.map(
								workout =>
									workout.category === workoutType && (
										<WorkoutCard
											key={workout.id}
											id={workout.id}
											contributorId={workout.contributorId}
											name={workout.name}
											type={workout.category}
											difficulty={workout.difficulty}
											sets={workout.sets}
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

export default WorkoutCardList;
