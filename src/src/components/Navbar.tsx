import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['The Brand', 'Treatments', 'Membership', 'Contact'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-heading font-bold text-white tracking-[0.15em] drop-shadow-sm z-50">
          LUMIÈRE <span className="text-rose-200 font-light italic">Spa</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex glass px-10 py-4 rounded-full space-x-10 items-center hover:bg-white/10 transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-medium text-white/90 hover:text-white transition-colors tracking-[0.2em] uppercase font-ui"
            >
              {item}
            </a>
          ))}
          <div className="w-px h-3 bg-white/20 mx-2"></div>
          <button className="text-white/90 text-xs font-bold hover:text-white transition-colors tracking-widest uppercase">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white z-50 relative p-2 bg-white/10 backdrop-blur rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-900/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-2xl font-heading text-white tracking-widest italic"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
