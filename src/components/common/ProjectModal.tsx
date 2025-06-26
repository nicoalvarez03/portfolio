import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";

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
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  images = [],
  description,
  tecnologies = [],
}: Props) {
  // Estado para el carrusel de imagenes
  const [current, setCurrent] = useState(0); // Se maneja el estado de la imagen actual

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    // Reiniciar el carrusel al abrir el modal
    if (isOpen) {
      setCurrent(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center z-50 px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/20 rounded-2xl max-w-7xl w-full min-h-[762px] max-h-[90vh] overflow-y-auto relative flex flex-col items-center gap-y-5 py-10 px-45 shadow-lg scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl cursor-pointer text-white hover:text-gray-400 transition-colors duration-200 flex items-center justify-center rounded-full p-2 hover:bg-gray-700/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose />
            </motion.button>

            <motion.h2 
              className="text-5xl text-white font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {title}
            </motion.h2>

            <div className="relative object-contain whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[current]}
                  src={images[current]}
                  alt={`Proyecto ${title} - Imagen ${current + 1}`}
                  className="w-full max-w-[1100px] h-110 rounded-xl object-cover shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Botón anterior */}
              <motion.button
                onClick={prev}
                className="absolute -left-20 top-1/2 text-white hover:text-gray-400 transition-colors duration-200 flex items-center justify-center rounded-full p-2 hover:bg-gray-700/50 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoIosArrowBack className="text-xl"/>
              </motion.button>

              {/* Botón siguiente */}
              <motion.button
                onClick={next}
                className="absolute -right-20 top-1/2 text-white hover:text-gray-400 transition-colors duration-200 flex items-center justify-center rounded-full p-2 hover:bg-gray-700/50 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoIosArrowForward className="text-xl"/>
              </motion.button>
            </div>

            <motion.div className="w-full max-w-7xl flex flex-col gap-y-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p className="text-white text-md">{description}</p>

              <div className="w-full flex flex-col gap-y-5">
                <h3 className="text-2xl font-semibold">Tecnologías utilizadas</h3>

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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
