import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Synapse didn't just understand our vision; they elevated it. The complete digital transformation they delivered increased our user retention by 300%.",
    author: "Sarah Jenkins",
    role: "CTO, Finova Finance",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    quote: "Working with this team was a masterclass in agile delivery. The custom software solution they built is now the backbone of our daily operations.",
    author: "Michael Roberts",
    role: "Director of Ops, LogisticsPro",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    quote: "The design system and frontend overhaul completely changed how our customers interact with our product. Exceptional attention to detail.",
    author: "Elena Rodriguez",
    role: "Head of Product, SaaSly",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't just take our <span className="italic font-light">word</span> for it.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="text-brand-500/20 absolute top-6 right-6" size={60} />
              
              <div className="mb-8 relative z-10">
                <p className="text-lg text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-12 h-12 rounded-full border-2 border-brand-500/30 object-cover" 
                />
                <div>
                  <h4 className="text-white font-bold">{t.author}</h4>
                  <p className="text-sm text-brand-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
