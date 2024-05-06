import { Route, Routes } from 'react-router-dom';
import { Home, NaverNews } from './screens';
import { NavigationBar } from './component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/naver" element={<NaverNews />} />
      </Route>
    </Routes>
  );
};

export default App;
