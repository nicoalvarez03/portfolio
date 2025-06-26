import {motion} from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { Reveal } from '../Reveal';


export const ArrowDown = () => {
    return (
        <Reveal>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <button className='cursor-pointer'>
                    <IoIosArrowDown className='w-8 h-8'/>
                </button>
            </motion.div>
        </Reveal>
        
    );
}