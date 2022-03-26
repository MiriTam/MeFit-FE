import { OndemandVideoOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Divider, Tooltip, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';

const color = lightBlue[500];

const ExerciseCard = ({ id, name, description, video, image }) => {
	const location = useLocation();

	function isHighlighted(id) {
		return location.search.includes(id);
	}

	return (
		<Card
			elevation={4}
			className='w-96 min-w-min px-6 py-4 text-left '
			sx={{
				border: isHighlighted(id) ? '2px solid' : 'none',
				borderColor: isHighlighted(id) && color
			}}>
			<CardMedia
				src={
					image ??
					'https://tfkru2exl1c11xfih48h8lmg6y-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/image-coming-soon.jpg'
				}
				component='img'
				image={image}
				alt={name}
				sx={{
					height: '225px',
					objectFit: 'contain',
					background: 'white',
					p: 1
				}}
			/>

			<Divider />

			<CardContent>
				<Box>
					<Typography component='h3' variant='h5'>
						{name}
					</Typography>
				</Box>
				<Box component='div' className='mt-2 max-h-28 overflow-y-scroll scrollbar pr-6'>
					<Typography sx={{ fontSize: 16 }} variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</Box>

				{video && (
					<Box className='mt-4'>
						<a href={video} target='_blank' rel='noopener noreferrer'>
							<Tooltip title={`Link to ${name} video`}>
								<OndemandVideoOutlined fontSize='large'>Video link</OndemandVideoOutlined>
							</Tooltip>
						</a>
					</Box>
				)}
			</CardContent>
		</Card>
	);
};

export default ExerciseCard;
