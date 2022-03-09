import './App.css';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProgramsForm from './components/ProgramsForm';
import ExerciseForm from './components/ExerciseForm';
import WorkoutForm from './components/WorkoutForm';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/program' element={<ProgramsForm/>} />
          <Route path='/exercise' element={<ExerciseForm/>} />
          <Route path='/workout' element={<WorkoutForm/>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
