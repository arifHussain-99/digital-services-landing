import { motion } from 'framer-motion';
import { Code2, Smartphone, Activity, Megaphone, Palette, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Activity className="text-brand-400" size={32} />,
    title: 'Web Development',
    description: 'High-performance, accessible, and scalable web applications built with modern frameworks.'
  },
  {
    icon: <Smartphone className="text-brand-400" size={32} />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that engage your users on any device.'
  },
  {
    icon: <Palette className="text-brand-400" size={32} />,
    title: 'UI/UX Design',
    description: 'User-centric interfaces that are visually stunning and incredibly intuitive.'
  },
  {
    icon: <Code2 className="text-brand-400" size={32} />,
    title: 'Custom Software',
    description: 'Bespoke software solutions tailored precisely to your unique business logic.'
  },
  {
    icon: <LineChart className="text-brand-400" size={32} />,
    title: 'SEO & Growth',
    description: 'Data-driven strategies to boost your visibility and accelerate business growth.'
  },
  {
    icon: <Megaphone className="text-brand-400" size={32} />,
    title: 'Digital Marketing',
    description: 'Targeted campaigns to connect with your audience and drive meaningful conversions.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-900/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Capabilities that drive <span className="text-gradient">results</span></h3>
          <p className="text-zinc-400 text-lg">
            We offer an end-to-end suite of services designed to help you build, launch, and scale successful digital products.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-100 transition-colors">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
