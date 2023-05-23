import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/Layout/SharedLayout';
import SharedBaseContent from './pages/Layout/SharedBaseContent';
import Homepage from './pages//Index';

const App = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route element={<SharedBaseContent />}>
              <Route path="/" index element={<Homepage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
