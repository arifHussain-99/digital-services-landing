import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Decades of cumulative team experience.',
  'Agile methodology for rapid delivery.',
  'Transparent communication and reporting.',
  'Dedicated post-launch support and maintenance.',
  'Award-winning design philosophy.',
  'Focus on measurable business outcomes.'
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 glass">
              {/* Abstract decorative elements to simulate a UI */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="pl-6 pt-16 pr-6 pb-6 h-[400px] flex flex-col gap-4">
                <div className="w-3/4 h-8 bg-white/10 rounded-md animate-pulse"></div>
                <div className="w-full h-4 bg-white/5 rounded-md mt-4"></div>
                <div className="w-5/6 h-4 bg-white/5 rounded-md"></div>
                <div className="w-full h-4 bg-white/5 rounded-md"></div>
                
                <div className="grid grid-cols-2 gap-4 mt-8 flex-1">
                  <div className="bg-brand-500/20 rounded-xl border border-brand-500/30 flex items-center justify-center text-brand-400 font-medium">
                    +150% Growth
                  </div>
                  <div className="bg-purple-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center text-purple-400 font-medium">
                    99.9% Uptime
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border-brand-500/20 bg-brand-900/40 hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
              <div className="text-4xl font-extrabold text-white mb-1">50+</div>
              <div className="text-sm font-medium text-brand-300">Projects Delivered successfully</div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Why Partner With Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More than just an agency. We're your <span className="text-gradient">strategic partner.</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              In a crowded digital landscape, execution is everything. We combine deep technical expertise with strategic design thinking to build products that don't just look good, but solve real business problems and scale effortlessly.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={20} />
                  <span className="text-zinc-300 leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
