import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/workout';

export async function getWorkouts(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}
