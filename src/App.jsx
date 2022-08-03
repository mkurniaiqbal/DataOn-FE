import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
// import ProtectedRoutes from "./ProtectedRoutes";
import Training from "./Components/Training";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/training/create" element={<Training />} />
          <Route path="/training/:id/edit" element={<Training />} />
          <Route path="/training/:id" element={<Training />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
