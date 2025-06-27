import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../common/Reveal";

const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const word = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
}

const paragraph = `Hola, soy Nicolás Álvarez, desarrollador web fullstack junior con sólidos conocimientos en tecnologías modernas como React, TailwindCSS, Node.js y MongoDB. Me especializo en construir aplicaciones web completas, optimizadas y con una interfaz atractiva y funcional. A lo largo de mi formación desarrollé proyectos reales como AirNoBnb, una plataforma de gestión de alojamientos similar a Airbnb, donde implementé desde la autenticación con JWT, subida de imágenes con Cloudinary, hasta la creación de un backend RESTful y un frontend responsivo con animaciones fluidas usando Framer Motion. Me caracterizo por ser proactivo, autodidacta y con una gran atención al detalle. Estoy en búsqueda de oportunidades donde pueda aportar valor desde el primer día, seguir creciendo profesionalmente y trabajar en equipo en entornos ágiles.`;

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[85%]">
        <div className="flex flex-col justify-center">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          </Reveal>
          <Reveal>
            <AnimatePresence>
            <motion.p
                variants={containerVariants}
                className="text-lg leading-relaxed flex flex-wrap"
                initial="hidden"
                whileInView={"visible"}
                viewport={{once: true, amount: 0.6}}
            >
              {paragraph.split(" ").map((wordText, i) => (
                <motion.span
                    key={i}
                    variants={word}
                    className="inline-block mr-1"
                >
                    {wordText}
                </motion.span>
              ))}
            </motion.p>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
