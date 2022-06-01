import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import NoPage from './pages/NoPage';
import Quote from './pages/Quote';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
