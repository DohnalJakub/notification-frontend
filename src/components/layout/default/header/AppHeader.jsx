import React from 'react';
import { NavLink } from 'react-router-dom';
import { CContainer, CHeader, CHeaderBrand, CHeaderDivider, CHeaderNav, CNavLink, CNavItem } from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { logo } from '../../../../assets/brand/logo';
import AuthService from '../../../../api/AuthService';
import AppHeaderDropdown from '../../admin/header/AppHeaderDropdown';

const logOut = () => {
  AuthService.logout();
};

const AppHeader = (props) => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        {props.currentUser ? (
          <>
            <CHeaderNav className="d-none d-md-flex me-auto">
              <CNavItem>
                <CNavLink href="/admin/udalosti/prehled">Administrace událostí</CNavLink>
              </CNavItem>
            </CHeaderNav>
            <CHeaderNav className="ms-3">
              <CNavLink to="/" component={NavLink} onClick={logOut}>
                Odhlasit
              </CNavLink>
            </CHeaderNav>
            <CHeaderNav className="ms-3">
              <AppHeaderDropdown />
            </CHeaderNav>
          </>
        ) : (
          <>
            <CHeaderNav className="d-none d-md-flex me-auto">
              <CNavItem>
                <CNavLink href="#">Users</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Settings</CNavLink>
              </CNavItem>
            </CHeaderNav>

            <CHeaderNav className="ms-3">
              <CNavLink to="/prihlaseni" component={NavLink}>
                Přihlasit
              </CNavLink>
              <CNavLink to="/registrovat" component={NavLink}>
                Registovat
              </CNavLink>
            </CHeaderNav>
          </>
        )}
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  );
};

export default AppHeader;
