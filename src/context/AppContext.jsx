import React from 'react';

import Auth0Provider from '../auth0/Auth0Provider';
import { ThemeProvider } from '../context/ThemeContext';
import { ExercisesProvider } from './ExercisesContext';
import { ProgramsProvider } from './ProgramsContext';
import { WorkoutsProvider } from './WorkoutsContext';

function AppContext({ children }) {
	return (
		<Auth0Provider>
			<ThemeProvider>
				<ExercisesProvider>
					<WorkoutsProvider>
						<ProgramsProvider>{children}</ProgramsProvider>
					</WorkoutsProvider>
				</ExercisesProvider>
			</ThemeProvider>
		</Auth0Provider>
	);
}

export default AppContext;
