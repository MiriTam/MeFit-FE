import axios from 'axios';

const GET_ALL_USERS_URL = 'https://mefit22api.azurewebsites.net/api/user/all-users';
const USER_URL = 'https://mefit22api.azurewebsites.net/api/user';


export async function getAllUsers(token) {
	const req = await axios.get(GET_ALL_USERS_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}
export async function getUserById(id, token) {
	const req = await axios.get(`${USER_URL}/${id}`, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}
export async function getCurrentUser(token) {
	const req = await axios.get(USER_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return req.data;
}

export async function postUser(email, { firstName, lastName, fitnessLevel }, token) {
	const userToBePosted = {
		email,
		firstName,
		lastName,
		fitnessLevel,
		restrictedCategories: 'Arms,Core,Stamina'
	};

	const req = await axios.post(USER_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(userToBePosted)
	});

	return req.data;
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
