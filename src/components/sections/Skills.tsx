import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";
import { skillsData } from "../../data/data";
import SkillComponent from "../common/SkillComponent";

export default function Skills() {
  const frontendSkills = [
    "React",
    "Angular",
    "Astro",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Figma"
  ]; // Lista de habilidades frontend

  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Laravel",
    "PHP",
    "Python",
    "Cloudinary",
    "Java",
    "JWT"
  ]; // Lista de habilidades backend

  const toolsSkills = [
    "Git",
    "GitHub",
    "Terminal",
    "Visual Studio Code",
    "Wordpress",
  ]; // Lista de herramientas

  const learningSkills = [
    "Docker", 
    "Symfony", 
    "Next.js", 
    ".NET"
  ]; // Lista de habilidades que estás aprendiendo

  return (
    <section id="tecnologias" className="text-white mb-30">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <Reveal>
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tecnologías
          </motion.h2>
        </Reveal>
        <motion.div
          className="flex flex-col gap-5 mt-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Aquí puedes agregar tus habilidades como tarjetas o iconos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Reveal>
                <div className="relative rounded-xl overflow-hidden">
                  {/* Contenido tarjeta */}
                  <div className="relative z-10 bg-gradient-to-tl from-gray-800 to-gray-900 p-6 w-full min-h-[628px] max-w-xl flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-6">Frontend</h3>
                    <div className="flex flex-wrap gap-10 justify-center">
                      {skillsData
                        .filter((skill) => frontendSkills.includes(skill.title))
                        .map((skill, index) => (
                          <SkillComponent
                            key={index}
                            title={skill.title}
                            svg={skill.svg}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Animación de borde */}
                  {/* Contenedor para las líneas */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                    <motion.span
                      className="absolute top-0 left-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                    />
                    <motion.span
                      className="absolute top-0 right-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 right-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "100%" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 left-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "100%" }}
                      animate={{ y: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Reveal>
                <div className="relative rounded-xl overflow-hidden">
                  {/* Contenido tarjeta */}
                  <div className="relative z-10 bg-gradient-to-tl from-gray-800 to-gray-900 p-6 w-full min-h-[628px] max-w-xl flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-6">Backend</h3>
                    <div className="flex flex-wrap gap-10 justify-center">
                      {skillsData
                        .filter((skill) => backendSkills.includes(skill.title))
                        .map((skill, index) => (
                          <SkillComponent
                            key={index}
                            title={skill.title}
                            svg={skill.svg}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Animación de borde */}
                  {/* Contenedor para las líneas */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                    <motion.span
                      className="absolute top-0 left-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                    />
                    <motion.span
                      className="absolute top-0 right-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 right-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "100%" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 left-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "100%" }}
                      animate={{ y: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Reveal>
                <div className="relative rounded-xl overflow-hidden">
                  {/* Contenido tarjeta */}
                  <div className="relative z-10 bg-gradient-to-tl from-gray-800 to-gray-900 p-6 w-full min-h-[628px] max-w-xl flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-6">Herramientas</h3>
                    <div className="flex flex-wrap gap-10 justify-center">
                      {skillsData
                        .filter((skill) => toolsSkills.includes(skill.title))
                        .map((skill, index) => (
                          <SkillComponent
                            key={index}
                            title={skill.title}
                            svg={skill.svg}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Animación de borde */}
                  {/* Contenedor para las líneas */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                    <motion.span
                      className="absolute top-0 left-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                    />
                    <motion.span
                      className="absolute top-0 right-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 right-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "100%" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 left-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "100%" }}
                      animate={{ y: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", stiffness: 300, damping: 20 }}
            >
              <Reveal>
                <div className="relative rounded-xl overflow-hidden">
                  {/* Contenido tarjeta */}
                  <div className="relative z-10 bg-gradient-to-tl from-gray-800 to-gray-900 p-6 w-full min-h-[628px] max-w-xl flex flex-col items-center">
                    <h3 className="text-3xl font-semibold mb-6">Aprendiendo</h3>
                    <div className="flex flex-wrap gap-10 justify-center">
                      {skillsData
                        .filter((skill) => learningSkills.includes(skill.title))
                        .map((skill, index) => (
                          <SkillComponent
                            key={index}
                            title={skill.title}
                            svg={skill.svg}
                          />
                        ))}
                    </div>
                  </div>

                  {/* Animación de borde */}
                  {/* Contenedor para las líneas */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
                    <motion.span
                      className="absolute top-0 left-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                    />
                    <motion.span
                      className="absolute top-0 right-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 right-0 h-[1px] w-full bg-[#9191ee] rounded"
                      initial={{ x: "100%" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1.5,
                      }}
                    />
                    <motion.span
                      className="absolute bottom-0 left-0 w-[1px] h-full bg-[#9191ee] rounded"
                      initial={{ y: "100%" }}
                      animate={{ y: "-100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 2,
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
