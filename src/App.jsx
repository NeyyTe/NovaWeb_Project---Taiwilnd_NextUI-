import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "./pages/landingPage/LandingPage";
import ProfilePage from "./pages/landingPage/profilPage/ProfilePage";
function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        {/* ... */}
      </Routes>
    </NextUIProvider>
  );
}

export default App;
