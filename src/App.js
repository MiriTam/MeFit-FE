import './App.css';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
