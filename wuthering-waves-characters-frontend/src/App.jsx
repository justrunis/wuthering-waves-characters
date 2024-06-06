import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "./api/http";

import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./pages/CharacterPage";
import WeaponsPage from "./pages/WeaponsPage";
import WeaponPage from "./pages/WeaponPage";
import WeaponDetailsPage from "./pages/WeaponDetailsPage";
import AttributesPage from "./pages/AttributesPage";
import AttributePage from "./pages/AttributePage";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />{" "}
            <Route path="/characters/:character" element={<CharacterPage />} />
            <Route path="/weapons" element={<WeaponsPage />} />
            <Route path="/weapons/:weapon" element={<WeaponPage />} />
            <Route
              path="/weapons/:weaponType/:weapon"
              element={<WeaponDetailsPage />}
            />
            <Route path="/attributes" element={<AttributesPage />} />
            <Route path="/attributes/:attribute" element={<AttributePage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
