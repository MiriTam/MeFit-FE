import axios from 'axios';

const REQUESTS_URL = 'https://mefit22api.azurewebsites.net/api/admin/contributor-request';
const POST_REQUEST_URL = 'https://mefit22api.azurewebsites.net/api/user/contributor-request';

export async function getAllContributorRequests(token) {
	const req = await axios.get(REQUESTS_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function postContributorRequest(token) {
	await axios.post(POST_REQUEST_URL, null, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});
}

export async function deleteContributorRequest(id, token) {
	await axios.delete(`${REQUESTS_URL}/${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});
}
