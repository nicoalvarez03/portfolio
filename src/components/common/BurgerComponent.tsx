import {motion, AnimatePresence} from 'framer-motion';
import BurgerButton from './buttons/BurgerButton';

type Props = {
  isOpen: boolean;
  onClick: () => void;
  navItems: string[];
  onNavClick: (index: number) => void;
}

export default function BurgerComponent({ isOpen, onClick, navItems, onNavClick }: Props) {
       return (
        <div className="relative z-60">
          <button onClick={onClick} className="cursor-pointer z-70 relative">
            <BurgerButton isOpen={isOpen} />
          </button>
    
          <AnimatePresence>
            {isOpen && (
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="fixed top-0 right-0 w-full sm:w-60 min-h-screen bg-black/40 backdrop-blur-lg flex flex-col items-center sm:justify-center z-60"
            >
              <motion.ul
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-15 sm:mt-0 sm:absolute sm:right-3 sm:top-14 text-white p-6 flex flex-col items-center space-y-4 w-52"
              >
                {navItems.map((item, index) => (
                  <motion.li key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => onNavClick(index)}
                      className="text-white text-base hover:underline cursor-pointer"
                    >
                      {item}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
}