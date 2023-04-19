import { useState } from "react";
import { Home, Login, Public } from "./container/public";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="text-xl">
        <Routes>
          <Route></Route>
        </Routes>
      </div>
      <ToastContainer position="botton-right" />
    </>
  );
}

export default App;
