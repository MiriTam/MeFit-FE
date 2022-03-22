import { isAdministrator, isContributor } from './isRole';

export default function getOptionsBasedOnRole(user, isAuthenticated) {
	const options = [];

	if (isAuthenticated && isContributor(user)) {
		options.push({
			title: 'Contributor Page',
			path: '/contributor'
		});
	}

	if (isAuthenticated && isAdministrator(user)) {
		options.push({ title: 'Administrator Page', path: '/administrator' });
	}

	return options;
}
