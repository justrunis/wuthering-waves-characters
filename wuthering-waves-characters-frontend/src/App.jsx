import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "./api/http";

import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import WeaponsPage from "./pages/WeaponsPage";
import CharacterPage from "./pages/CharacterPage";
import AttributesPage from "./pages/AttributesPage";
import AttributePage from "./pages/AttributePage";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/weapons" element={<WeaponsPage />} />
            <Route path="/characters/:character" element={<CharacterPage />} />
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
