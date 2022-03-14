export function getRoleBooleans(role) {
	if (role === 'regular') return { isContributer: false, isAdmin: false };
	if (role === 'contributor') return { isContributer: true, isAdmin: false };
	if (role === 'admin') return { isContributer: true, isAdmin: true };
}
