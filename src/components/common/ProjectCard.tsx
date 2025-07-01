import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ButtonPrimary } from "./buttons/ButtonPrimary";
import type { IconType } from "react-icons";
import { useState, useEffect } from "react";

interface Props {
  image: string;
  title: string;
  tecnologies: {
    icon: IconType;
    title?: string;
  }[];
  onClick: () => void;
}

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

const overlayVariants = {
  initial: { opacity: 1 },
  hover: { opacity: 0 },
};

const buttonVariants = {
  initial: { opacity: 0, y: -10 },
  hover: { opacity: 1, y: 0 },
};

export default function ProyectCard({
  image,
  title,
  tecnologies,
  onClick,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = () => {
    if (isMobile) {
      setIsTapped((prev) => !prev);
    }
  };

  const animationState = isMobile && isTapped ? "hover" : "initial";

  return (
    <Reveal>
      <motion.div
        className="relative rounded-xl h-70 w-full overflow-hidden shrink-0 cursor-pointer"
        initial="initial"
        animate={animationState}
        whileHover={isMobile ? undefined : "hover"}
        onClick={handleCardClick}
      >
        <motion.img
          className="w-full h-full object-cover"
          src={image}
          alt={`Imagen del proyecto ${title}`}
          variants={imageVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col gap-5 items-center justify-center bg-black/80 backdrop-blur-sm z-20 text-4xl font-bold rounded-xl"
          variants={overlayVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Reveal>
            <span className="text-white text-3xl font-bold">{title}</span>
          </Reveal>
          <ul className="flex gap-2">
            {tecnologies?.map((Tech, index) => (
              <Reveal key={index}>
                <li className="text-white text-xl font-semibold">
                  <Tech.icon />
                </li>
              </Reveal>
            ))}
          </ul>
          {isMobile && (
            <Reveal>
              <span className="text-white text-sm font-semibold">
                Toca para ver más
              </span>
            </Reveal>
          )}
          
        </motion.div>

        <motion.div
          className="absolute top-6 right-4 z-30"
          variants={buttonVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ButtonPrimary onClick={onClick}>Ver más</ButtonPrimary>
        </motion.div>
        {isTapped && (
            <Reveal className="absolute bottom-5 right-5">
              <span className="text-black text-sm font-semibold">
                Toca nuevamente para cerrar
              </span>
            </Reveal>
          )}
      </motion.div>
    </Reveal>
  );
}
