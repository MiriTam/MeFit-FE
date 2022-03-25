// import { getRoleBooleans } from '../utils/getRoleBooleans';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/user';

export async function getAllContributorRequests() {
	const req = await fetch(BASE_URL);
	if (!req.ok) throw new Error('Could not get users!');

	const usersArr = await req.json();

	return usersArr;
}

// export async function postUser(user, role) {
// 	const req = await fetch(BASE_URL, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			...user
// 			// ...getRoleBooleans(role)
// 		})
// 	});
// 	if (!req.ok) throw new Error('Could not post user!');

// 	const newUser = await req.json();

// 	return newUser;
// }

// export async function getUsersAuth0() {
// 	const req = await axios.get(BASE_URL_AUTH0 + 'auth0|6238875390b4c900687f5445', {
// 		headers: {
// 			Authorization: `Bearer ${API_TOKEN_AUTH0}`
// 		}
// 	});

// 	const users = await req.data;

// 	return users;
// }
