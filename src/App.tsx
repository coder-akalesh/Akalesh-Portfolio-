import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code2, 
  Terminal,
  Download,
  Linkedin,
  Github,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, CERTIFICATIONS, EDUCATION } from './constants';

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle?: string, icon: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-[2px] bg-blue-500 rounded-full"></div>
      <span className="text-[11px] font-black text-blue-400 uppercase tracking-[0.3em]">{subtitle || "Section"}</span>
    </div>
    <div className="flex items-center gap-5">
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
        {title}
      </h2>
      <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-xl text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
        <Icon size={24} />
      </div>
    </div>
  </div>
);

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2.5 py-1 bg-[#F1F3F5] text-[#495057] text-[11px] font-mono font-medium rounded border border-[#E9ECEF] hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default">
    {children}
  </span>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Overview', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Credentials', href: '#credentials' },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#010B13]/90 backdrop-blur-md border-b border-[#1E293B] py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-mono text-sm font-bold">AK</div>
            <span className="text-sm font-bold text-white uppercase tracking-widest hidden sm:block">Portfolio_v2.1</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="px-4 py-2 text-[11px] font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="w-px h-4 bg-slate-800 mx-4"></div>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-2 bg-blue-600 text-white rounded text-[11px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 z-40 bg-[#0B0E14] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold text-white uppercase tracking-tighter"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-4 bg-blue-600 text-white rounded-lg text-center font-bold uppercase tracking-widest"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-blue-600"></span>
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-[0.3em]">system.Debug("Akalesh Kumar");</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {PERSONAL_INFO.subtitle.split('|').map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#0A1929] border border-[#1E293B] rounded text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {tag.trim()}
                  </span>
                ))}
              </div>

              <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-xl font-medium">
                {PERSONAL_INFO.summary}
              </p>
              
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-blue-600 text-white rounded font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all flex items-center gap-3 group shadow-lg shadow-blue-600/20">
                    Get in touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-[#0A1929] text-white border border-[#1E293B] rounded font-bold uppercase tracking-widest text-xs hover:bg-[#0D1E31] transition-all flex items-center gap-3">
                    <Download size={14} /> CV.pdf
                  </button>
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><Linkedin size={18} /></a>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="bg-[#0A1929] border border-[#1E293B] p-1 rounded shadow-xl">
                <div className="bg-[#010B13] p-8 rounded text-white font-mono text-[11px] leading-relaxed">
                  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
                    <span className="ml-2 text-white/40">developer_profile.cls</span>
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-[#F97583]">public class</span> <span className="text-[#B392F0]">AkaleshPortfolio</span> &#123;</p>
                    <p className="pl-4"><span className="text-[#F97583]">String</span> name = <span className="text-[#9ECBFF]">"{PERSONAL_INFO.name}"</span>;</p>
                    <p className="pl-4"><span className="text-[#F97583]">String</span> role = <span className="text-[#9ECBFF]">"Salesforce Developer"</span>;</p>
                    <p className="pl-4"><span className="text-[#F97583]">List&lt;String&gt;</span> skills = <span className="text-[#F97583]">new</span> <span className="text-[#B392F0]">List&lt;String&gt;</span>&#123;</p>
                    <p className="pl-8 text-[#9ECBFF]">"FSL", "Service Cloud", "Sales Cloud", "Apex", "LWC"</p>
                    <p className="pl-4">&#125;;</p>
                    <p className="pl-4"><span className="text-[#F97583]">Decimal</span> exp = <span className="text-[#79C0FF]">2.5</span>;</p>
                    <p className="pl-4"><span className="text-[#6A737D]">/* Debug Profile */</span></p>
                    <p className="pl-4"><span className="text-[#B392F0]">system.Debug</span>(<span className="text-[#9ECBFF]">"Akalesh Kumar"</span>);</p>
                    <p>&#125;</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionHeader title="Technical Stack" subtitle="Capabilities" icon={Cpu} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E293B] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            {SKILLS.map((category) => (
              <div key={category.category} className="bg-[#0A1929] p-8 hover:bg-[#0D1E31] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-sm font-black text-blue-400 uppercase tracking-[0.25em] group-hover:text-blue-300 transition-colors">{category.category}</h3>
                  <div className="p-2 bg-blue-500/5 rounded-lg text-slate-600 group-hover:text-blue-500 transition-colors">
                    <Terminal size={16} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-[#010B13] text-slate-400 text-[11px] font-mono font-medium rounded-md border border-[#1E293B] hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/5 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <SectionHeader title="Work History" subtitle="Experience" icon={Briefcase} />
          <div className="space-y-px bg-[#1E293B] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="bg-[#0A1929] p-8 md:p-12 group hover:bg-[#0D1E31] transition-all duration-300">
                <div className="grid md:grid-cols-12 gap-10">
                  <div className="md:col-span-4">
                    <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest mb-4">
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase group-hover:text-blue-400 transition-colors">{exp.company}</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black text-slate-500 uppercase tracking-widest border border-[#1E293B] px-3 py-1 rounded-full bg-[#010B13]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h4 className="text-xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                      {exp.role}
                    </h4>
                    <ul className="space-y-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-5 text-slate-400 text-sm leading-relaxed group/item">
                          <ChevronRight size={16} className="text-blue-600 mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span className="group-hover/item:text-slate-300 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section id="credentials" className="mb-32">
          <div className="grid md:grid-cols-2 gap-px bg-[#1E293B] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="bg-[#0A1929] p-10 md:p-12">
              <SectionHeader title="Certifications" subtitle="Verified" icon={Award} />
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between p-5 bg-[#010B13] border border-[#1E293B] rounded-xl hover:border-blue-500/50 transition-all group">
                    <span className="text-sm font-black text-slate-300 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{cert.name}</span>
                    <div className="p-2 bg-blue-500/5 rounded-lg text-slate-600 group-hover:text-blue-500 transition-colors">
                      <Award size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A1929] p-10 md:p-12 border-t md:border-t-0 md:border-l border-[#1E293B]">
              <SectionHeader title="Education" subtitle="Academic" icon={BookOpen} />
              <div className="space-y-10">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="relative pl-8 border-l-2 border-blue-600/20 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#0A1929] border-2 border-blue-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <div className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest mb-2">{edu.year}</div>
                    <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wide">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-blue-600 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">Ready to optimize your <span className="text-slate-900">Salesforce</span> ecosystem?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Currently accepting new projects and full-time opportunities. Let's discuss how I can add value to your team.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-10 py-5 bg-slate-900 text-white rounded font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl shadow-black/20"
              >
                Start a Conversation
              </a>
              <div className="flex items-center gap-6 px-8 py-5 border border-white/20 rounded">
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Direct Line</span>
                  <span className="text-sm font-mono font-bold text-white">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 border-t border-[#1E293B]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-mono text-[10px] font-bold">AK</div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">© 2026 Akalesh Kumar</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Overview</a>
            <a href="#skills" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Stack</a>
            <a href="#experience" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">History</a>
          </div>

          <div className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
            Built_with_React_v19.0
          </div>
        </div>
      </footer>
    </div>
  );
}
