import { motion } from "framer-motion";
import { type JSX } from "react";

interface ButtonPrimaryProps {
  children: string | JSX.Element;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const ButtonPrimary = ({
  children,
  onClick,
  className = "",
  type,
}: ButtonPrimaryProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`bg-[#9191ee] text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-[#46466e] transition-colors cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      type={type}
    >
      {children}
    </motion.button>
  );
};
