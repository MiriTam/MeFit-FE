import axios from 'axios';

const options = {
	method: 'POST',
	url: 'https://dev-o072w2hj.eu.auth0.com/oauth/token',
	headers: { 'content-type': 'application/x-www-form-urlencoded' },
	data: {
		grant_type: 'client_credentials',
		client_id: 'ViXbPTcrznJsmZxaEze6IdPXCZrGB4rp',
		client_secret: 'xC4t9h5cd9DwO_LCa1FGnGgHqIAuTQlCB-_facnkiy2avehdYa3ENdHGWmtRv6h6',
		audience: 'https:/dev-o072w2hj.eu.auth0.com/api/v2/'
	}
};

export default async function getManagementApiAccessToken() {
	const response = await axios.request(options);
	console.log(response.data);
}
