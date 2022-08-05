import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Training from "./Components/Training";
import ProtectedRoutesUser from "./ProtectedRoutesUser";
import ContextWrapper from "./Context";
import ToggleView from "./Components/ToggleView/ToggleView";
import FileterSection from "./Components/FilterSection/FilterSection";
import "./App.css";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumb";
import CreateTrainingEvent from "./Components/CreateTrainingEvent/CreateTrainingEvent";

function App() {
  return (
    <div className="App">
      <ContextWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route element={<ProtectedRoutesUser />}>
              <Route
                index
                path="/"
                element={
                  <>
                    <BreadCrumb />
                    <FileterSection />
                    <ToggleView />
                  </>
                }
              />
              <Route path="/training/:id" element={<Training />} />
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/training/create"
                  element={
                    <>
                      <BreadCrumb />
                      <CreateTrainingEvent />
                    </>
                  }
                />
                <Route
                  path="/training/:id/edit"
                  element={
                    <>
                      <BreadCrumb />
                      <CreateTrainingEvent />
                    </>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextWrapper>
    </div>
  );
}

export default App;
