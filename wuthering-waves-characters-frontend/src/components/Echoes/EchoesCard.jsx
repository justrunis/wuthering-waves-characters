import { motion } from "framer-motion";
import Image from "../UI/Image";
import { Link } from "react-router-dom";

export default function EchoesCard({ echo, delay }) {
  return (
    <motion.div
      className="bg-secondary rounded-lg shadow-md p-8 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
    >
      <h3 className="text-2xl font-bold text-center">{echo}</h3>
      <Image
        src="https://via.placeholder.com/200"
        alt="echo"
        height={200}
        width={200}
        className="w-full mx-auto rounded-full p-6"
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
