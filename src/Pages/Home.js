import { motion } from "framer-motion";
import "./../output.css";

const HomeComponent = () => {
  return (
    <motion.div
      initial={{ y: "108vh" }} // Starts from the right (100%)
      animate={{
        y: "8vh", // Ends at the initial position (0)
        transition: { duration: 0.5, type: "spring", ease: "easeInOut" },
      }}
      exit={{
        y: "-108vh", // Leaves to the bottom (100%)
        transition: { duration: 0.5, type: "spring" },
      }}
    >
      <h1 class="text-6xl font-bold">Home</h1>
    </motion.div>
  );
};

export default HomeComponent;
