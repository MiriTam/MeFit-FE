import {
	AccountCircleOutlined,
	AdminPanelSettingsOutlined,
	DirectionsRunOutlined,
	FitnessCenterOutlined,
	GradeOutlined,
	HomeOutlined,
	LibraryBooksOutlined,
	PostAddOutlined
} from '@mui/icons-material';

export default function getIconBasedOnTitle(title) {
	// Navbar
	if (title === 'Dashboard') return <HomeOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Goals') return <GradeOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Exercises') return <FitnessCenterOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Workouts') return <DirectionsRunOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Programs') return <LibraryBooksOutlined sx={{ mr: 1.25 }} />;

	// Dropdown
	if (title === 'Profile Page') return <AccountCircleOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Contributor Page') return <PostAddOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Administrator Page') return <AdminPanelSettingsOutlined sx={{ mr: 1.25 }} />;
}
