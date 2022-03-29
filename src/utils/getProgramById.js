export default function getProgramById(programs, id) {
	const matchingProgram = programs.find(program => program.id === id);

	return matchingProgram;
}
