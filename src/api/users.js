import axios from 'axios';

const GET_ALL_USERS_URL = 'https://mefit22api.azurewebsites.net/api/user/all-users';
const USER_URL = 'https://mefit22api.azurewebsites.net/api/user';
const POST_ROLE_URL = 'https://mefit22api.azurewebsites.net/api/admin/users';

export async function getAllUsers(token) {
	const req = await axios.get(GET_ALL_USERS_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getMyUser(token) {
	const req = await axios.get(USER_URL, {
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

export async function getProfileByUserId(id, token) {
	const req = await axios.get(`${USER_URL}/${id}/profile`, {
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

	const req = await axios.post(USER_URL, JSON.stringify(userToBePosted), {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});

	return req.data;
}

export async function postRoleToUser(userId, role, token) {
	const req = await axios.post(`${POST_ROLE_URL}/${userId}/roles?role=${role}`, null, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});

	return req.data;
}
