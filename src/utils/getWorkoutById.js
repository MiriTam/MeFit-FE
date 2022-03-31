export default function getWorkoutById(workouts, id) {
	const matchingWorkout = workouts.find(workout => workout.id === id);

	return matchingWorkout;
}
