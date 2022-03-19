import React from 'react';
import Auth0ProviderWithHistory from '../auth/auth0-provider-with-history';
import { ThemeProvider } from '../context/ThemeContext';

function AppContext({ children }) {
	return (
		<Auth0ProviderWithHistory>
			<ThemeProvider>{children}</ThemeProvider>
		</Auth0ProviderWithHistory>
	);
}

export default AppContext;
