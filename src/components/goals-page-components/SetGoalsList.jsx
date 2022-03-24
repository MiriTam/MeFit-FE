import { List, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllPrograms } from '../../api/programs';
import SetGoals from './SetGoals';

const SetGoalsList = () => {
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		(async () => {
			const programs = await getAllPrograms();
			setPrograms(programs);
		})();
	}, []);

	return (
		<List>
			<ListItem>
				{programs.map(program => (
					<SetGoals key={program.id} name={program.name} category={program.category} />
				))}
			</ListItem>
		</List>
	);
};

export default SetGoalsList;
