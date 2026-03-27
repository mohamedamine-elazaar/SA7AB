import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// TerminalCard 
const TerminalCard = ({ title, code, language, children, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
    className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-blue-500/30 w-full"
  >
    <div className="bg-white/5 border-b border-white/10 px-4 py-2.5 flex items-center gap-2">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
      </div>
      <span className="text-gray-500 text-[10px] font-mono ml-2 uppercase tracking-widest">{title}</span>
    </div>
    <div className="p-4 font-mono text-xs md:text-sm">
      {code ? (
        <SyntaxHighlighter language={language} style={atomDark} customStyle={{ background: 'transparent', padding: '0', margin: '0' }}>
          {code}
        </SyntaxHighlighter>
      ) : children}
    </div>
  </motion.div>
);

// TrustedBy 
const TrustedBy = () => {
  const logos = [
    { name: "Ghirass", url: "https://sa7absites.b-cdn.net/sa7ab.io/partners/Asset%204.png" },
    { name: "Amazon Web Services", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "bakhurji", url: "https://sa7absites.b-cdn.net/sa7ab.io/partners/bakhurji.png" },
    { name: "Fiduciare", url: "https://sa7absites.b-cdn.net/sa7ab.io/partners/fiduciare.png" },
    { name: "NALS", url: "https://sa7absites.b-cdn.net/sa7ab.io/partners/nalslogo.png" },
  ];
  
 
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isDragging) {
      const moveBy = -0.6; 
      let nextX = x.get() + moveBy;
      if (nextX <= -1500) nextX = 0; 
      x.set(nextX);
    }
  });

  return (
    <section className="py-24 border-y border-white/5 bg-black/20 overflow-hidden relative cursor-grab active:cursor-grabbing">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-gray-500 text-[10px] tracking-[0.4em] uppercase">Trusted By Innovative Teams</p>
      </div>

      <div className="relative flex items-center">
       
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -2500, right: 2500 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 select-none">
              <img src={logo.url} alt={logo.name} className="h-7 md:h-9 w-auto object-contain filter invert brightness-200 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Home 
export default function Home() {
  const sentence = "We build software that scales your business.";
  const letters = Array.from(sentence);

  return (
    <div className="bg-black w-full min-h-screen">
      {/* (Hero) */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
        
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-6 z-10">
          TECHNOLOGY SOLUTIONS
        </motion.h3>

        <motion.h1 className="max-w-5xl text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8 z-10 perspective-[1000px]">
  {sentence.split(" ").map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap">
      {Array.from(word).map((letter, letterIndex) => {
        // Delay
        const globalIndex = sentence.split(" ").slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0) + letterIndex;
        
        return (
          <motion.span
            key={letterIndex}
            initial={{ opacity: 0, rotateX: -90, y: 20 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ 
              delay: 1.8 + globalIndex * 0.03, 
              type: "spring", 
              damping: 12 
            }}
            className={`inline-block ${globalIndex > 33 ? "text-gray-500 italic" : ""}`}
          >
            {letter}
          </motion.span>
        );
      })}
      
      <span className="inline-block">&nbsp;</span>
    </span>
  ))}
</motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.5, duration: 0.8 }} className="z-10 flex flex-col items-center">
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10">From AI-powered automation to cloud infrastructure, we deliver technology solutions that drive results.</p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 flex items-center gap-2 group transition-all">
              View Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all">Get In Touch</button>
          </div>
        </motion.div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* (Trusted By) */}
      <TrustedBy />

      {/* (Terminal Section) */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <TerminalCard title="terminal — deploy" delay={0.2} language="bash" code={`~/$ sa7ab npm run deploy\n> Building application...\n> Optimizing assets...\n> Deploying to AWS...\n> Deployed successfully!`} />
          </div>
          <div className="md:col-span-4">
            <TerminalCard title="ai-model.py" delay={0.4} language="python" code={`from openai import OpenAI\n\nclass LegalAdvisor:\n  def __init__(self):\n    self.client = OpenAI()\n\nasync def analyze(self, query):\n  # Deep analysis...`} />
          </div>
          <div className="md:col-span-4 space-y-6">
            <TerminalCard title="terminal — security" delay={0.6} language="bash" code={`~/$ sa7ab security scan\n[*] Initializing scan...\n[+] SSL/TLS Check: OK\n[+] Firewall Rules: ACTIVE\n[+] Vulnerability Scan: 0 issues`} />
            <TerminalCard title="AI Assistant" delay={0.8}>
              <div className="space-y-4 py-2">
                <div className="flex items-start gap-2 text-left">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0" />
                  <p className="text-gray-400 text-[11px] bg-white/5 p-2 rounded-lg">What are my rights under Saudi labor law?</p>
                </div>
                <div className="flex items-start gap-2 justify-end text-right">
                  <p className="text-white text-[11px] bg-blue-600 p-2 rounded-lg text-left">Under Saudi Labor Law: <br/> 1. End-of-service benefits...</p>
                  <div className="w-5 h-5 rounded-full bg-gray-600 flex-shrink-0" />
                </div>
              </div>
            </TerminalCard>
          </div>
        </div>
      </section>
    </div>
  );
}
