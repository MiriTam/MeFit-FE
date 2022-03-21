export default function getUniqueMuscleGroups(exercises) {
	const muscleGroups = exercises.map(exercise => exercise.targetMuscleGroup);
	const muscleGroupsNoDuplicates = [...new Set(muscleGroups)];

	return muscleGroupsNoDuplicates;
}
