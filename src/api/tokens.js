import axios from 'axios';

const options = {
	method: 'POST',
	url: 'https://dev-o072w2hj.eu.auth0.com/oauth/token',
	headers: { 'content-type': 'application/x-www-form-urlencoded' },
	data: {
		grant_type: 'client_credentials',
		client_id: '4XDd6Abg3AwWP0Zd4coiF2N547u4etgr',
		client_secret: '5urccG3ubdhB3Q7UkMU4A8F5r5cUaeE_3L7re-wVT0Eq1PriylPu5H7mExUQRRAB',
		audience: 'https:/dev-o072w2hj.eu.auth0.com/api/v2'
	}
};

export default async function getManagementApiAccessToken() {
	const response = await axios.request(options);
	console.log(response.data);
}
