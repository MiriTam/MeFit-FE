export default function getUniqueProgramCategories(programs) {
	const programCategories = programs.map(program => program.category);
	const programCategoriesNoDuplicates = [...new Set(programCategories)];

	return programCategoriesNoDuplicates;
}
