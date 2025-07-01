import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../common/Reveal";

// Variantes para el contenedor de las frases y palabras
const containerVariants = {
    hidden: {opacity: 1},
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delayChildren: i * 2,
            staggerChildren: 0.05,
        },
    }),
}

// Variantes para cada palabra
const word = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2 }
    }
}

const paragraphs = [`Hola, soy Nicolás Álvarez, desarrollador web fullstack con más de un año de experiencia y una gran pasión por la tecnología. Comencé en la programación gracias a los videojuegos, lo que me llevó a aprender C# y lógica desde una perspectiva creativa.`, `Actualmente, me especializo en el desarrollo de aplicaciones web modernas usando tecnologías como React, Node.js, php, TypeScript, MongoDB y herramientas como TailwindCSS, Cloudinary y JWT, entre otras. Disfruto combinar diseño y funcionalidad para crear soluciones digitales con impacto real.`, `Soy una persona proactiva, curiosa y comprometida con la mejora continua. Busco formar parte de una empresa con proyectos que me desafíen, me permitan seguir aprendiendo y aportar valor desde el primer día.`]

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="w-full flex justify-center mb-30">
      <div className="w-full max-w-[85%]">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          </Reveal>
            <AnimatePresence>
              {paragraphs.map((paragraph, pIndex) => (
                <Reveal key={pIndex}>
                <motion.p
                  variants={containerVariants}
                  custom={pIndex}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  className="text-lg leading-relaxed flex flex-wrap mb-4"
                >
                  {paragraph.split(" ").map((wordP, wIndex) => (
                    <motion.span
                      key={`${pIndex}-${wIndex}`}
                      variants={word}
                      className="inline-block mr-1"
                    >
                      {wordP}
                    </motion.span>
                  ))}
                </motion.p>
                </Reveal>
              ))}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
