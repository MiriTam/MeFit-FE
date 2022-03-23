import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

import { getAllPrograms } from '../../api/programs';
import { usePrograms } from '../../context/ProgramsContext';
import getUniqueProgramCategories from '../../utils/getUniqueProgramCategories';
import ProgramCard from './ProgramCard';

const ProgramCardList = () => {
	const { programs, setPrograms } = usePrograms();

	useEffect(() => {
		(async () => {
			const programs = await getAllPrograms();

			setPrograms(programs);
		})();
	}, [setPrograms]);

	return (
		<Box className='mt-4'>
			{/* Get unique program types, iterate over them */}
			{getUniqueProgramCategories(programs).map(programType => (
				<Box className='mt-6'>
					<Typography component='h2' variant='h6' color='text.secondary'>
						Program type:{' '}
						<Box component={'span'} className='font-semibold' color='text.primary'>
							{programType}
						</Box>
					</Typography>
					{/* Display programs for that program type */}
					<Box className='mt-4 flex flex-wrap gap-4 '>
						{programs.map(
							program =>
								program.category === programType && (
									<ProgramCard
										name={program.name}
										category={program.category}
										workouts={program.workouts}
									/>
								)
						)}
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default ProgramCardList;
