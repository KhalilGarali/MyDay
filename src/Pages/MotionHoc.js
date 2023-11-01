//higher order component to add same functionality to each page

import { motion } from "framer-motion";

const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <motion.div
        initial={{ y: "100vh" }}
        animate={{
          y: "0",
          transition: { duration: 0.5, type: "spring" },
        }}
        exit={{
          y: "-100vh",
          transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
        }}
      >
        <Component />
      </motion.div>
    );
  };
};

export default MotionHoc;
