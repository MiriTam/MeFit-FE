export default function getUniqueWorkoutTypes(workouts) {
	const workoutTypes = workouts.map(workout => workout.type);
	const workoutTypesNoDuplicates = [...new Set(workoutTypes)];

	return workoutTypesNoDuplicates;
}
