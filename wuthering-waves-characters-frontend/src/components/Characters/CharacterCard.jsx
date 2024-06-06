import constants from "../../constants/constants";
import { Link } from "react-router-dom";
import Image from "../UI/Image";
import { motion } from "framer-motion";

export default function CharacterCard({ character, delay }) {
  const logoWidth = 250;
  const logoHeight = 250;
  return (
    <motion.div
      className="bg-secondary rounded-lg shadow-md p-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        stiffness: 100,
        delay: delay,
      }}
    >
      <h1 className="text-2xl font-bold text-center">{character}</h1>
      <Image
        src={constants.API_URL + "characters/" + character + "/icon"}
        alt={character + " icon"}
        width={logoWidth}
        height={logoHeight}
        className="inline p-2 border-4 rounded-full border-primary m-4"
      />
      <motion.div
        className="btn btn-primary mt-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to={`/characters/${character}`}>View Details</Link>
      </motion.div>
    </motion.div>
  );
}
