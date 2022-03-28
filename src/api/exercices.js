import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/exercise';

export async function getAllExercises(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getExerciseById(id, token) {
	const req = await axios.get(`${BASE_URL}/${id}`, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function postExercise(exercise, token) {
	const req = await axios.post(BASE_URL, {
		headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
	});

	return req.data;
}
