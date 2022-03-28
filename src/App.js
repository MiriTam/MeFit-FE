import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import ApplicationFrame from './components/shared-components/ApplicationFrame';
import { useCurrentUser } from './context/CurrentUserContext';
import AdministratorPage from './pages/AdministratorPage';
import AuthenticationPage from './pages/AuthenticationPage';
import ContributorPage from './pages/ContributorPage';
import DashboardPage from './pages/DashboardPage';
import EditProfilePage from './pages/EditProfilePage';
import ExercisesPage from './pages/ExercisesPage';
import GoalPage from './pages/GoalPage';
import NewProfilePage from './pages/NewProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import WorkoutsPage from './pages/WorkoutsPage';
import { isOnRootPage } from './utils/isOnPage';

function App() {
	const [hasCheckedStatus, setHasCheckedStatus] = useState(false);
	const { isAuthenticated, getAccessTokenSilently } = useAuth0();
	const { hasProfile, setHasProfile, checkHasProfile, hasProfileIsPending } = useCurrentUser();

	const navigate = useNavigate();
	const pathname = useLocation().pathname;

	useEffect(() => {
		if (!hasCheckedStatus) {
			(async () => {
				const token = await getAccessTokenSilently();
				const apiHasProfile = await checkHasProfile(token);

				if (apiHasProfile) {
					setHasProfile(true);
					setHasCheckedStatus(true);

					if (pathname === '/new-profile') navigate('/dashboard');
					return;
				}

				setHasProfile(false);
				setHasCheckedStatus(true);

				navigate('/new-profile');
			})();
		}
	}, [
		checkHasProfile,
		getAccessTokenSilently,
		setHasProfile,
		navigate,
		pathname,
		setHasCheckedStatus,
		hasCheckedStatus
	]);

	useEffect(() => {
		if (isOnRootPage(pathname) && isAuthenticated && !hasProfileIsPending() && hasProfile)
			navigate('/dashboard');
		if (isOnRootPage(pathname) && isAuthenticated && !hasProfileIsPending() && !hasProfile)
			navigate('/new-profile');
		if (!isOnRootPage(pathname) && isAuthenticated && !hasProfileIsPending() && !hasProfile)
			navigate('/new-profile');
		if (!isOnRootPage(pathname) && !isAuthenticated) navigate('/');
	}, [navigate, hasProfile, pathname, isAuthenticated, hasProfileIsPending]);

	return (
		<ApplicationFrame>
			<Routes>
				{/* Not logged in  */}
				<Route index element={<AuthenticationPage />} />

				{/* Logged in  */}
				<Route exact path='new-profile' element={<NewProfilePage />} />

				<Route exact path='dashboard' element={<DashboardPage />} />
				<Route exact path='goals' element={<GoalPage />} />
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
