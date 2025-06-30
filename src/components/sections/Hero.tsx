import foto_nicolas_carnet from "../../assets/images/foto_nicolas_carnet.webp";
import { motion } from "framer-motion";
import { ArrowDown } from "../common/arrows/ArrowDown";
import { ButtonSecondary } from "../common/buttons/ButtonSecondary";
import { Reveal } from "../common/Reveal";
import pdfEs from "../../PDFDownload/Currículum_Nicolas_Alvarez_Espanol.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="w-full min-h-[90vh] flex justify-center items-center px-4 my-10 md:my-20"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col mt-15 md:mt-0 md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center flex-col md:flex-row gap-10">
            <div className="flex justify-center">
              <Reveal>
                <div className="flex justify-center md:justify-start">
                  <img
                    className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 object-cover rounded-full"
                    src={foto_nicolas_carnet}
                    alt="foto carnet"
                  />
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <Reveal>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
                  Hola, soy Nicolás Álvarez
                  <strong className="text-[#9191ee]">.</strong>
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-lg sm:text-xl tracking-wide font-semibold">
                  Y soy{" "}
                  <strong className="text-2xl sm:text-3xl text-[#9191ee] font-bold">
                    Desarrollador Web Full Stack
                  </strong>
                </p>
              </Reveal>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Reveal>
              <div className="text-sm sm:text-base max-w-xl px-10 text-center md:max-w-3xl mx-auto md:mx-0">
                <p>
                  Gran motivación para seguir perfeccionando habilidades y
                  crecer profesionalmente. Confío plenamente en mis capacidades
                  como profesional. Através de mi experiencia en diferentes
                  organizaciones he desarrollado amplías habilidades analíticas,
                  de comunicación y excelente capacidad para trabajar en equipo.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2 mt-10">
              <Reveal>
                <ButtonSecondary
                  onClick={() => {
                    const section = document.getElementById("contacto");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-40 h-10 m-5"
                >
                  Contactame
                </ButtonSecondary>
              </Reveal>

              <Reveal>
                <ButtonSecondary className="w-50 h-10 m-5 gap-2">
                  <a
                    href={pdfEs}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Currículum_Nicolas_Alvarez_Espanol.pdf"
                    className="text-[12px]"
                  >
                    Descargar CV Español
                  </a>
                  <MdOutlineFileDownload />
                </ButtonSecondary>
              </Reveal>
            </div>
          </div>
          <div className="w-full flex justify-center mt-5">
            <div className="flex gap-8">
            <Reveal>
              <div
                className="w-20 h-20 flex justify-center items-center overflow-hidden"
              >
                <motion.a
                  href="https://www.linkedin.com/in/nicolas-alvarez-823489121/"
                  target="_blank"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <FaLinkedin className="w-[50px] h-[50px]" />
                </motion.a>
                </div>
              </Reveal>
              <Reveal>
                <div
                  className="w-20 h-20 flex justify-center items-center overflow-hidden"
                >
                <motion.a
                  href="https://github.com/nicoalvarez03?tab=repositories"
                  target="_blank"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <FaGithub className="w-[50px] h-[50px]" />
                </motion.a>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-20 md:mb-0 md:mt-20">
            <motion.a
              onClick={() => {
                const section = document.getElementById("proyectos");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <ArrowDown />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
