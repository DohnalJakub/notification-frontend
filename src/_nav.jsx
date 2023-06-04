import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilListRich, cilSpeedometer } from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Domů',
    to: '/domu',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Hlavní'
  },
  {
    component: CNavGroup,
    name: 'Události',
    to: '/udalosti',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Přehled událostí',
        to: '/udalosti/prehled'
      },
      {
        component: CNavItem,
        name: 'Typy událostí',
        to: '/udalosti/typy-udalosti'
      },
      {
        component: CNavItem,
        name: 'Osoby událostí',
        to: '/udalosti/osoby-udalosti'
      },
      {
        component: CNavItem,
        name: 'Periody událostí',
        to: '/udalosti/periody-udalosti'
      },
      {
        component: CNavItem,
        name: 'Společnosti',
        to: '/udalosti/spolecnosti'
      }
    ]
  }
];

export default _nav;
