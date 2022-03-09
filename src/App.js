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
			<Route exact path='register' element={<RegistrationPage />} />

			{/* Logged in  */}
			<Route exact path='dashboard' element={<DashboardPage />} />
			<Route exact path='excercises' element={<ExcercisesPage />} />
			<Route exact path='programs' element={<ProgramsPage />} />
			<Route exact path='workouts' element={<WorkoutsPage />} />
			<Route exact path='profile' element={<ProfilePage />} />
			<Route exact path='contributor' element={<ContributorPage />} />
			<Route exact path='administrator' element={<AdministratorPage />} />

			{/* Wildcard fallback page */}
			<Route path='*' element={<LoginPage />} />
		</Routes>
	);
}

export default App;
