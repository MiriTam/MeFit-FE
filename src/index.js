import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
// import AppContext from './context/AppContext';

import './styles/index.css';

ReactDOM.render(
	<BrowserRouter>
		{/* <AppContext> */}
		<Auth0ProviderWithHistory>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Auth0ProviderWithHistory>
		{/* </AppContext> */}
	</BrowserRouter>,
	document.getElementById('root')
);
