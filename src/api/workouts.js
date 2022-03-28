import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/workout';
const BASE_URL_CONTRIBUTOR_WORKOUTS = 'https://mefit22api.azurewebsites.net/api/user';

export async function getAllWorkouts(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getAllWorkoutsByContributor(id, token) {
	const req = await axios.get(`${BASE_URL_CONTRIBUTOR_WORKOUTS}/${id}/workouts`, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}
