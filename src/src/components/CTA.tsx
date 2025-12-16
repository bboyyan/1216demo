import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <motion.div
            className="relative rounded-[30px] overflow-hidden bg-neutral-900 text-white min-h-[400px] flex flex-col md:flex-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
        >
            {/* Left Image */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <img
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
                    alt="Spa Atmosphere"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
            </div>

            {/* Right Text Content */}
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start relative z-10 bg-neutral-900 md:bg-transparent">
                <motion.span
                    className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Book Appointment
                </motion.span>
                <motion.h3
                    className="text-3xl md:text-5xl font-heading italic mb-6 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    Ready to start your <br />
                    transformation?
                </motion.h3>
                <motion.p
                    className="text-neutral-400 max-w-md mb-10 font-body text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    給自己一個下午的時間，享受一場身心靈的極致寵愛。名額有限，建議提前一週預約。
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 w-full"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        className="bg-white text-neutral-900 px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-rose-200 transition-colors text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Book Now
                    </motion.button>
                    <motion.button
                        className="border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}
