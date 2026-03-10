import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-blue-500/80 to-cyan-500/80'
  },
  {
    title: 'Health AI Platform',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-emerald-500/80 to-teal-500/80'
  },
  {
    title: 'E-commerce App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-purple-500/80 to-pink-500/80'
  },
  {
    title: 'SaaS Analytics',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    color: 'from-orange-500/80 to-red-500/80'
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-brand-900/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proud to have built <span className="text-gradient">exceptional</span> products.
            </h3>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-white hover:text-brand-400 font-medium transition-colors group pb-1 border-b border-transparent hover:border-brand-400">
            View all projects <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              {/* Image background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-3xl font-bold tracking-tight">{project.title}</h4>
                    <div className="w-12 h-12 rounded-full bg-white text-zinc-900 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <a href="#" className="md:hidden mt-8 inline-flex items-center gap-2 text-white hover:text-brand-400 font-medium transition-colors group pb-1 border-b border-transparent hover:border-brand-400">
          View all projects <ArrowUpRight size={18} />
        </a>

      </div>
    </section>
  );
}
