import AppContent from './content/AppContent';
import AppSidebar from './AppSidebar';
import AppHeader from './header/AppHeader';
import AppFooter from '../AppFooter';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Outlet />
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
