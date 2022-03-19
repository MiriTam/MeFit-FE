import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import ApplicationFrame from './components/shared-components/ApplicationFrame';
import AdministratorPage from './pages/AdministratorPage';
import AuthenticationPage from './pages/AuthenticationPage';
import ContributorPage from './pages/ContributorPage';
import DashboardPage from './pages/DashboardPage';
import ExercisesPage from './pages/ExercisesPage';
import ProfilePage from './pages/ProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import WorkoutsPage from './pages/WorkoutsPage';
import { isOnRootPage } from './utils/isOnRootPage';
import { CssBaseline } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
	const [mode, setMode] = useState('light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
			}
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode
				}
			}),
		[mode]
	);

	const { isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	const pathname = useLocation().pathname;

	// Redirect from / to /dashboard, if logged in
	// Redirect from /dashboard to / if not logged in
	useEffect(() => {
		if (isOnRootPage(pathname) && isAuthenticated) navigate('/dashboard');
		if (!isOnRootPage(pathname) && !isAuthenticated) navigate('/');
	}, [navigate, pathname, isAuthenticated]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ApplicationFrame>
					<Routes>
						{/* Not logged in  */}
						<Route exact path='' element={<AuthenticationPage />} />

						{/* Logged in  */}
						<Route path='dashboard' element={<DashboardPage />} />
						<Route path='exercises' element={<ExercisesPage />} />
						<Route path='programs' element={<ProgramsPage />} />
						<Route path='workouts' element={<WorkoutsPage />} />
						<Route path='profile' element={<ProfilePage />} />

						{/* Logged in, restricted routes */}
						<Route path='contributor' element={<ContributorPage />} />
						<Route path='administrator' element={<AdministratorPage />} />

						{/* Wildcard fallback page */}
						<Route path='*' element={<AuthenticationPage />} />
					</Routes>
				</ApplicationFrame>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
