import React from "react";
import { Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import NavBar from "./NavBar";
import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={Properties} />
        <Route path="/add-property" element={AddProperty} />
      </Routes>
    </div>
  );
}

export default App;
