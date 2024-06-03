import { Link } from "react-router-dom";
import Header from "../components/UI/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center flex-1 bg-secondary"
      >
        <h1 className="text-3xl font-bold text-center">
          Welcome to the Genshin Characters App
        </h1>
        <p className="text-xl text-center">
          Get to know all the characters from the game Genshin Impact here!
        </p>
        <div className="flex flex-col sm:flex-row gap-5 m-5">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-36 h-16 btn btn-primary"
          >
            <Link to="/characters" className="text-2xl font-bold">
              Characters
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center w-36 h-16 btn btn-primary"
          >
            <Link to="/artifacts" className="text-2xl font-bold">
              Artifacts
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center w-36 h-16 btn btn-primary"
          >
            <Link to="/weapons" className="text-2xl font-bold">
              Weapons
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center w-36 h-16 btn btn-primary"
          >
            <Link to="/bosses" className="text-2xl font-bold">
              Bosses
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}