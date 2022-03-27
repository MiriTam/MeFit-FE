import axios from 'axios';

const GET_ALL_USERS_URL = 'https://mefit22api.azurewebsites.net/api/user/all-users';
const POST_USER_URL = 'https://mefit22api.azurewebsites.net/api/user';

export async function getAllUsers(token) {
	const req = await axios.get(GET_ALL_USERS_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function postUser(user, token) {
	console.log('posting');

	const userToBePosted = {
		email: user.email,
		firstName: user.firstName,
		lastName: user.lastName,
		fitnessLevel: user.fitnessLevel
	};
	const req = await fetch(POST_USER_URL, {
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + token,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			...userToBePosted
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
