import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-900/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/30 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-20 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to scale <span className="text-gradient">your digital presence?</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
            Join the forward-thinking companies that trust us to build their most critical digital products. Let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact" className="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20">
              Get an Estimate
            </a>
            <a href="mailto:hello@synapse.design" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
              hello@synapse.design
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
