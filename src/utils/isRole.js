export const isUser = user => user['roles']?.includes('User');
export const isContributor = user => user['roles']?.includes('Contributor');
export const isAdministrator = user => user['roles']?.includes('Admin');
