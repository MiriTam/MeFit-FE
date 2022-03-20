import React from 'react';

import Auth0Provider from '../auth0/Auth0Provider';
import { ThemeProvider } from '../context/ThemeContext';

function AppContext({ children }) {
	return (
		<Auth0Provider>
			<ThemeProvider>{children}</ThemeProvider>
		</Auth0Provider>
	);
}

export default AppContext;
