import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/exercise';

export async function getExercises(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

// export async function postExercise(excercise) {
// 	const req = await fetch(BASE_URL, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify(excercise)
// 	});
// 	if (!req.ok) throw new Error('Could not post exercise!');

// 	const newExcercise = await req.json();

// 	return newExcercise;
// }
