import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/Layout/SharedLayout';
import SharedBaseContent from './pages/Layout/SharedBaseContent';
import Homepage from './pages//Index';
import SidebarMenuEvent from './components/Events/SidebarMenu';
import SharedSidebarContent from './pages/Layout/SharedSidebarContent';
import EventIndex from './components/Events/Index';
import Event from './pages/Events/Event';
import EventType from './pages/Events/EventType';
import EventPerson from './pages/Events/EventPerson';
import Company from './pages/Events/Company';

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
          <Route path="/event/" element={<SharedLayout hamburgerIcon={true} />}>
            <Route element={<SharedSidebarContent sideBar={<SidebarMenuEvent />} />}>
              <Route index element={<EventIndex />} />
              <Route path="/event/events" element={<Event />} />
              <Route path="/event/event-type" element={<EventType />} />
              <Route path="/event/event-person" element={<EventPerson />} />
              <Route path="/event/company" element={<Company />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
