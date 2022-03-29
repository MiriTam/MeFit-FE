import axios from 'axios';

const GET_REQUESTS_URL = 'https://mefit22api.azurewebsites.net/api/admin/contributor-request';
const POST_REQUEST_URL = 'https://mefit22api.azurewebsites.net/api/user/contributor-request';

export async function getAllContributorRequests(token) {
	const req = await axios.get(GET_REQUESTS_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}
export async function postContributorRequest(token) {
	await axios.post(POST_REQUEST_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});
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
