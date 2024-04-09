import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../../component';

const HomeScreen = () => {
  return (
    <>
      <nav>
        <NavigationBar />
      </nav>
      <Outlet />
      <footer>{/* FOOTER */}</footer>
    </>
  );
};

export default HomeScreen;
