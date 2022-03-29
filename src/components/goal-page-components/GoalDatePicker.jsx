import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Container, TextField } from '@mui/material';
import enLocale from 'date-fns/locale/en-US';
import { useEffect, useState } from 'react';

import { useGoal } from '../../context/GoalContext';

const localeMap = {
	en: enLocale
};

const maskMap = {
	en: '__/__/____'
};

export default function GoalDatePicker() {
	const [value, setValue] = useState(new Date());
	const [locale] = useState('en');
	const { setNewGoal } = useGoal();

	useEffect(() => {
		console.log(value.toISOString());
		const date = value.toISOString();
		setNewGoal(prev => ({ ...prev, endDate: date }));
	}, [value, setNewGoal]);

	return (
		<Container align='center' sx={{ my: 3 }}>
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
				<DatePicker
					mask={maskMap[locale]}
					label='Choose ending day'
					value={value}
					onChange={newValue => {
						setValue(newValue);
					}}
					renderInput={params => <TextField {...params} />}
					disablePast
				/>
			</LocalizationProvider>
		</Container>
	);
}
