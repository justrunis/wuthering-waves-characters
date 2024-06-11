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
import SearchBar from "../components/UI/SearchBar";

export default function CharactersPage() {
  const charactersPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    staleTime: constants.STALE_TIME,
  });

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;

  let currentCharacters = [];
  let totalPages = 0;

  if (data) {
    currentCharacters = data.characters.filter((character) =>
      character.toLowerCase().includes(searchQuery.toLowerCase())
    );

    totalPages = Math.ceil(data.characters.length / charactersPerPage);

    currentCharacters = currentCharacters.slice(
      indexOfFirstCharacter,
      indexOfLastCharacter
    );
  }

  function handleSearch(searchTerm) {
    setSearchQuery(searchTerm);
    setCurrentPage(1); // Reset to first page
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center p-6 flex-grow">
        <h1 className="text-3xl font-bold text-center">Characters</h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <SearchBar title="Search characters" handleSearch={handleSearch} />
        </div>
        {isLoading && (
          <LoadingIndicator
            text="Loading characters..."
            containerClassName="flex flex-col items-center justify-center m-5"
            className="m-5"
            width={50}
            height={50}
            color="gray"
          />
        )}
        {isError && (
          <ErrorIndicator
            title="An error occurred"
            message={error?.message || "Failed to fetch characters."}
          />
        )}
        {data && data?.characters && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-16 g-5 m-10">
            {currentCharacters.map((character, index) => (
              <CharacterCard
                key={character}
                character={character}
                delay={index * 0.2}
              />
            ))}
          </div>
        )}
        {totalPages > 1 && (
          <div className="flex justify-center m-5">
            <Pager
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
