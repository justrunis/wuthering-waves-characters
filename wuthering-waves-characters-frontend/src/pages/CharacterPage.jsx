import Header from "../components/UI/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../api/http";
import constants from "../constants/constants";
import { motion } from "framer-motion";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import ErrorIndicator from "../components/UI/ErrorIndicator";
import Image from "../components/UI/Image";

export default function CharacterPage() {
  const { character } = useParams();

  const imgWidth = 400;
  const imgHeight = 200;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["character", { character: character }],
    queryFn: () => fetchCharacter({ character: character }),
    staleTime: constants.STALE_TIME,
  });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        className="shadow-xl rounded-lg flex-grow"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isLoading && (
          <LoadingIndicator
            text="Loading character..."
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
            message={error?.message || "Failed to fetch character."}
          />
        )}
        {data && (
          <div className="container mx-auto mt-5 text-center bg-secondary text-neutral-content rounded-lg flex-grow">
            <div className="card-body flex flex-row gap-5">
              <div className="stats shadow w-full flex flex-col text-center">
                <div className="stat p-4 flex-1 gap-2">
                  <div className="stat-value text-center sm:text-left text-sm md:text-3xl">
                    {data.name}
                  </div>
                  <div className="stat-title text-center sm:text-left break-words text-xs sm:text-sm md:text-base">
                    {data.quote}
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body flex flex-col lg:flex-row gap-5">
              <div className="stats shadow w-full flex flex-col text-center">
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left text-sm md:text-md">
                    Attribute
                  </div>
                  <div className="stat-value text-center sm:text-left text-xl md:text-3xl">
                    {data.attribute}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left text-sm md:text-md">
                    Birthday
                  </div>
                  <div className="stat-value text-center sm:text-left text-xl md:text-3xl">
                    {data.birthday}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left text-sm md:text-md">
                    Birthplace
                  </div>
                  <div className="stat-value text-center sm:text-left text-xl md:text-3xl">
                    {data.birthplace}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left text-sm md:text-md">
                    Class
                  </div>
                  <div className="stat-value text-center sm:text-left text-xl md:text-3xl">
                    {data.class}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left text-sm md:text-md">
                    Rarity
                  </div>
                  <div className="stat-value text-center sm:text-left text-xl md:text-3xl">
                    {"⭐".repeat(data.rarity)}
                  </div>
                </div>
                <div className="stat p-4 flex-1">
                  <div className="stat-title text-center sm:text-left text-sm md:text-md">
                    Weapon
                  </div>
                  <div className="stat-value text-center sm:text-left text-xl md:text-3xl">
                    {data.weapon}
                  </div>
                </div>
              </div>
              <Image
                src={`${constants.API_URL}characters/${character}/portrait`}
                alt="Character full"
                width={imgWidth}
                height={imgHeight}
                className="shadow-lg border-4 border-primary rounded-full"
              />
            </div>
            <motion.div className="flex lg:flex-row flex-col items-center justify-center gap-10"></motion.div>
          </div>
        )}
      </motion.div>
    </main>
  );
}
