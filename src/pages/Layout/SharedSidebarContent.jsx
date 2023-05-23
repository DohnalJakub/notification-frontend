import { Outlet } from 'react-router-dom';
import '../../scss/Layout.scss';
import '../../scss/Sidebar.scss';

const SharedSidebarContent = (props) => {
  return (
    <div className="main">
      <aside className="side">{props.sideBar}</aside>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedSidebarContent;
