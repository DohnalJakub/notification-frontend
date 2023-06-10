import AppContent from '../admin/content/AppContent';
import AppFooter from '../AppFooter';
import AppHeader from './header/AppHeader.jsx';

const DefaultLayout = (props) => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader currentUser={props.currentUser} />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
