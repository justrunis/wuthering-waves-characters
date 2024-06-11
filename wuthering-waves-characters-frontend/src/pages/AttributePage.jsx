import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { useParams } from "react-router-dom";
import { fetchAttribute } from "../api/http";
import { useQuery } from "@tanstack/react-query";
import constants from "../constants/constants";
import CharacterCard from "../components/Characters/CharacterCard";
import Pager from "../components/UI/Pager";
import { useState } from "react";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import ErrorIndicator from "../components/UI/ErrorIndicator";

export default function AttributePage() {
  const { attribute } = useParams();
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["attribute", { attribute }],
    queryFn: () => fetchAttribute({ attribute }),
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
      <h1
        className="text-3xl font-bold text-center mt-5"
        data-testid="attribute-title"
      >
        {attribute} characters
      </h1>
      <div className="flex flex-col items-center justify-center p-6">
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
        {data && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
            {currentCharacters.map((character, index) => (
              <CharacterCard
                key={character.name}
                character={character.name}
                delay={index * 0.2}
              />
            ))}
          </div>
        )}
        {currentCharacters.length >= charactersPerPage && (
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
