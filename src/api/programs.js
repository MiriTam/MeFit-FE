const programs = [
	{
		id: 1,
		name: 'Excercise 1',
		description: 'Excercise 1 description',
		excercises: ['Excercise 1', 'Excercise 2']
	},
	{
		id: 2,
		name: 'Excercise 2',
		description: 'Excercise 2 description',
		excercises: ['Excercise 1', 'Excercise 2']
	},
	{
		id: 3,
		name: 'Excercise 3',
		description: 'Excercise 3 description',
		excercises: ['Excercise 1', 'Excercise 2']
	},
	{
		id: 4,
		name: 'Excercise 4',
		description: 'Excercise 4 description',
		excercises: ['Excercise 1', 'Excercise 2']
	},
	{
		id: 5,
		name: 'Excercise 5',
		description: 'Excercise 5 description',
		excercises: ['Excercise 1', 'Excercise 2']
	}
];

export default function getPrograms() {
	setTimeout(() => {
		return programs;
	}, 1000);
}
