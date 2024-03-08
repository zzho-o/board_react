import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Boards from "./pages/Boards";
import InvalidPath from "./pages/InvalidPath";
import BoardList from "./pages/Boards/Free/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/boards" element={<Boards />} />
        <Route path="/boards/free/list" element={<BoardList />} />
        <Route path="*" element={<InvalidPath />} />
      </Routes>
    </Router>
  );
}

export default App;
