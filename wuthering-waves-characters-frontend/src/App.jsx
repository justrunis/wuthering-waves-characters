import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "./api/http";

import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import WeaponsPage from "./pages/WeaponsPage";
import CharacterPage from "./pages/CharacterPage";

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
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
