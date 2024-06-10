import ReactLoading from "react-loading";
import { motion } from "framer-motion";

export default function LoadingIndicator({
  text,
  containerClassName,
  ...props
}) {
  return (
    <div className={containerClassName}>
      <motion.h2
        className="text-2xl text-base-content m-5"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {text}
      </motion.h2>
      <ReactLoading {...props} />
    </div>
  );
}
