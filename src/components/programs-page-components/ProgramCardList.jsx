import armAnimation from './../../animations/arms';
import coreAnimation from './../../animations/core';
import flexAnimation from './../../animations/flexibility';
import fullAnimation from './../../animations/full-body';
import legAnimation from './../../animations/legs';
import staminaAnimation from './../../animations/stamina';
import { Alert, Box, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import { useState } from 'react';

import { usePrograms } from '../../context/ProgramsContext';
import filterData from '../../utils/filterData';
import getUniqueProgramCategories from '../../utils/getUniqueProgramCategories';
import SearchBar from '../shared-components/SearchBar';
import ProgramCard from './ProgramCard';

const GetAnimation = category => {
	switch (category) {
		case 'Arms':
			return armAnimation;
		case 'Legs':
			return legAnimation;
		case 'Core':
			return coreAnimation;
		case 'Stamina':
			return staminaAnimation;
		case 'Flexibility':
			return flexAnimation;
		case 'Full body':
			return fullAnimation;
		default:
			return null;
	}
};

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
					<Box key={idx}>
						<Box sx={{ width: '100%' }}>
							<Box sx={{ width: '200px', margin: 'auto' }}>
								<Lottie animationData={GetAnimation(programType)} loop={true} />
							</Box>
						</Box>
						<Box className='mt-6' sx={{ width: '100%' }}>
							<Typography component='h2' variant='h6' color='text.secondary'>
								Program Type:{' '}
								<Box component={'span'} className='font-semibold' color='text.primary'>
									{programType}
								</Box>
							</Typography>
						</Box>
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
