import React, { useState } from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/http";
import CharacterCard from "../components/Characters/CharacterCard";
import constants from "../constants/constants";
import Pager from "../components/UI/Pager";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import ErrorIndicator from "../components/UI/ErrorIndicator";

export default function CharactersPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    staleTime: constants.STALE_TIME,
  });

  const charactersPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  let currentCharacters = [];
  let totalPages = 0;
  if (data) {
    currentCharacters = data.characters.slice(
      indexOfFirstCharacter,
      indexOfLastCharacter
    );
    totalPages = Math.ceil(data.characters.length / charactersPerPage);
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div
        className="flex flex-col items-center justify-center flex-1 p-6"
        data-testid="characters-page"
      >
        <h1
          className="text-3xl font-bold text-center mt-5"
          data-testid="characters-title"
        >
          Characters
        </h1>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <LoadingIndicator
            text="Loading characters..."
            containerClassName="flex flex-col items-center justify-center m-5"
            className="m-5"
            width={50}
            height={50}
            color="gray"
          />
        </div>
      )}
      {isError && (
        <ErrorIndicator
          title="An error occurred"
          message={error?.message || "Failed to fetch characters."}
        />
      )}
      {data && data?.characters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-16 g-5">
          {currentCharacters.map((character, index) => (
            <CharacterCard
              key={character}
              character={character}
              delay={index * 0.2}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center m-5">
        <Pager
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </main>
  );
}
