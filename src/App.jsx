import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { csCZ } from '@mui/material/locale';

const App = () => {
  const theme = useTheme(); //replace with your theme/createTheme

  return (
    <ThemeProvider theme={createTheme(theme, csCZ)}>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Domů" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
