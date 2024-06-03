import React, { useState } from "react";
import Header from "../components/UI/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api/http";
import CharacterCard from "../components/UI/Characters/CharacterCard";

export default function CharactersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["characters", currentPage],
    queryFn: fetchCharacters,
  });

  const charactersPerPage = 6;
  const totalPages = Math.ceil(data?.length / charactersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderCharacterCards = () => {
    const startIndex = (currentPage - 1) * charactersPerPage;
    const endIndex = startIndex + charactersPerPage;
    const charactersToDisplay = data?.slice(startIndex, endIndex);

    return charactersToDisplay?.map((character) => (
      <CharacterCard key={character} character={character} />
    ));
  };

  return (
    <main>
      <Header />
      <h1>Characters</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}
      {data && (
        <div>
          {renderCharacterCards()}
          <div className="flex justify-center gap-2 m-5">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className="btn btn-primary"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
