import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Appointments = () => {
	//eslint-disable-next-line
	const [myEventsList, setMyEventsList] = useState(
		{
			name: 'Kara',
		},
		{
			name: 'Adrian',
		},
		{
			name: 'Crystal',
		},
		{
			name: 'Luis',
		},
	);

	const localizer = momentLocalizer(moment);
	const setDates = () => {
		const events = [];
		events.map(event => {
			return events.push({
				start: new Date(event.start),
				end: new Date(event.end),
				title: `${event.name} `,
				allDay: true,
			});
		});
		return events;
	};

	return (
		<div className='calendar-container' style={{ height: '500px' }}>
			<BigCalendar localizer={localizer} events={setDates()} startAccessor='start' endAccessor='end' />
		</div>
	);
};
export default Appointments;
