import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const { test } = useSelector((stale) => stale.app);
  console.log(test);
  return (
    <>
      <div className="text-xl">app</div>
      <ToastContainer position="botton-right" />
    </>
  );
}

export default App;
