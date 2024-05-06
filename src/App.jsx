import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "./pages/landingPage/LandingPage";
import ProfilsPage from "./pages/profilsPage/ProfilsPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ProfilPageSingular from "./pages/profilPageSingular/ProfilPageSingular";
function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<LandingPage />} errorElement="" />
        {/* <Route path="/profil" element={<ProfilsPage />} />
        <Route path="/profil/:id" element={<ProfilPageSingular />} /> */}
        <Route path="/profil" element={<ProfilsPage />}>
          <Route path="/profil/:id" element={<ProfilPageSingular />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
