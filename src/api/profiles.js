import axios from 'axios';

const USER_EXISTS_URL = 'https://mefit22api.azurewebsites.net/api/login';
const POST_PROFILE_URL = 'https://mefit22api.azurewebsites.net/api/profile';

export async function checkUserExists(token) {
	const req = await axios.get(USER_EXISTS_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function postProfile(profile, token) {
	console.log('posting profile');

	const profileToBePosted = {
		weight: profile.weight,
		height: profile.height,
		medicalConditions: profile.medicalConditions,
		disabilities: profile.disabilities
	};
	const req = await fetch(POST_PROFILE_URL, {
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + token,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			...profileToBePosted
		})
	});

	if (!req.ok) throw new Error('Could not post profile!');

	const newUser = await req.json();

	return newUser;
}
