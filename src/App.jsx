import { useState } from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
