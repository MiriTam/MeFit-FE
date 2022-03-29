import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/sub-goal';

export async function getSubGoalById(id, token) {
	const req = await axios.get(`${BASE_URL}/${id}`, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getManySubGoalsById(idArray, token) {

	let subGoals = [];
	for (let id of idArray) {
		const req = await axios.get(`${BASE_URL}/${id}`, {
			headers: { Authorization: `Bearer ${token}` }
		})
		subGoals.push(req.data);
	}
	return subGoals;
}