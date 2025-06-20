import {motion} from 'framer-motion';
import Navbar from '../layout/Navbar.tsx';
import foto_nicolas_carnet from '../../assets/images/foto_nicolas_carnet.webp';

export default function Hero() {
    return (
        <section id="hero">
            <Navbar />
            <div className="flex items-center justify-center">
                <motion.div
                    className="text-white text-4xl font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    >
                    
                    <div className='flex items-center gap-10'>
                        <div>
                            <h1 className="mb-4">Hola, soy Nicolás Álvarez</h1>
                            <p className="text-lg">Desarrollador web Full Stack</p>
                        </div>
                        <div>
                            <img className='w-50 h-50 object-cover rounded-full' src={foto_nicolas_carnet} alt="foto carnet" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}