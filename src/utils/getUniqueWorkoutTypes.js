export default function getUniqueWorkoutTypes(workouts) {
	const workoutTypes = workouts.map(workout => workout.category);
	const workoutTypesNoDuplicates = [...new Set(workoutTypes)];

	return workoutTypesNoDuplicates;
}
