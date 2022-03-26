export default function getWorkoutNameById(workouts, workoutId) {
	const matchingWorkout = workouts.find(workout => workout.id === workoutId);

	return matchingWorkout?.name;
}
