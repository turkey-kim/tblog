import React from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <p>hello</p>
    </div>
  );
}

export default App;
