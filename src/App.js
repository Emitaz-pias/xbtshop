import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { AppProviders } from './context';

// import AnimatedBackground from './components/Common/AnimatedBackground';
// Pages
import Home from './pages/Home';
import WorkingWithUs from './components/WorkingWithUs/WorkingWithUs';


function App() {
  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:workingWithUs" element={<WorkingWithUs />} />
          {/* <Route path="/promotions" element={<Promotions />} /> */}
        </Routes>
      </Router>
    </AppProviders>
  );
}

export default App;