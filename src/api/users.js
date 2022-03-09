const BASE_URL = 'https://mefit22api.azurewebsites.net/api/user';

export async function getUsers() {
	const req = await fetch(BASE_URL);
	if (!req.ok) throw new Error('Could not get users!');

	const usersArr = await req.json();

	return usersArr;
}

export async function postUser(username) {
	const req = await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			username
		})
	});
	if (!req.ok) throw new Error('Could not post user!');

	const newUser = await req.json();

	return newUser;
}
