export default function getUniqueMuscleGroups(exercises) {
	const muscleGroups = exercises.map(exercise => exercise.category);
	const muscleGroupsNoDuplicates = [...new Set(muscleGroups)];

	return muscleGroupsNoDuplicates;
}
