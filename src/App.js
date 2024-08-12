import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/home';
import Menu from './pages/menu';


function App() {
  return (
    <div>
     <Router>
      <div className="App">
     

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu/>} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
