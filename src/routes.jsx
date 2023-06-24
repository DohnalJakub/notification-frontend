import React from 'react';

// Buttons
const Home = React.lazy(() => import('./components/layout/default/content/home/home'));
const Events = React.lazy(() => import('./components/eventModul/events/EventGrid'));
const EventTypes = React.lazy(() => import('./components/eventModul/eventTypes/EventTypeGrid'));
const EventPeriod = React.lazy(() => import('./components/eventModul/eventPeriods/EventPeriod'));
const EventPerson = React.lazy(() => import('./components/eventModul/eventPersons/EventPersonGrid'));
const Company = React.lazy(() => import('./components/eventModul/companies/CompanyGrid'));
const Register = React.lazy(() => import('./pages/register/Register'));
const Login = React.lazy(() => import('./pages/login/Login'));
const Page404 = React.lazy(() => import('./pages/page404/Page404'));
const Page500 = React.lazy(() => import('./pages/page500/Page500'));

const routes = [
  { path: '/', exact: true, name: 'Domů', element: Home },
  { path: '/admin/udalosti', name: 'Události', element: Events, exact: true },
  { path: '/admin/udalosti/prehled', name: 'Přehled událostí', element: Events },
  { path: '/admin/udalosti/typy-udalosti', name: 'Typy událostí', element: EventTypes },
  { path: '/admin/udalosti/osoby-udalosti', name: 'Osoby událostí', element: EventPerson },
  { path: '/admin/udalosti/periody-udalosti', name: 'Periody událostí', element: EventPeriod },
  { path: '/admin/udalosti/spolecnosti', name: 'Společnosti', element: Company },
  { path: '/registrace', element: Register },
  { path: '/prihlaseni', element: Login },
  { path: '/404', element: Page404 },
  { path: '/chyba', element: Page500 }
];

export default routes;
