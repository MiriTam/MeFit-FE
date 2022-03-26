import React from 'react';

import Auth0Provider from '../auth0/Auth0Provider';
import { ThemeProvider } from '../context/ThemeContext';
import { ContributorRequestsProvider } from './ContributorRequestsContext';
import { ExercisesProvider } from './ExercisesContext';
import { ProgramsProvider } from './ProgramsContext';
import { WorkoutsProvider } from './WorkoutsContext';
import { HasProfileProvider } from './HasProfileContext';
import { UsersProvider } from './UsersContext';

function AppContext({ children }) {
	return (
		<Auth0Provider>
			<ThemeProvider>
				<ExercisesProvider>
					<WorkoutsProvider>
						<ProgramsProvider>
							<UsersProvider>
								<HasProfileProvider>
									<ContributorRequestsProvider>{children}</ContributorRequestsProvider>
								</HasProfileProvider>
							</UsersProvider>
						</ProgramsProvider>
					</WorkoutsProvider>
				</ExercisesProvider>
			</ThemeProvider>
		</Auth0Provider>
	);
}

export default AppContext;
