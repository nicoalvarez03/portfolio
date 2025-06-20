import {motion} from 'framer-motion';

export default function Navbar() {
    return(
        <div>
            <motion.nav
                className="p-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex justify-between items-center py-5">
                    <div className="text-white text-lg font-semibold">
                        Nicolás Álvarez
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
                        <a href="#" className="text-gray-300 hover:text-white">Sobre mi</a>
                        <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
}