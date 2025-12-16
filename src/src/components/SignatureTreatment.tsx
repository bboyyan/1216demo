import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

const treatmentFeatures = [
    '疏通乳腺堆積',
    '改善副乳問題',
    '提升胸型輪廓',
    '產後恢復彈性',
];

export default function SignatureTreatment() {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-24 mb-32">
            {/* Text Section (Left) */}
            <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                    Signature Treatment
                </span>
                <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6 leading-tight">
                    Deep Tissue <br />
                    <span className="italic text-neutral-400">& Meridian Massage</span>
                </h2>
                <p className="text-neutral-500 text-lg leading-loose font-light mb-8 font-body">
                    這不只是一次按摩，而是一場深度的排毒旅程。針對腋下淋巴、乳腺與胸大肌進行深層疏通，有效改善氣血循環，提升胸部彈性與緊實度。
                </p>

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                    {treatmentFeatures.map((item, idx) => (
                        <motion.li
                            key={idx}
                            className="flex items-center gap-3 text-neutral-600 font-body text-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                            {item}
                        </motion.li>
                    ))}
                </ul>

                <motion.button
                    className="px-8 py-3 border border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all text-sm tracking-widest uppercase"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    View Treatment Menu
                </motion.button>
            </motion.div>

            {/* Image Section (Right) */}
            <motion.div
                className="w-full lg:w-1/2 relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative h-[400px] md:h-[550px] w-full rounded-full overflow-hidden border border-neutral-200 p-4">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative">
                        <img
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                            alt="Massage Treatment"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-neutral-900/10"></div>
                    </div>
                </div>

                {/* Floating Label */}
                <motion.div
                    className="absolute top-10 left-0 bg-white/90 backdrop-blur py-3 px-6 rounded-full shadow-lg flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Droplets size={16} className="text-rose-400" />
                    <span className="text-xs font-bold tracking-widest uppercase">
                        Essential Oil
                    </span>
                </motion.div>
            </motion.div>
        </div>
    );
}
