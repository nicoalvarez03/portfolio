import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ButtonSecondary } from "./buttons/ButtonSecondary";
import { FaGithub } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  description: string;
  tecnologies: {
    icon: IconType;
    title?: string;
  }[];
  repository: string;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  images = [],
  description,
  tecnologies = [],
  repository = "", // URL del repositorio de GitHub
}: Props) {
  // Estado para el carrusel de imagenes
  const [current, setCurrent] = useState(0); // Se maneja el estado de la imagen actual

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(); // Cerrar el modal al presionar Escape
      }
    };

    // Reiniciar el carrusel al abrir el modal
    if (isOpen) {
      setCurrent(0);
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto"; // Habilitar el scroll del body al cerrar el modal
      document.removeEventListener("keydown", handleKeyDown); // Limpiar el evento al cerrar el modal
    }

    return () => {
      document.body.style.overflow = "auto"; // Asegurarse de que el scroll se habilite al desmontar el componente
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center z-60 px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 rounded-2xl w-full max-w-3xl md:max-w-5xl lg:max-w-6xl min-h-[762px] max-h-[90vh] shadow-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-2 right-2 md:top-8 md:right-10 z-60 text-2xl cursor-pointer text-white hover:text-gray-400 transition-colors duration-200 flex items-center justify-center rounded-full p-2 hover:bg-gray-700/50 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <IoClose />
            </motion.button>

            <div className="overflow-y-auto max-h-[90vh] flex flex-col items-center gap-y-5 py-10 px-10 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl text-white font-bold mb-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {title}
              </motion.h2>

              <div className="w-full flex flex-col items-center gap-4 relative">
                {/* Imagen */}
                <div className="max-w-[90%] flex justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={images[current]}
                      src={images[current]}
                      alt={`Proyecto ${title} - Imagen ${current + 1}`}
                      className="w-full h-60 max-w-[500px] md:max-w-[700px] md:h-82 lg:max-w-[1100px] lg:h-110 rounded-xl object-cover"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Botones del carrusel */}
                <div className="flex justify-center items-center gap-10 mt-2 md:mt-0 md:block overflow-hidden">
                  {/* Botón anterior */}
                  <motion.button
                    onClick={prev}
                    className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 text-white hover:text-gray-400 transition-colors duration-200 flex items-center justify-center rounded-full p-2 hover:bg-gray-700/50 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <IoIosArrowBack className="text-2xl" />
                  </motion.button>

                  {/* Botón siguiente */}
                  <motion.button
                    onClick={next}
                    className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 text-white hover:text-gray-400 transition-colors duration-200 flex items-center justify-center rounded-full p-2 hover:bg-gray-700/50 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <IoIosArrowForward className="text-2xl" />
                  </motion.button>
                </div>
              </div>

              <motion.div
                className="w-full max-w-7xl flex flex-col gap-y-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <p className="text-white text-md">{description}</p>

                <div className="w-full flex flex-col gap-y-5">
                  <h3 className="text-2xl font-semibold">
                    Tecnologías utilizadas
                  </h3>

                  {tecnologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tecnologies.map((Tech, index) => (
                        <div
                          key={index}
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-md flex justify-center items-center"
                        >
                          <Tech.icon className="text-xl mr-2" />
                          {/* Si el icono tiene un nombre, mostrarlo */}
                          {Tech.title || "Tecnología"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold my-3">
                  Repositorio de github
                </h3>
                <ButtonSecondary className="flex gap-2 items-center">
                  <FaGithub />
                  <a href={repository} target="_blank">
                    Repositorio de github
                  </a>
                </ButtonSecondary>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
