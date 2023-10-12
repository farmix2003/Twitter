import { Routes, Route } from 'react-router-dom'
import { Home, Auth } from './components'

function App() {

  return (
    <div className="">

      <Routes>
        <Route path="/*" element={true ? <Home /> : <Auth />} />

      </Routes>
    </div>
  );
}

export default App;
