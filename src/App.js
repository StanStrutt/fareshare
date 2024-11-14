import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Whatwedo from "./Pages/what-we-do";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/what-we-do' element={<Whatwedo />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;