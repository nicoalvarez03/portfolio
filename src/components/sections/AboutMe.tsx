import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../common/Reveal";

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

const word = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
}

const paragraphs = [`Hola, soy Nicolás Álvarez, desarrollador web fullstack con una gran pasión por la tecnología y la creación de soluciones digitales. Mi camino en la programación comenzó hace más de cinco años, motivado por la curiosidad y el entusiasmo por los videojuegos, lo que me llevó a aprender C# y a introducirme en el desarrollo orientado a objetos y la lógica de programación desde una perspectiva creativa.`, `Con el tiempo, descubrí en el desarrollo web un espacio donde podía combinar la creatividad con la funcionalidad para construir productos reales que impactan directamente en las personas. Actualmente, me especializo en tecnologías modernas como JavaScript, TypeScript, React, Node.js, Express y bases de datos como MongoDB. También tengo experiencia en el uso de herramientas como TailwindCSS, Cloudinary y la implementación de autenticación con JWT.`, `Soy una persona proactiva, curiosa y con una fuerte motivación por seguir aprendiendo. Me esfuerzo constantemente por mejorar mis habilidades técnicas y mantenerme al día con las mejores prácticas de la industria. Disfruto trabajar en equipo, colaborar en entornos ágiles y enfrentar nuevos desafíos que me permitan crecer tanto profesional como personalmente.`, `Estoy buscando una oportunidad en la que pueda aportar valor desde el primer día, seguir aprendiendo junto a otros profesionales y contribuir al desarrollo de productos innovadores que marquen la diferencia.`]

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[85%]">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          </Reveal>
            <AnimatePresence>
              {paragraphs.map((paragraph, pIndex) => (
                <Reveal>
                <motion.p
                  key={pIndex}
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
