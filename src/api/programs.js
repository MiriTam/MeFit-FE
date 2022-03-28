import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/workout-program';

export async function getAllPrograms() {
	const req = await axios.get(BASE_URL);

	return req.data;
}

// export async function postProgram(program) {
// 	const req = await fetch(BASE_URL, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(program)
// 	});
// 	if (!req.ok) throw new Error('Could not post program!');

// 	const newProgram = await req.json();

// 	return newProgram;
// }
