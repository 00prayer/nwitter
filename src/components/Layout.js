import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{maxWidth: 890, width: "100%", margin: "0 auto", marginTop: 80, display: "flex", justifyContent: "center"}} >
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;