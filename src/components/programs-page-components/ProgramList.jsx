import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { programs as programsArr } from '../../api/programs';
import Program from './Program';

const ProgramList = () => {
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		const timeoutFunc = setTimeout(() => setPrograms(programsArr), 1000);

		// Cleanup in case component unmounts
		return () => {
			clearTimeout(timeoutFunc);
		};
	}, []);

	return (
		<Box className='mt-4'>
			{programs.map(program => (
				<Program
					key={program.id}
					name={program.name}
					type={program.type}
					completed={program.completed}
				/>
			))}
		</Box>
	);
};

export default ProgramList;
