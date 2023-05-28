import { NavLink } from 'react-router-dom';
import '../../scss/Layout.scss';

const SidebarMenu = () => {
  return (
    <ul>
      <li key="/event/events">
        <NavLink to="/event/events" className="nav-link">
          Události
        </NavLink>
      </li>
      <li key="/event/event-type">
        <NavLink to="/event/event-type" className="nav-link">
          Typ události
        </NavLink>
      </li>
      <li key="/event/event-person">
        <NavLink to="/event/event-person" className="nav-link">
          Osoby
        </NavLink>
      </li>
      <li key="/event/company">
        <NavLink to="/event/company" className="nav-link">
          Společnost
        </NavLink>
      </li>
    </ul>
  );
};

export default SidebarMenu;
