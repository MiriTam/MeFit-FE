import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { getAllWorkouts } from '../../api/workouts';
import EditWorkout from './EditWorkout';

const EditWorkoutList = () => {
	const [workouts, setWorkouts] = useState([]);
	const [expanded, setExpanded] = useState(false);

	const { getAccessTokenSilently } = useAuth0();

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		(async () => {
			const token = await getAccessTokenSilently();
			const apiWorkouts = await getAllWorkouts(token);

			setWorkouts(apiWorkouts);
		})();
	}, [getAccessTokenSilently]);

	return (
		<Box className='my-2'>
			{workouts.map((workout, idx) => (
				<EditWorkout
					key={workout.id}
					name={workout.name}
					type={workout.type}
					panel={`panel-${idx + 1}`}
					expanded={expanded}
					handleChange={handleChange}
				/>
			))}
		</Box>
	);
};

export default EditWorkoutList;
