import { Box, Typography } from '@mui/material';

import { usePrograms } from '../../context/ProgramsContext';
import getUniqueProgramCategories from '../../utils/getUniqueProgramCategories';
import ProgramCard from './ProgramCard';

const ProgramCardList = () => {
	const { programs } = usePrograms();

	return (
		<Box className='mt-4'>
			{/* Get unique program types, iterate over them */}
			{getUniqueProgramCategories(programs).map((programType, idx) => (
				<Box className='mt-6' key={idx}>
					<Typography component='h2' variant='h6' color='text.secondary'>
						Program type:{' '}
						<Box component={'span'} className='font-semibold' color='text.primary'>
							{programType}
						</Box>
					</Typography>
					{/* Display programs for that program type */}
					<Box className='mt-4 flex flex-wrap items-start gap-4 '>
						{programs.map(
							program =>
								program.category === programType && (
									<ProgramCard
										key={program.id}
										name={program.name}
										difficulty={program.difficulty}
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
