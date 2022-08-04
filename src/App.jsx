import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Training from "./Components/Training";
import ProtectedRoutesUser from "./ProtectedRoutesUser";
import ContextWrapper from "./Context";
import AllTraining from "./Components/AllTrainingEvent/AllTraining";
import AllTrainingTableView from "./Components/AllTrainingTable/AllTrainingTable";
import ToggleView from "./Components/ToggleView/ToggleView";
import FileterSection from "./Components/FilterSection/FilterSection";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
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
                    <Dashboard />
                    <FileterSection />
                    <ToggleView />
                  </>
                }
              />
              <Route path="/training" element={<AllTraining />} />
              <Route path="/trainingTable" element={<AllTrainingTableView />} />
              <Route path="/training/:id" element={<Training />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/training/create" element={<Training />} />
                <Route path="/training/:id/edit" element={<Training />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextWrapper>
    </div>
  );
}

export default App;
