import {
	AccountCircleOutlined,
	AdminPanelSettingsOutlined,
	DirectionsRunOutlined,
	FitnessCenterOutlined,
	HomeOutlined,
	LibraryBooksOutlined,
	PostAddOutlined
} from '@mui/icons-material';

export default function getIconBasedOnTitle(title) {
	if (title === 'Dashboard') return <HomeOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Excercises') return <FitnessCenterOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Workouts') return <DirectionsRunOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Programs') return <LibraryBooksOutlined sx={{ mr: 1.25 }} />;

	if (title === 'Profile Page') return <AccountCircleOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Contributor Page') return <PostAddOutlined sx={{ mr: 1.25 }} />;
	if (title === 'Administrator Page') return <AdminPanelSettingsOutlined sx={{ mr: 1.25 }} />;
}
