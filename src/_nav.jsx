import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilListRich, cilSpeedometer } from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Domů',
    to: '/admin/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Hlavní'
  },
  {
    component: CNavGroup,
    name: 'Události',
    to: '/admin/udalosti',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Přehled událostí',
        to: '/admin/udalosti/prehled'
      },
      {
        component: CNavItem,
        name: 'Typy událostí',
        to: '/admin/udalosti/typy-udalosti'
      },
      {
        component: CNavItem,
        name: 'Osoby událostí',
        to: '/admin/udalosti/osoby-udalosti'
      },
      {
        component: CNavItem,
        name: 'Periody událostí',
        to: '/admin/udalosti/periody-udalosti'
      },
      {
        component: CNavItem,
        name: 'Společnosti',
        to: '/admin/udalosti/spolecnosti'
      }
    ]
  }
];

export default _nav;
