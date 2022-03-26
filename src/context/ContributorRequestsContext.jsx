import { getAllContributorRequests } from '../api/contributor-requests';
import React, { createContext, useContext, useState } from 'react';

// Creating context
const ContributorRequestsContext = createContext();

export function useContributorRequests() {
	return useContext(ContributorRequestsContext);
}

// Providing the context
export function ContributorRequestsProvider({ children }) {
	const [contributorRequests, setContributorRequests] = useState([]);
	const [firstRequestMade, setFirstRequestMade] = useState(false);

	async function getAndSetContributorRequests(token) {
		if (firstRequestMade) return;

		const apiContributorRequests = await getAllContributorRequests(token);

		setContributorRequests(apiContributorRequests);
		setFirstRequestMade(true);
	}

	const state = {
		contributorRequests,
		setContributorRequests,
		getAndSetContributorRequests
	};

	return (
		<ContributorRequestsContext.Provider value={state}>
			{children}
		</ContributorRequestsContext.Provider>
	);
}

export default ContributorRequestsContext;
