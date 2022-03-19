import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';

function AppContext({ children }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}

export default AppContext;
