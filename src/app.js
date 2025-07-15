import React from 'react'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenerPage from './Pages/ShortenerPage';
import StatsPage from './Pages/StatsPage';
import Redirector from './Components/Redirector';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Router>
      <Routes>
        <Route path="/" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<Redirector />} />
      </Routes>
    </Router>
);