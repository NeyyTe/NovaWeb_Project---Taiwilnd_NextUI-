import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage";
import LandingPage from "./pages/landingPage/LandingPage";
import ProfilPageSingular from "./pages/profilPageSingular/ProfilPageSingular";
import ProfilsPage from "./pages/profilsPage/ProfilsPage";
function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<LandingPage />} errorElement="" />
        <Route path="/profil" element={<ProfilsPage />}>
          <Route path="/profil/:id" element={<ProfilPageSingular />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
