import React from 'react';

import Auth0Provider from '../auth0/Auth0Provider';
import { ThemeProvider } from '../context/ThemeContext';
import { ContributorRequestsProvider } from './ContributorRequestsContext';
import { CurrentUserProvider } from './CurrentUserContext';
import { ExercisesProvider } from './ExercisesContext';
import { GoalProvider } from './GoalContext';
import { ProgramsProvider } from './ProgramsContext';
import { UsersProvider } from './UsersContext';
import { WorkoutsProvider } from './WorkoutsContext';
import { SubGoalProvider } from './SubGoalContext';

function AppContext({ children }) {
	return (
		<Auth0Provider>
			<ThemeProvider>
				<ExercisesProvider>
					<WorkoutsProvider>
						<ProgramsProvider>
							<UsersProvider>
								<CurrentUserProvider>
									<GoalProvider>
										<SubGoalProvider>
											<ContributorRequestsProvider>{children}</ContributorRequestsProvider>
										</SubGoalProvider>
									</GoalProvider>
								</CurrentUserProvider>
							</UsersProvider>
						</ProgramsProvider>
					</WorkoutsProvider>
				</ExercisesProvider>
			</ThemeProvider>
		</Auth0Provider>
	);
}

export default AppContext;
