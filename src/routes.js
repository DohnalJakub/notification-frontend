import React from 'react';

// Buttons
const Events = React.lazy(() => import('./views/events/Events'));
const EventTypes = React.lazy(() => import('./views/events/EventType'));
const EventPeriod = React.lazy(() => import('./views/events/EventPeriod'));
const EventPerson = React.lazy(() => import('./views/events/EventPerson'));
const Company = React.lazy(() => import('./views/companies/Company'));

const routes = [
  { path: '/', exact: true, name: 'Domů' },
  { path: '/udalosti', name: 'Události', element: Events, exact: true },
  { path: '/udalosti/prehled', name: 'Přehled událostí', element: Events },
  { path: '/udalosti/typy-udalosti', name: 'Typy událostí', element: EventTypes },
  { path: '/udalosti/osoby-udalosti', name: 'Osoby událostí', element: EventPerson },
  { path: '/udalosti/periody-udalosti', name: 'Periody událostí', element: EventPeriod },
  { path: '/udalosti/spolecnosti', name: 'Společnosti', element: Company }
];

export default routes;
