import axios from 'axios';

const USER_EXISTS_URL = 'https://mefit22api.azurewebsites.net/api/login';
const POST_PROFILE_URL = 'https://mefit22api.azurewebsites.net/api/profile';

export async function checkUserExists(token) {
	const req = await axios.get(USER_EXISTS_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function postProfile({ weight, height, medicalConditions, disabilities }, token) {
	const profileToBePosted = {
		weight,
		height,
		medicalConditions,
		disabilities
	};

	const req = await axios.post(POST_PROFILE_URL, JSON.stringify(profileToBePosted), {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});

	return req.data;
}
