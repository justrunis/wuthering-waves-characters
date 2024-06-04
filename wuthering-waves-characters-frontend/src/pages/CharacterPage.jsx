import Header from "../components/UI/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacter } from "../api/http";
import constants from "../constants/constants";
import { motion } from "framer-motion";
import LoadingIndicator from "../components/UI/LoadingIndicator";
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
            type="spin"
            color="#2563EB"
            text="Loading character..."
            containerClassName="flex flex-col gap-5 items-center justify-center text-primary-content h-screen"
          />
        )}
        {isError && <p className="text-center text-error">{error.message}</p>}
        {data && (
          <div className="container mx-auto mt-5 text-center bg-secondary text-neutral-content rounded-lg p-16 flex-grow">
            <motion.h1
              className="text-2xl font-bold mb-4 text-secondary-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.2 }}
            >
              {data.name}
            </motion.h1>
            <motion.p
              className="text-lg italic mb-4 text-secondary-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {data.quote}
            </motion.p>
            <motion.div className="flex lg:flex-row flex-col items-center justify-center gap-10">
              <Image
                src={`${constants.API_URL}characters/${character}/portrait`}
                alt="Character full"
                width={imgWidth}
                height={imgHeight}
              />
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col gap-2 text-lg text-secondary-content"
              >
                <motion.li
                  className="text-left"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Attribute: {data.attribute}
                </motion.li>
                <motion.li
                  className="text-left"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  Birthday: {data.birthday}
                </motion.li>
                <motion.li
                  className="text-left"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  Birthplace: {data.birthplace}
                </motion.li>
                <motion.li
                  className="text-left"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  Class: {data.class}
                </motion.li>
                <motion.li
                  className="text-left"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  Rarity: {data.rarity}
                </motion.li>
                <motion.li
                  className="text-left"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  Weapon: {data.weapon}
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        )}
      </motion.div>
    </main>
  );
}
