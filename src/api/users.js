import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/user/all-users';

export async function getAllUsers(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function postUser(user, role) {
	const req = await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			...user
			// ...getRoleBooleans(role)
		})
	});
	if (!req.ok) throw new Error('Could not post user!');

	const newUser = await req.json();

	return newUser;
}

// export async function getUsersAuth0() {
// 	const req = await axios.get(BASE_URL_AUTH0 + 'auth0|6238875390b4c900687f5445', {
// 		headers: {
// 			Authorization: `Bearer ${API_TOKEN_AUTH0}`
// 		}
// 	});

// 	const users = await req.data;

// 	return users;
// }
