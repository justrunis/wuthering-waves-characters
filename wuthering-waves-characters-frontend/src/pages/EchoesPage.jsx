import Header from "../components/UI/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchEchoes } from "../api/http";
import constants from "../constants/constants";
import Pager from "../components/UI/Pager";
import { useState } from "react";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import EchoesCard from "../components/Echoes/EchoesCard";

export default function EchoesPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["echoes"],
    queryFn: fetchEchoes,
    staleTime: constants.STALE_TIME,
  });

  const echoesPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastEcho = currentPage * echoesPerPage;
  const indexOfFirstEcho = indexOfLastEcho - echoesPerPage;

  let currentEchoes = [];
  let totalPages = 0;
  if (data) {
    currentEchoes = data.echoes.slice(indexOfFirstEcho, indexOfLastEcho);
    totalPages = Math.ceil(data.echoes.length / echoesPerPage);
  }

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
          Echoes
        </h1>
      </div>
      {isLoading && (
        <LoadingIndicator
          text="Loading echoes..."
          type="spin"
          color="#000"
          height={50}
          width={50}
        />
      )}
      {isError && <p>{error.message}</p>}
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-16 g-5">
          {currentEchoes.map((echo, index) => (
            <EchoesCard key={echo} echo={echo} delay={index * 0.1} />
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <Pager
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
}
