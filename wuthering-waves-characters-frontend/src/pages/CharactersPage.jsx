import React, { useState } from "react";
import Header from "../components/UI/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/http";
import CharacterCard from "../components/UI/Characters/CharacterCard";
import constants from "../constants/constants";

export default function CharactersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: fetchCharacters,
    staleTime: constants.STALE_TIME,
  });

  const charactersPerPage = 6;

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div
        className="flex flex-col items-center justify-center m-5"
        data-testid="characters-page"
      >
        <h1
          className="text-3xl font-bold text-center mt-5"
          data-testid="characters-title"
        >
          Characters
        </h1>
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-16 g-5">
          {data.characters.map((character) => (
            <CharacterCard key={character} character={character} />
          ))}
        </div>
      )}
    </main>
  );
}
