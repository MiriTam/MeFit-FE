const excercises = [
	{ id: 1, name: 'Excercise 1', description: 'Excercise 1 description' },
	{ id: 1, name: 'Excercise 2', description: 'Excercise 2 description' },
	{ id: 1, name: 'Excercise 3', description: 'Excercise 3 description' },
	{ id: 1, name: 'Excercise 4', description: 'Excercise 4 description' },
	{ id: 1, name: 'Excercise 5', description: 'Excercise 5 description' }
];

export default function getExcercises() {
	setTimeout(() => {
		return excercises;
	}, 1000);
}
