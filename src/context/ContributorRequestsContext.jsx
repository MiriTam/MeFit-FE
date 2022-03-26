import React, { createContext, useContext, useState } from 'react';

// Creating context
const ContributorRequestsContext = createContext();

export function useContributorRequests() {
	return useContext(ContributorRequestsContext);
}

// Providing the context
export function ContributorRequestsProvider({ children }) {
	const [contributorRequests, setContributorRequests] = useState([]);

	const state = {
		contributorRequests,
		setContributorRequests
	};

	return (
		<ContributorRequestsContext.Provider value={state}>
			{children}
		</ContributorRequestsContext.Provider>
	);
}

export default ContributorRequestsContext;
