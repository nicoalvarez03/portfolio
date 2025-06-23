import {motion} from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            className="text-white py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <footer className="text-white py-4">
                <div className="container mx-auto text-center text-color">
                    <p>&copy; {new Date().getFullYear()} Nicolás Álvarez. Todos los derechos reservados.</p>
                    <p>Desarrollado con ❤️ usando React y Tailwind CSS</p>
                </div>
            </footer>
        </motion.footer>
    );
}