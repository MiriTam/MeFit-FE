export default function getDefaultRoleValue(isContributorBool, isAdminBool) {
	if (!isContributorBool && !isAdminBool) return 'regular';
	if (isContributorBool && !isAdminBool) return 'contributor';
	if (isContributorBool && isAdminBool) return 'admin';
}
