import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import useUser from './context/UserContext';
import AdministratorPage from './pages/AdministratorPage';
import ContributorPage from './pages/ContributorPage';
import DashboardPage from './pages/DashboardPage';
import ExcercisesPage from './pages/ExcercisesPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import RegistrationPage from './pages/RegistrationPage';
import WorkoutsPage from './pages/WorkoutsPage';
import { storageRead } from './utils/storage';

function App() {
	const { username, login } = useUser();
	const navigate = useNavigate();
	const pathname = useLocation().pathname;

	// Redirect to application from / or /register if logged in
	useEffect(() => {
		if (pathname !== '/' && pathname !== '/register') return;

		if (username) navigate('/dashboard');

		const sessionUsername = storageRead('user');
		if (sessionUsername) login(sessionUsername);
	}, [navigate, username, login, pathname]);

	// Redirect to / from application if not logged in
	useEffect(() => {
		if (pathname === '/' || pathname === '/register') return;

		if (!username) navigate('/');
	}, [username, navigate, login, pathname]);

	return (
		<Routes>
			{/* Not logged in  */}
			<Route exact path='' element={<LoginPage />} />
			<Route path='register' element={<RegistrationPage />} />

			{/* Logged in  */}
			<Route path='dashboard' element={<DashboardPage />} />
			<Route path='excercises' element={<ExcercisesPage />} />
			<Route path='programs' element={<ProgramsPage />} />
			<Route path='workouts' element={<WorkoutsPage />} />
			<Route path='profile' element={<ProfilePage />} />
			<Route path='contributor' element={<ContributorPage />} />
			<Route path='administrator' element={<AdministratorPage />} />

			{/* Wildcard fallback page */}
			<Route path='*' element={<LoginPage />} />
		</Routes>
	);
}

export default App;
