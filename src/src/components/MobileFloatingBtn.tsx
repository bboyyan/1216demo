import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MobileFloatingBtn() {
    return (
        <motion.div
            className="md:hidden fixed bottom-6 left-6 right-6 z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <motion.button
                className="w-full bg-rose-500 text-white py-4 rounded-full shadow-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Calendar size={18} />
                Book Appointment
            </motion.button>
        </motion.div>
    );
}
