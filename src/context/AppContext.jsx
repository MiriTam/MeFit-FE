import React from 'react';

import Auth0Provider from '../auth0/Auth0Provider';
import { ThemeProvider } from '../context/ThemeContext';
import { ContributorRequestsProvider } from './ContributorRequestsContext';
import { ExercisesProvider } from './ExercisesContext';
import { ProfileProvider } from './ProfileContext';
import { ProgramsProvider } from './ProgramsContext';
import { UsersProvider } from './UsersContext';
import { WorkoutsProvider } from './WorkoutsContext';

function AppContext({ children }) {
	return (
		<Auth0Provider>
			<ThemeProvider>
				<ExercisesProvider>
					<WorkoutsProvider>
						<ProgramsProvider>
							<UsersProvider>
								<ProfileProvider>
									<ContributorRequestsProvider>{children}</ContributorRequestsProvider>
								</ProfileProvider>
							</UsersProvider>
						</ProgramsProvider>
					</WorkoutsProvider>
				</ExercisesProvider>
			</ThemeProvider>
		</Auth0Provider>
	);
}

export default AppContext;
