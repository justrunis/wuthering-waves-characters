import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Image from "../components/UI/Image";
import yangyangLogo from "../assets/yangyang.gif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse flex-grow lg:flex-row md:gap-28 gap-16"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0"
        >
          <h1 className="my-2 text-base-content font-bold text-2xl">
            Looks like you've found the doorway to the great nothing
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-2 text-base-content mb-5"
          >
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="btn btn-primary">
              Take me there!
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={yangyangLogo}
            alt="Yangyang logo"
            width={300}
            height={300}
            className="p-2 m-6 border-4 border-primary rounded-full"
          />
        </motion.div>
      </motion.div>
      <Footer />
    </main>
  );
}
