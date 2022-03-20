import { Auth0Provider as OriginalAuthProvider } from '@auth0/auth0-react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Auth0Provider({ children }) {
	const navigate = useNavigate();
	const pathname = useLocation().pathname;

	const onRedirectCallback = appState => {
		navigate(appState?.returnTo || pathname);
	};

	return (
		<OriginalAuthProvider
			domain={'dev-o072w2hj.eu.auth0.com'}
			clientId={'ViXbPTcrznJsmZxaEze6IdPXCZrGB4rp'}
			redirectUri={window.location.origin + '/dashboard'}
			onRedirectCallback={onRedirectCallback}
			audience='https://mefit22api.azurewebsites.net/api/'>
			{children}
		</OriginalAuthProvider>
	);
}

export default Auth0Provider;
