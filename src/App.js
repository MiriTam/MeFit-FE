import Button from '@mui/material/Button';
import AddBox from '@mui/icons-material/AddBox';

function App() {
	return (
		<div className='App'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<p className=''>This is a paragraph.</p>
			<Button size='large' disabled={false} variant='contained' color='primary'>
				Primary Button
			</Button>
			<AddBox color='primary' />
		</div>
	);
}

export default App;
