import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useState } from 'react';
import { Container, TextField } from '@mui/material';
import enLocale from 'date-fns/locale/en-US';

const localeMap = {
    en: enLocale
}

const maskMap = {
    en: '__/__/____'
}

export default function Calendar() {
	const [value, setValue] = useState(new Date());
    const [locale] = useState('en')
    

	return (
		<Container align='center' sx={{my: 3}}>
			<LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
				<DatePicker
                    mask={maskMap[locale]}
					label='Choose starting day'
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
