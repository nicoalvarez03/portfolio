import { motion } from "framer-motion";

export const ArrowUp = () => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      <button className="cursor-pointer">
        <img
          src="images/svg/arrowUp.svg"
          alt="ArrowUp"
          width={40}
          height={40}
        />
      </button>
    </motion.div>
  );
};
