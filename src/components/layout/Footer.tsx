import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="text-white py-8 bg-black/40 backdrop-blur-lg shadow-lg z-40"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="text-center text-color flex flex-col gap-5 lg:flex-row items-center justify-between px-5 lg:px-30">
        <div className="mx-auto">
          <p>
            &copy; {new Date().getFullYear()} Nicolás Álvarez. Todos los
            derechos reservados.
          </p>
          <p>Desarrollado con ❤️ usando React, Tailwind CSS y Framer Motion</p>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/nicolas-alvarez-823489121/" target="_blank">
            <FaLinkedin className="inline-block mx-2 text-2xl hover:text-[#0077b5] transition-colors duration-300" />
          </a>
          <a href="https://github.com/nicoalvarez03?tab=repositories" target="_blank">
            <FaGithub className="inline-block mx-2 text-2xl hover:text-[#333] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
