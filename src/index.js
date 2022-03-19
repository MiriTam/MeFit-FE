import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppContext from './context/AppContext';

import './styles/index.css';

ReactDOM.render(
	<BrowserRouter>
		<AppContext>
			<App />
		</AppContext>
	</BrowserRouter>,
	document.getElementById('root')
);
