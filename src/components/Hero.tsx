import {motion} from 'framer-motion';

export default function Hero() {
    return (
        <motion.div
            initial ={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center mt-20'
        >
            <h1 className='text-4xl font-bold text-gray-800'>Hola, soy Nicolás</h1>
            <p className='text-lg text-gray-500 mt-2'>Desarrollador web Full Stack</p>
        </motion.div>
    );
}