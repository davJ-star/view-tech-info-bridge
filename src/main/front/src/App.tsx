import { Route, Routes } from 'react-router-dom'
import { Home, NaverNews, ThesisList } from './screens'
import { NavigationBar } from './component'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<NaverNews />} />
        <Route path="/thesis" element={<ThesisList />} />
      </Route>
    </Routes>
  )
}

export default App
