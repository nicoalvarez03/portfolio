import {motion} from 'framer-motion';

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

    return(
        <header>
            <motion.nav
                className="pt-10 pb-15 flex justify-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.ul 
                    className="flex justify-between items-center w-full max-w-6xl px-4"
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
                    <motion.ul className='flex gap-10'>

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
                </motion.ul>
            </motion.nav>
        </header>
    );
}