import { motion } from 'framer-motion';

const statsData = [
    {
        num: '1500+',
        title: 'Happy Clients',
        desc: '累積超過千位女性的見證，找回自信光采。',
    },
    {
        num: '98%',
        title: 'Satisfaction',
        desc: '幾近完美的滿意度，來自對細節的極致苛求。',
    },
    {
        num: '12',
        title: 'Years Experience',
        desc: '十年磨一劍，獨家研發的深層美胸手技。',
    },
];

export default function Stats() {
    return (
        <div className="mb-20 border-t border-neutral-200 pt-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <motion.span
                        className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-2 block"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Impact
                    </motion.span>
                    <motion.h3
                        className="text-4xl font-heading text-neutral-800"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Results that Speak
                    </motion.h3>
                </div>
                <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all">
                        View All Reviews
                    </button>
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t md:border-l border-neutral-200">
                {statsData.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="md:border-r border-b border-neutral-200 p-8 md:p-10 hover:bg-white transition-colors group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h4 className="text-5xl md:text-6xl font-body text-neutral-300 group-hover:text-rose-400 transition-colors mb-4">
                            {stat.num}
                        </h4>
                        <p className="text-neutral-900 font-bold tracking-widest uppercase text-xs mb-2">
                            {stat.title}
                        </p>
                        <p className="text-neutral-500 text-xs font-light leading-relaxed">
                            {stat.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Only Button */}
            <div className="mt-8 md:hidden text-center">
                <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all w-full">
                    View All Reviews
                </button>
            </div>
        </div>
    );
}
