import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ApplicationFrame from './components/shared-components/ApplicationFrame';
import { useUser } from './context/UserContext';
import AdministratorPage from './pages/AdministratorPage';
import AuthenticationPage from './pages/AuthenticationPage';
import ContributorPage from './pages/ContributorPage';
import DashboardPage from './pages/DashboardPage';
import EditProfilePage from './pages/EditProfilePage';
import ExercisesPage from './pages/ExercisesPage';
import GoalsPage from './pages/GoalsPage';
import NewProfilePage from './pages/NewProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import WorkoutsPage from './pages/WorkoutsPage';
import { isOnRootPage } from './utils/isOnPage';

function App() {
	const { isAuthenticated } = useAuth0();
	const { hasProfile } = useUser();
	const navigate = useNavigate();
	const pathname = useLocation().pathname;

	// Redirect from / to /dashboard, if logged in
	// Redirect from /dashboard to / if not logged in
	useEffect(() => {
		if (!hasProfile && isAuthenticated) navigate('/new-profile');
		if (isOnRootPage(pathname) && isAuthenticated) navigate('/dashboard');
		if (!isOnRootPage(pathname) && !isAuthenticated) navigate('/');
	}, [navigate, pathname, isAuthenticated, hasProfile]);

	return (
		<ApplicationFrame>
			<Routes>
				{/* Not logged in  */}
				<Route index element={<AuthenticationPage />} />

				{/* Logged in  */}
				<Route exact path='new-profile' element={<NewProfilePage />} />

				<Route exact path='dashboard' element={<DashboardPage />} />
				<Route exact path='goals' element={<GoalsPage />} />
				<Route exact path='exercises' element={<ExercisesPage />} />
				<Route exact path='programs' element={<ProgramsPage />} />
				<Route exact path='workouts' element={<WorkoutsPage />} />
				<Route exact path='edit-profile' element={<EditProfilePage />} />

				{/* Logged in, restricted routes */}
				<Route exact path='contributor' element={<ContributorPage />} />
				<Route exact path='administrator' element={<AdministratorPage />} />

				{/* Wildcard fallback page */}
				<Route exact path='*' element={<AuthenticationPage />} />
			</Routes>
		</ApplicationFrame>
	);
}

export default App;
