import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
	const domain = process.env.REACT_APP_AUTH0_DOMAIN;
	const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

	const navigate = useNavigate();

	const onRedirectCallback = appState => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin + '/dashboard'}
			onRedirectCallback={onRedirectCallback}
			// audience='https://dev-o072w2hj.eu.auth0.com/api/v2/'
			audience='https://mefit22api.azurewebsites.net/api/'
			// scope='openid profile email'
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithHistory;
