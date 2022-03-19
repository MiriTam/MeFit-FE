const ROLES_PROPERTY = 'https://schemas.dev-o072w2hj.com/roles';

export const isUser = user => user[ROLES_PROPERTY]?.includes('User');
export const isContributor = user => user[ROLES_PROPERTY]?.includes('Contributor');
export const isAdministrator = user => user[ROLES_PROPERTY]?.includes('Admin');
