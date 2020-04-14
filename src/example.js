import {Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';

document.addEventListener('DOMContentLoaded', function () {
	let calendarEl = document.getElementById('calendar');
	let dt = new Date();
	let today = startOfWeek(dt);
	let dd = parseInt(String(today.getDate()).padStart(2, '0'));
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();
	let events = [

		{
			title: 'Lesson 3',
			start: yyyy + '-' + mm + '-' + (dd + 1) + 'T14:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 1) + 'T15:30:00',
			backgroundColor: '#3591D0',
			borderColor: '#3591D0'

		},
		{
			title: 'Lesson 4',
			start: yyyy + '-' + mm + '-' + (dd + 2) + 'T18:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 2) + 'T19:30:00',
			backgroundColor: '#3591D0',
			borderColor: '#3591D0'

		},
		{
			title: 'Lesson 4',
			start: yyyy + '-' + mm + '-' + (dd + 3) + 'T18:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 3) + 'T19:30:00',
			backgroundColor: '#DD4B6A',
			borderColor: '#DD4B6A'

		},
		{
			// groupId: '999',
			title: 'Repeating Event',
			start: yyyy + '-' + mm + '-' + (dd + 2) + 'T14:30:00',
			end: yyyy + '-' + mm + '-' + (dd + 2) + 'T16:00:00',
			backgroundColor: '#DD4B6A',
			borderColor: '#DD4B6A'

		},
		{
			// groupId: '999',
			title: 'Repeating Event',
			start: yyyy + '-' + mm + '-' + (dd + 3) + 'T10:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 3) + 'T11:30:00',
			backgroundColor: '#3591D0',
			borderColor: '#3591D0'

		},
		{
			title: 'Meeting',
			start: yyyy + '-' + mm + '-' + (dd) + 'T10:30:00',
			end: yyyy + '-' + mm + '-' + (dd) + 'T12:00:00',
			backgroundColor: '#007D92',
			borderColor: '#007D92'
		},
		{
			title: 'Meeting',
			start: yyyy + '-' + mm + '-' + (dd + 4) + 'T08:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 4) + 'T09:30:00',
			backgroundColor: '#007D92',
			borderColor: '#007D92'
		},
		{
			title: 'Birthday Party',
			start: yyyy + '-' + mm + '-' + (dd + 5) + 'T08:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 5) + 'T09:30:00',
			backgroundColor: '#DD4B6A',
			borderColor: '#DD4B6A'
		},
		{
			title: 'Click for Google',
			start: yyyy + '-' + mm + '-' + (dd + 5) + 'T10:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 5) + 'T11:30:00',
			backgroundColor: '#FECC00',
			borderColor: '#FECC00'
		},
		{
			title: 'Click for Google',
			start: yyyy + '-' + mm + '-' + (dd + 1) + 'T06:00:00',
			end: yyyy + '-' + mm + '-' + (dd + 1) + 'T07:30:00',
			backgroundColor: '#FECC00',
			borderColor: '#FECC00'
		},
		{
			title: 'Click for Google',
			start: yyyy + '-' + mm + '-' + (dd + 1) + 'T22:30:00',
			end: yyyy + '-' + mm + '-' + (dd + 1) + 'T24:00:00',
			backgroundColor: '#FECC00',
			borderColor: '#FECC00'
		}
	];
	let calendar = new Calendar(calendarEl, {
		plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, momentPlugin],
		height: "auto",
		defaultView: 'timeGridWeek',
		displayEventTime: false,
		header: {
			left: '',
			center: '',
			right: 'prev title next'
		},
		minTime: '06:00',
		maxTime: '24:30',
		firstDay: 1,
		views: {
			timeGridWeek: { // name of view
				titleFormat: 'DD.MM.YYYY',
				allDaySlot: false,
				columnHeaderFormat: {
					weekday: 'long'
				},
				slotLabelInterval: '00:30',
				slotLabelFormat: "HH:mm"
				// other view-specific options here
			}
		},
		events: events,
	});
	calendar.render();

	function startOfWeek(date) {
		let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
		return new Date(date.setDate(diff));
	}

});
