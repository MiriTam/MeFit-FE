import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ApplicationFrame from './components/shared-components/ApplicationFrame';
import AdministratorPage from './pages/AdministratorPage';
import AuthenticationPage from './pages/AuthenticationPage';
import ContributorPage from './pages/ContributorPage';
import DashboardPage from './pages/DashboardPage';
import ExercisesPage from './pages/ExercisesPage';
import GoalsPage from './pages/GoalsPage';
import ProfilePage from './pages/ProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import WorkoutsPage from './pages/WorkoutsPage';
import { isOnRootPage } from './utils/isOnRootPage';

function App() {
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
		<ApplicationFrame>
			<Routes>
				{/* Not logged in  */}
				<Route exact path='' element={<AuthenticationPage />} />

				{/* Logged in  */}
				<Route path='dashboard' element={<DashboardPage />} />
				<Route path='goals' element={<GoalsPage />} />
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
	);
}

export default App;
