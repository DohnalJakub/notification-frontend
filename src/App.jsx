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
import EventTypes from './components/eventModul/eventTypes/EventTypeGrid';
import EventPersonGrid from './components/eventModul/eventPersons/EventPersonGrid';
import CompanyGrid from './components/eventModul/companies/CompanyGrid';
import EventGrid from './components/eventModul/events/EventGrid';

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
            </Route>

            {currentUser && (
              <Route path="/admin" name="Dashboard" element={<AdminLayout />}>
                <Route path="/admin/udalosti/"></Route>
                <Route path="/admin/udalosti/prehled" element={<EventGrid />}></Route>
                <Route path="/admin/udalosti/typy-udalosti" element={<EventTypes />}></Route>
                <Route path="/admin/udalosti/osoby-udalosti" element={<EventPersonGrid />}></Route>
                <Route path="/admin/udalosti/periody-udalosti"></Route>
                <Route path="/admin/udalosti/spolecnosti" element={<CompanyGrid />}></Route>
              </Route>
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
