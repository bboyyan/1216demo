import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[100vh] md:h-[900px] flex flex-col justify-center md:justify-start md:pt-40 px-6 md:px-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                    alt="Sensual Spa Mood"
                    className="w-full h-full object-cover brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mt-0 md:mt-20">
                {/* Tagline */}
                <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className="h-[1px] w-12 bg-rose-300/60"></div>
                    <span className="text-rose-200 text-xs tracking-[0.3em] uppercase font-light">
                        Exclusive Care for Ladies
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="text-5xl md:text-8xl font-body font-light text-white leading-[1.1] mb-8 mix-blend-overlay opacity-90"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                >
                    Awaken Your <br />
                    <span className="font-heading italic text-rose-100/90 font-normal">
                        Inner Beauty
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-neutral-200 text-lg md:text-xl max-w-lg mb-12 font-light tracking-wide leading-relaxed font-body"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    專為亞洲女性量身打造的極致美胸工藝。
                    <br />
                    透過深層經絡與法式芳療，重塑自信曲線。
                </motion.p>

                {/* Desktop Floating Booking Bar */}
                <motion.div
                    className="hidden md:flex absolute -bottom-24 left-16 right-16 glass-light p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] justify-between items-center max-w-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                    <div className="flex-1 px-8 py-5 group cursor-pointer border-r border-neutral-200/50">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">
                            Treatment
                        </div>
                        <div className="text-neutral-800 font-heading text-lg italic group-hover:text-rose-500 transition-colors">
                            Full Body & Bust Care
                        </div>
                    </div>
                    <div className="flex-1 px-8 py-5 group cursor-pointer border-r border-neutral-200/50">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">
                            Location
                        </div>
                        <div className="text-neutral-800 font-heading text-lg italic group-hover:text-rose-500 transition-colors">
                            Taipei Flagship
                        </div>
                    </div>
                    <div className="flex-1 px-8 py-5 group cursor-pointer">
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">
                            Date
                        </div>
                        <div className="text-neutral-800 font-heading text-lg italic group-hover:text-rose-500 transition-colors">
                            Select a Date
                        </div>
                    </div>
                    <motion.button
                        className="bg-neutral-900 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.05, backgroundColor: '#FB7185' }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
