import { Link } from "react-router-dom";
import Header from "../components/UI/Header";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import Image from "../components/UI/Image";
import yangyangLogo from "../assets/yangyang.gif";

export default function Home() {
  const imageWidth = 400;
  const imageHeight = 200;

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center flex-1 p-6"
      >
        <img
          src={logo}
          alt="logo"
          width={imageWidth}
          height={imageHeight}
          className="p-2 m-6"
        />
        <h1 className="text-3xl font-bold text-center">
          Welcome to the Wuthering Waves Characters App
        </h1>
        <p className="text-xl text-center">
          Get to know all the characters from the game Wuthering Waves here!
        </p>
        <Image
          src={yangyangLogo}
          alt="yangyang logo"
          width={200}
          height={200}
          className="p-2 m-6 border-4 border-primary rounded-full"
        />
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
            <Link to="/attributes" className="text-2xl font-bold">
              Attributes
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
            <Link to="/echoes" className="text-2xl font-bold">
              Echoes
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
