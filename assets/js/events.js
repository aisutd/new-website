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

    container.empty();
    container.append(fragment);

    console.log('Events loaded.');
}

function createEventDiv(event) {
    let div = document.createElement('DIV');

    div.className = 'event';
    div.innerHTML = 
        `What: ${event.summary}<br>` +
        `When: ${event.start}<br>` +
        `Where: ${event.location}<br>` +
        `<br>` +
        `Description:<br>` +
        `${event.description}`
        ;

    return div;
}
