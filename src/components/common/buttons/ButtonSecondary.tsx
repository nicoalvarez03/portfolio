import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface ButtonSecondaryProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: IconType;
}

export const ButtonSecondary = ({
  children,
  onClick,
  className = "",
  icon: IconComponent,
}: ButtonSecondaryProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded-xl border-1 flex items-center justify-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.05, backgroundColor: "#46466e", boxShadow: "0 0 10px 3px rgba(255, 255, 255, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
      {IconComponent && <IconComponent className="ml-2" />}
    </motion.button>
  );
};
