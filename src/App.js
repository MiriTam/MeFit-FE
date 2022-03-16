// import { Route, Routes } from 'react';
import { Route, Routes } from 'react-router-dom';

import ApplicationFrame from './components/shared-components/ApplicationFrame';
import AdministratorPage from './pages/AdministratorPage';
import AuthenticationPage from './pages/AuthenticationPage';
import ContributorPage from './pages/ContributorPage';
import DashboardPage from './pages/DashboardPage';
import ExercisesPage from './pages/ExercisesPage';
import ProfilePage from './pages/ProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import WorkoutsPage from './pages/WorkoutsPage';

function App() {
	// const { loggedInUser, login } = useUser();
	// const navigate = useNavigate();
	// const pathname = useLocation().pathname;

	// // Redirect to application from / or /register if logged in
	// useEffect(() => {
	// 	if (!isOnRootOrRegisterPage(pathname)) return;

	// 	if (loggedInUser) navigate('/dashboard');

	// 	const sessionLoggedInUser = storageRead('loggedInUser');

	// 	if (sessionLoggedInUser) {
	// 		login(sessionLoggedInUser);
	// 	}
	// }, [navigate, loggedInUser, login, pathname]);

	// // Redirect to / from application if not logged in
	// useEffect(() => {
	// 	if (isOnRootOrRegisterPage(pathname)) return;

	// 	if (!loggedInUser) navigate('/');
	// }, [loggedInUser, navigate, login, pathname]);

	return (
		<>
			<ApplicationFrame>
				<Routes>
					{/* Not logged in  */}
					<Route exact path='' element={<AuthenticationPage />} />
					{/* <Route exact path='' element={<LoginPage />} /> */}
					{/* <Route path='register' element={<RegistrationPage />} /> */}

					{/* Logged in  */}
					<Route path='dashboard' element={<DashboardPage />} />
					<Route path='exercises' element={<ExercisesPage />} />
					<Route path='programs' element={<ProgramsPage />} />
					<Route path='workouts' element={<WorkoutsPage />} />
					<Route path='profile' element={<ProfilePage />} />
					<Route path='contributor' element={<ContributorPage />} />
					<Route path='administrator' element={<AdministratorPage />} />

					{/* Wildcard fallback page */}
					<Route path='*' element={<AuthenticationPage />} />
				</Routes>
			</ApplicationFrame>
		</>
	);
}

export default App;
