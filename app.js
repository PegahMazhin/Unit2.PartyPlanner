const events = [
  {
    id: 1,
    name: "Event Name",
    description: "This is a description of the event.",
    date: "2021-09-30T00:00:00.000Z",
    location: "123 Street"
  },
  {
    id: 2,
    name: "Second Event",
    description: "This is another event happening in town.",
    date: "2021-10-05T18:30:00.000Z",
    location: "456 Avenue"
  }
];


const renderEvents = (events) => {
  const eventsContainer = document.querySelector('events-container');
  events.forEach(event => {
    const eventDiv = document.querySelector('div');
    eventDiv.classList.add('event');

    eventDiv.innerHTML = `
      <h2>${event.name}</h2>
      <p><strong>Description:</strong> ${event.description}</p>
      <p><strong>Location:</strong> ${event.location}</p>
    `;

    eventsContainer.appendChild(eventDiv);
  });
}

window.onload = () => {
  renderEvents(events);
};
