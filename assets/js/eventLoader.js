//  eventLoader.js
//  Joshua Baker

//  Events Calendar
const calendarId = ''; // something like 'sh9qvrc3c774rl92p65qbceig0@group.calendar.google.com';

//  Created at console.developers.google.com by admin account.
const apiKey = ''; // something like 'BIzaSyCDfhDvk1lDQTivXTdrMHPIEQgnXHxsAGk';


//  Uses the calendarId and apiKey to download a list of all upcoming events.
//
//  Passes data about each one separately into a function called createEventDiv,
//  which outputs 1 event div from the provided information.
//
//  Returns a document fragment containing each produced event div in order
//  of event start time, soonest first.
//
//  createEventDiv: function(event) where event: {
//      id: string,
//      status: string,
//      htmlLink: string,
//      created: datetime,
//      updated: datetime,
//      summary: string,
//      description: string,
//      location: string,
//      start: time object,
//      end: time object,
//      and more...
//  }
//  where time object: {
//      date: date,
//      dateTime: datetime,
//      timeZone: string
//  }
//
//  Refer to https://developers.google.com/calendar/v3/reference/events/list
//  and https://developers.google.com/calendar/v3/reference/events#resource
async function loadEvents(createEventDiv) {
    try {
        const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}` +
                    `/events?key=${apiKey}&orderBy=startTime&singleEvents=true&` +
                    `timeMin=${new Date().toISOString()}`;
        let response;

        try {
            response = await fetch(url);
        }
        catch (err) {
            console.error('Failed to fetch calendar events.', err);
            throw err;
        }

        //  In case of HTTP error
        if (response.status !== 200) {
            throw new Error(`Request for Google Calendar events returned code ${response.status}.`);
        }

        try {
            response = await response.json();
        }
        catch (err) {
            throw new Error('The Google server\'s response was not valid JSON...?');
        }

        //  Convert event JSON objects to divs for the page.
        let eventDivs = response.items.map(createEventDiv);

        //  Add divs to this fragment first to avoid unnecessary lag
        let fragment = document.createDocumentFragment();

        //  Each div gets passed as a separate argument
        fragment.append(...eventDivs);
        
        return fragment;
    }
    catch (err) {
        console.error('Error while trying to build event divs.');
        throw err;
    }

    function empty(eventsContainer) {
        let first;
        while ((first = eventsContainer.firstChild)) {
            eventsContainer.removeChild(first);
        }
    }
}
