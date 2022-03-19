import { useMediaQuery } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import React, { createContext, useContext, useMemo, useState } from 'react';

// Creating context
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function useColorModeContext() {
	return useContext(ColorModeContext);
}

// Providing the context
export function ThemeProvider({ children }) {
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
	const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
			}
		}),
		[]
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode
				}
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ColorModeContext.Provider>
	);
}
