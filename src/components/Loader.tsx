import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[999]"
    >
      <motion.h1
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="text-5xl font-bold text-cyan-400"
      >
        Sadaf.
      </motion.h1>
    </motion.div>
  );
};

export default Loader;