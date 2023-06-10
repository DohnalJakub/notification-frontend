import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import('./components/layout/default/DefaultLayout'));
const AdminLayout = React.lazy(() => import('./components/layout/admin/AdminLayout'));

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { csCZ } from '@mui/material/locale';
import AuthService from './api/AuthService';

const App = () => {
  const theme = useTheme(); //replace with your theme/createTheme
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
  }, []);

  return (
    <ThemeProvider theme={createTheme(theme, csCZ)}>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" name="Domů" element={<DefaultLayout currentUser={currentUser} />}>
              <Route path="/prihlaseni"></Route>
              <Route path="/registrace"></Route>
              <Route path="*" />
            </Route>

            {currentUser && (
              <Route path="/admin/" name="Dashboard" element={<AdminLayout />}>
                <Route path="/admin/udalosti/"></Route>
                <Route path="/admin/udalosti/prehled"></Route>
                <Route path="/admin/udalosti/typy-udalosti"></Route>
                <Route path="/admin/udalosti/osoby-udalosti"></Route>
                <Route path="/admin/udalosti/periody-udalosti"></Route>
                <Route path="/admin/udalosti/spolecnosti"></Route>
              </Route>
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
