import { Route, Routes } from 'react-router-dom';

import AdministratorPage from './pages/AdministratorPage';
import ContributorPage from './pages/ContributorPage';
import DashboardPage from './pages/DashboardPage';
import ExcercisesPage from './pages/ExcercisesPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ProgramsPage from './pages/ProgramsPage';
import RegistrationPage from './pages/RegistrationPage';
import WorkoutsPage from './pages/WorkoutsPage';

function App() {
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
