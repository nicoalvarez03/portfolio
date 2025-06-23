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

    const navItems = ['Inicio', 'Proyectos', 'Sobre mí', 'Contacto'];

    return(
        <header>
            <motion.nav
                className="py-8 flex justify-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.ul 
                    className="container flex justify-between"
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
                        >
                            <a href={`/${item.split(' ')}`}>{item}</a>
                        </motion.li>
                    ))}
                    </motion.ul>
                </motion.ul>
            </motion.nav>
        </header>
    );
}