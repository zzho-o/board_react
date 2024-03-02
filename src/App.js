import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import InvalidPath from "./pages/InvalidPath";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<InvalidPath />} />
      </Routes>
    </Router>
  );
}

export default App;
