import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
};

export default function BurgerButton({ isOpen }: Props) {
  const commonProps = {
    stroke: "#ffffff",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
  };

  return (
    <motion.svg
      width={40}
      height={40}
      viewBox={"0 0 24 24"}
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <motion.path
        {...commonProps}
        d="M4 6L20 6"
        initial={{ opacity: 1 }}
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        whileTap={{ scale: 0.9 }} // 🔥 animación de rebote al tocar
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
      <motion.path
        {...commonProps}
        d="M4 12L20 12"
        initial={{ opacity: 1 }}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        {...commonProps}
        d="M4 18L20 18"
        initial={{ opacity: 1 }}
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.svg>
  );
}
