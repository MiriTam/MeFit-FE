import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
	const navigate = useNavigate();

	const onRedirectCallback = appState => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={'dev-o072w2hj.eu.auth0.com'}
			clientId={'ViXbPTcrznJsmZxaEze6IdPXCZrGB4rp'}
			redirectUri={window.location.origin + '/dashboard'}
			onRedirectCallback={onRedirectCallback}
			audience='https://mefit22api.azurewebsites.net/api/'
			// audience='https://dev-o072w2hj.eu.auth0.com/api/v2/'
			// scope='openid profile email'
		>
			{children}
		</Auth0Provider>
	);
};

export default Auth0ProviderWithHistory;
