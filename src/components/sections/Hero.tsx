import foto_nicolas_carnet from "../../assets/images/foto_nicolas_carnet.webp";
import {motion} from "framer-motion";
import { ArrowDown } from "../common/arrows/ArrowDown";
import { ButtonSecondary } from "../common/buttons/ButtonSecondary";
import { Reveal } from "../common/Reveal";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto min-h-[85vh]">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-10">
          <div className="flex justify-center">
            <Reveal>
              <div>
                <img
                  className="w-50 h-50 object-cover rounded-full"
                  src={foto_nicolas_carnet}
                  alt="foto carnet"
                />
              </div>
            </Reveal>
          </div>
            <div>
                <Reveal>
                <h1 className="mb-4 text-6xl tracking-wide font-bold">
                    Hola, soy Nicolás Álvarez
                    <strong className="text-6xl text-[#9191ee]">.</strong>
                </h1>
                </Reveal>
                <Reveal>
                <p className="text-xl tracking-widest font-semibold">
                    Y soy{" "}
                    <strong className="text-4xl text-[#9191ee] font-bold">
                    Desarrollador Web Full Stack
                    </strong>
                </p>
                </Reveal>
            </div>
          </div>
          <div className="flex justify-end">
          <Reveal>
            <div className="w-190">
                <p>Gran motivación para seguir perfeccionando habilidades y crecer profesionalmente. Confío plenamente en mis capacidades como profesional. Através de mi experiencia en diferentes organizaciones he desarrollado amplías habilidades analíticas, de comunicación y excelente capacidad para trabajar en equipo.</p>
            </div>
          </Reveal>
          </div>
          
          <div className="flex justify-center items-center mt-20">
            <Reveal>
              <div className="w-50 h-12 flex justify-center items-center">
                <ButtonSecondary onClick={() => {
                  const section = document.getElementById("inicio");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }} 
                className="w-40 h-10" >
                  Contactame
                </ButtonSecondary>
              </div>
            </Reveal>
          </div>
          <div className="flex justify-center mt-30">
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
