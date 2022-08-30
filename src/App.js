import React from "react";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Global Style
import { GlobalStyle } from './GlobalStyle';

//Components
import Connect from "./components/Connect";
import BusinessContinuity from "./components/BusinessContinuity";
import QualityManagement from "./components/QualityManagement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/businesscontinuity" element={<BusinessContinuity />} />
        <Route path="/qualitymanagement" element={<QualityManagement />} />
      </Routes>
      {/* <Connect /> */}
      <GlobalStyle />
    </Router>
  );
}

export default App;
