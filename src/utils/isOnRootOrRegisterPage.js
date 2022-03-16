export function isOnRootOrRegisterPage(pathname) {
	if (pathname === '/') return true;
	if (pathname === '/register') return true;

	return false;
}
