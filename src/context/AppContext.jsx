import React from 'react';

import Auth0Provider from '../auth0/Auth0Provider';
import { ThemeProvider } from '../context/ThemeContext';
import { ExercisesProvider } from './ExercisesContext';

function AppContext({ children }) {
	return (
		<Auth0Provider>
			<ThemeProvider>
				<ExercisesProvider>{children}</ExercisesProvider>
			</ThemeProvider>
		</Auth0Provider>
	);
}

export default AppContext;
