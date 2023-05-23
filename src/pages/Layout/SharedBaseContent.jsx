import { Outlet } from 'react-router-dom';

const SharedBaseContent = () => {
  return (
    <div className="main">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedBaseContent;
