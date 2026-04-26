import { useEffect, useState } from "react";
import Loader from "./Component/Loader";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Component/Pages/HomePage";
import AboutPage from "./Component/Pages/AboutPage";
import PortfolioPage from "./Component/Pages/PortfolioPage";
import HackathonPage from "./Component/Pages/HackathonPage";
import ContactPage from "./Component/Pages/ContactPage";
import AppLayout from "./Component/UI/AppLayout";
import ProjectDetails from "./Component/UI/ProjectDetails";
import HackathonDetails from "./Component/UI/HackathonDetails";
import ReceipPrivacyPolicy from "./Component/Pages/ReceipPrivacyPolicy";
import Redirect from "./Component/Redirect";

function App() {
  const [hide, setHide] = useState(false);

  useEffect(function () {
    setTimeout(() => {
      setHide(true);
    }, 700);
  }, []);

  return (
    <>
      <Loader hide={hide} />
      {hide && (
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="protfolio" element={<PortfolioPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="hackathon" element={<HackathonPage/>} />
              <Route
                path="ReceipAppPrivacyPolicy"
                element={<ReceipPrivacyPolicy />}
              />
            </Route>
            <Route path="protfolio/:id" element={<ProjectDetails />} />
            <Route path="hackathon/:id" element={<HackathonDetails />} />
            <Route path=":platform" element={<Redirect />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
