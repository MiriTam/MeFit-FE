import { isAdministrator, isContributor } from './isRole';

export default function getRoleBasedOptions(user) {
	const options = [];

	if (isContributor(user)) {
		options.push({
			title: 'Contributor Page',
			path: '/contributor'
		});
	}

	if (isAdministrator(user)) {
		options.push({ title: 'Administrator Page', path: '/administrator' });
	}

	return options;
}
