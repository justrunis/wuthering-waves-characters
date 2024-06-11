import { Link } from "react-router-dom";
import Image from "../UI/Image";
import constants from "../../constants/constants";
import { motion } from "framer-motion";

export default function AttributesCard({ attribute, delay }) {
  const attributeImage = "https://via.placeholder.com/200"; // `${constants.API_URL}attributes/${attribute}/icon`;

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
      <h1 className="text-2xl font-bold text-center">{attribute}</h1>
      <Image
        src={attributeImage}
        alt={attribute + " icon"}
        width={200}
        height={200}
        className="m-4 rounded-full"
      />
      <div>
        <Link to={`/attributes/${attribute}`} className="btn btn-primary mt-2">
          View Characters
        </Link>
      </div>
    </motion.div>
  );
}
