import { motion } from "framer-motion";
import Image from "../UI/Image";
import { Link } from "react-router-dom";

export default function EchoesCard({ echo, delay }) {
  return (
    <motion.div
      className="bg-base-300 shadow-lg rounded-lg p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
    >
      <h3 className="text-2xl font-bold text-center">{echo}</h3>
      <Image
        src="https://via.placeholder.com/150"
        alt="echo"
        className="w-1/2 mx-auto rounded-full p-6"
      />
      <div className="flex justify-center">
        <Link
          to={`/echoes/${echo}`}
          className="btn btn-primary text-primary-content m-4"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
