import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center font-bold text-white">
                S
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Synapse
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
              Designing and engineering digital experiences that drive growth and inspire users.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Mobile Applications</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Cloud Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-6">Company</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#work" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Blog</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-6">Legal</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-brand-400 transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {currentYear} Synapse Design Agency. All rights reserved.
          </p>
          <div className="text-zinc-600 text-sm flex items-center gap-1">
            Built with <span className="text-brand-500">♥</span> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
