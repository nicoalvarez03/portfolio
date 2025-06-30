import ProjectCard from "../common/ProjectCard";
import ProjectModal from "../common/ProjectModal";
import { Reveal } from "../common/Reveal";
import {useState} from "react";
import { projectsData } from "../../data/data";


export default function Proyects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | typeof projectsData[0]>(null);

  return (
    <section id="proyectos" className="w-full flex justify-center mb-30">
        <div className="mb-10 w-full max-w-6xl px-4">
          <Reveal className="flex justify-center">
              <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                image={project.images[0].src}
                title={project.title}
                tecnologies={project.tecnologies.map((tech, index) => ({
                  icon: tech.icon,
                  key: index
                }))}

                onClick={() => {
                  setSelectedProject(project);
                  setModalOpen(true);
                }}
              />
            ))}
          </div>

          <ProjectModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title={selectedProject?.title || ""}
            images={selectedProject?.images.map(img => img.src) || []}
            description={selectedProject?.description || ""}
            tecnologies={selectedProject?.tecnologies.map((tech, index) => ({
              icon: tech.icon,
              key: index,
              title: tech.title
            })) || []}
            repository={selectedProject?.repository || ""}         
            />
        </div>
    </section>
    
  );
}
