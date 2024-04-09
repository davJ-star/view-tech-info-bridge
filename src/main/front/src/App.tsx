import { Route, Routes } from 'react-router-dom';
import { Home } from './screens';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
