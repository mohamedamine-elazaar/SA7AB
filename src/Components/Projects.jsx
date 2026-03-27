import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      desc: "A high-performance financial tracking system with real-time data visualization.",
      tags: ["React", "Tailwind", "D3.js"],
      image: "https://wallpapercave.com/wp/wp10475031.jpg"
    },
    {
      title: "AI Legal Assistant",
      category: "Machine Learning",
      desc: "Smart automation tool for analyzing legal documents using OpenAI's API.",
      tags: ["Python", "OpenAI", "Next.js"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "CloudFlow Infrastructure",
      category: "Cloud Solutions",
      desc: "Automated deployment pipeline for scalable enterprise-grade infrastructure.",
      tags: ["AWS", "Terraform", "Docker"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section 
      className="min-h-screen w-full bg-black py-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* العناوين */}
      <div className="max-w-6xl mx-auto mb-16 z-10 relative">
        <h3 className="text-gray-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4">
          OUR WORK
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Featured Projects
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>

      {/* قائمة المشاريع */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group cursor-pointer"
          >
            {/* حاوية الصورة مع تأثير Zoom */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 mb-6 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              {/* Overlay خفيف */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500"></div>
              
              {/* زر المعاينة يظهر عند الـ Hover */}
              <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white text-black p-3 rounded-full shadow-xl">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </div>
              </div>
            </div>

            {/* تفاصيل المشروع */}
            <div className="space-y-3">
              <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {project.desc}
              </p>
              
              {/* التاجات (Tags) */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* التوهج الخلفي (نفس الهوية) */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-purple-600/5 blur-[150px] rounded-full -z-10"></div>
    </section>
  );
}