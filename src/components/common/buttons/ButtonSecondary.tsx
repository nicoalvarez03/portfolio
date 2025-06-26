import { motion } from "framer-motion";
import { type JSX } from "react";

interface ButtonSecondaryProps {
  children: string | JSX.Element;
  onClick?: () => void;
  className?: string;
}

export const ButtonSecondary = ({
  children,
  onClick,
  className = "",
}: ButtonSecondaryProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded-full border-1 flex items-center justify-center hover:bg-[#46466e] cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.button>
  );
};
