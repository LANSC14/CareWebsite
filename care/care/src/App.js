import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Page/Home.js";
import Contact from "./Page/Contact.js"; 
import Information from "./Page/Information.js";
import Assessment from "./Page/Assessment.js";
import HomeCare from "./Page/HomeCare.js";
import Subsidy from "./Page/Subsidy.js";
import Diet from "./Page/Diet.js";
import Reablement from "./Page/Reablement.js";
import AssistiveDevice from "./Page/AssistiveDevice.js";
import Transportation from "./Page/Transportation.js";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-collapse">
              <div className="navbar-nav">
                <Link className="nav-link" to="/">首頁</Link>
                <Link className="nav-link" to="/information">相關資訊</Link>
                <Link className="nav-link" to="/assessment">專業評估</Link>
                <Link className="nav-link" to="/homecare">居家照護</Link>
                <Link className="nav-link" to="/diet">飲食管理</Link>
                <Link className="nav-link" to="/reablement">復能服務</Link>
                <Link className="nav-link" to="/assistivedevice">輔助器具</Link>
                <Link className="nav-link" to="/transportation">交通接送</Link>
                <Link className="nav-link" to="/subsidy">補助項目</Link>
                <Link className="nav-link" to="/contact">聯絡我們</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/information" element={<Information />} />
          <Route path="/assessment" element={<Assessment />} /> 
          <Route path="/homecare" element={<HomeCare />} /> 
          <Route path="/diet" element={<Diet />} />
          <Route path="/reablement" element={<Reablement />} /> 
          <Route path="/assistivedevice" element={<AssistiveDevice />} /> 
          <Route path="/transportation" element={<Transportation />} /> 
          <Route path="/subsidy" element={<Subsidy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
