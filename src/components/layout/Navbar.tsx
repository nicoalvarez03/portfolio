import {motion} from 'framer-motion';
import BurgerComponent from '../common/BurgerComponent';
import {useState, useEffect} from 'react';

const navbarVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
}

export default function Navbar() {
    const navItems = ['Inicio', 'Proyectos', 'Sobre mí', 'Tecnologias', 'Contacto']; // defino los elementos del navbar
    const sectionId = navItems.map(item => 
        item
            .toLowerCase()
            .replace(/ /g, '-') // reemplazo los espacios por guiones
            .normalize('NFD') // normalizo los caracteres acentuados
            .replace(/[\u0300-\u036f]/g, '') // elimino los caracteres acentuados
            .replace(/\s+/g, '')
        ); // transformo los elementos en ids válidos

    const [menuOpen, setMenuOpen] = useState(false); // estado para manejar el menú desplegable
    const [isScrolled, setIsScrolled] = useState(false); // estado para manejar el scroll


    const handleNavClick = (index: number) => {
        const section = document.getElementById(sectionId[index]);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Cierra el menú al hacer clic en un elemento
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // Cambia el estado si se ha hecho scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Limpia el evento al desmontar
        };
    })
    

    return(
        <header className={`w-full fixed top-0 left-0 transition-all duration-300 z-50 ${
            isScrolled ? 'bg-black/40 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
            <motion.nav
                className="pt-6 pb-4 w-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className='w-full max-w-6xl mx-auto px-4'>

                <motion.ul 
                    className="flex justify-between items-center w-full"
                    variants={navbarVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.li 
                        className="text-white text-lg font-semibold"
                        variants={itemVariants}
                    >
                        Nicolás Álvarez
                    </motion.li>
                    
                    {/* Menu de escritorio */}
                    <motion.ul className='hidden md:flex gap-10'>
                    {navItems.map((item, index) => (
                        <motion.li
                        key={index}
                        className="text-white text-lg cursor-pointer hover:text-gray-300"
                        variants={itemVariants}
                        onClick={() => {
                            const section = document.getElementById(sectionId[index]);
                            if(section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        >
                            {item}
                        </motion.li>
                    ))}
                    </motion.ul>

                    {/* Menu de movil */}
                    <div className='md:hidden'>
                        <BurgerComponent 
                            isOpen={menuOpen}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            navItems={navItems}
                            onNavClick={handleNavClick}
                        />
                    </div>
                </motion.ul>
                </div>
            </motion.nav>
        </header>
    );
}