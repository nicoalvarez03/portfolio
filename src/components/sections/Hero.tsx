import foto_nicolas_carnet from "../../assets/images/foto_nicolas_carnet.webp";
import { Reveal } from "../common/Reveal";

export default function Hero() {
  return (
    <section id="Inicio">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-10">
            <div>
                <Reveal>
                <h1 className="mb-4 text-5xl font-bold">
                    Hola, soy Nicolás Álvarez
                    <strong className="text-5xl text-[#9191ee]">.</strong>
                </h1>
                </Reveal>
                <Reveal>
                <p className="text-lg font-semibold">
                    Y soy{" "}
                    <strong className="text-3xl text-[#9191ee] font-bold">
                    Desarrollador Web Full Stack
                    </strong>
                </p>
                </Reveal>
            </div>
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
          <Reveal>
            <div className="w-150">
                <p>Gran motivación para seguir perfeccionando habilidades y crecer profesionalmente. Confío plenamente en mis capacidades como profesional. Através de mi experiencia en diferentes organizaciones he desarrollado amplías habilidades analíticas, de comunicación y excelente capacidad para trabajar en equipo.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
