import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp } from "../common/arrows/ArrowUp";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false); // Estado para manejar el scroll

  // Efecto para detectar el scroll y actualizar el estado isScrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col text-white min-h-screen w-full">
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            key="scrollTopArrow"
            className="fixed bottom-5 right-8 z-50 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
            onClick={() => {
              const section = document.getElementById("inicio");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ArrowUp />
          </motion.a>
        )}
      </AnimatePresence>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
