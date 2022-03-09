import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { programsArr } from '../../api/programs';
import Program from '../programs-page-components/Program';

const ProgramList = () => {
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		setTimeout(() => setPrograms(programsArr), 1000);
	}, []);

	return (
		<Box className='mt-4'>
			{programs.map(program => (
				<Program
					key={program.id}
					name={program.name}
					description={program.description}
					excercises={program.excercises}
				/>
			))}
		</Box>
	);
};

export default ProgramList;
