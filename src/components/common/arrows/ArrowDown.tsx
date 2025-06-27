import {motion} from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { Reveal } from '../Reveal';


export const ArrowDown = () => {
    return (
        <Reveal>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
                <button className='cursor-pointer'>
                    <IoIosArrowDown className='w-8 h-8'/>
                </button>
            </motion.div>
        </Reveal>
        
    );
}