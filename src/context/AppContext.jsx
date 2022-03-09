import React from 'react';

import { UserProvider } from './UserContext';

function AppContext({ children }) {
	return <UserProvider>{children}</UserProvider>;
}

export default AppContext;
