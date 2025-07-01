import {motion} from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { Reveal } from '../Reveal';

type Props = {
    onClick?: () => void;
}


export const ArrowDown = ({onClick} : Props) => {
    return (
        <Reveal>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
                <button className='cursor-pointer' aria-label='Scroll hacia proyectos' onClick={onClick}>
                    <IoIosArrowDown className='w-8 h-8'/>
                </button>
            </motion.div>
        </Reveal>
        
    );
}