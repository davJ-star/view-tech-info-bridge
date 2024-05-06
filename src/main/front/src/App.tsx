import { Route, Routes } from 'react-router-dom';
import { Home } from './screens';
import { NavigationBar } from './component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
