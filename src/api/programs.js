import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/workout-program';
const BASE_URL_CONTRIBUTOR_PROGRAMS = 'https://mefit22api.azurewebsites.net/api/user';

export async function getAllPrograms(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getAllProgramsByContributor(id, token) {
	const req = await axios.get(`${BASE_URL_CONTRIBUTOR_PROGRAMS}/${id}/workout-programs`, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}
