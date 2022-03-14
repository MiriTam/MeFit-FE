const BASE_URL = 'https://mefit22api.azurewebsites.net/api/workout-program';

export async function getPrograms() {
	const req = await fetch(BASE_URL);
	if (!req.ok) throw new Error('Could not get programs!');

	const programsArr = await req.json();

	return programsArr;
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
