import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Admin from './components/Admin';
import DataTable from './components/DataTable';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/data" element={<DataTable />} />
      </Routes>
    </Router>
  );
}

export default App;
