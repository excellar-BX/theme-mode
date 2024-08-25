import React, { useEffect, useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Theme from "./components/Theme";

function App() {
  return (
  <div>

<Theme/>

      <Router>
        <Routes>
          <Route path="*" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;