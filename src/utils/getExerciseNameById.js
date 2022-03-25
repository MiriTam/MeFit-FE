export default function getExerciseTitleById(exercises, exerciseId) {
	const matchingExercise = exercises.find(exercise => exercise.id === exerciseId);

	return matchingExercise.name;
}
