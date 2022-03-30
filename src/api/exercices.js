import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/exercise';
const BASE_URL_CONTRIBUTOR_EXERCISES = 'https://mefit22api.azurewebsites.net/api/user';

export async function getAllExercises(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getAllExercisesByContributor(id, token) {
	const req = await axios.get(`${BASE_URL_CONTRIBUTOR_EXERCISES}/${id}/exercises`, {
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
	console.log(JSON.stringify(exercise));
	const req = await axios.post(BASE_URL, JSON.stringify(exercise), 
	{
		headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
	});

	return req.data;
}
