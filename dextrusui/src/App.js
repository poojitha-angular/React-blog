import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HeaderPage from './pages/headerpage/HeaderPage';
import Home from './components/Home';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPage></HeaderPage>} ></Route>
        <Route path="/home" element={<HomePage></HomePage>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
