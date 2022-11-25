
import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  
  return (
      <HashRouter>
        <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      <FooterComponent />
    </HashRouter>

    );
}

export default App;
