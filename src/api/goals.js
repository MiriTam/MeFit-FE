import axios from 'axios';

const BASE_URL = 'https://mefit22api.azurewebsites.net/api/goal';

export async function getAllGoals(token) {
	const req = await axios.get(BASE_URL, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getGoalById(id, token) {
	const req = await axios.get(`${BASE_URL}/${id}`, {
		headers: { Authorization: `Bearer ${token}` }
	});

	return req.data;
}

export async function getManyGoalsById(idArray, token) {
	let goals = [];
	for (let id of idArray) {
		const req = await axios.get(`${BASE_URL}/${id}`, {
			headers: { Authorization: `Bearer ${token}` }
		})
		goals.push(req.data);
	}
	return goals;
}

export async function postGoal({ endDate, workoutProgramId }, token) {
	const goalToBePosted = { endDate, workoutProgramId };

	const req = await axios.post(BASE_URL, JSON.stringify(goalToBePosted), {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	});

	return req.data;
}
