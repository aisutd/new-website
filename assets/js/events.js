//  events.js

//  Depends on jQuery

if (typeof $ === 'undefined') {
    console.error('jQuery must be included before this file.');
}
else {
    $(init);
}


async function init() {
    let eventsFragment = loadEvents(createEventDiv);

    let container = document.getElementById('events-list');

    container.innerText = 'Downloading event list. Please wait...';

    let fragment = await eventsFragment;

    container.innerHTML = '';
    container.append(fragment);

    console.log('Events loaded.');
}

function createEventDiv(event) {
    let div = document.createElement('DIV');

    div.className = 'event';
    div.innerHTML = 
        `<b>What</b>: ${event.summary}<br>` +
        `<b>When</b>: ${event.start.dateTime}<br>` +
        `<b>Where</b>: ${event.location || '&lt;No location specified&gt;'}<br>` +
        `<br>` +
        `<b>Description</b>:<br>` +
        `${event.description || '&lt;No description&gt;'}<br><br><hr style='color: white'>`
        ;

    return div;
}
