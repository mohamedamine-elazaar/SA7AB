import React from 'react';

export default function Services() {
  const services = [
    { title: "AI & Machine Learning", desc: "Custom AI models and machine learning algorithms designed to automate complex tasks." },
    { title: "Cloud Infrastructure", desc: "Scalable, secure, and robust cloud architectures built on AWS, Azure, and Google Cloud." },
    { title: "Software Development", desc: "End-to-end custom software solutions from mobile apps to complex enterprise systems." },
    { title: "Data Engineering", desc: "Building scalable data pipelines and warehouses to turn your raw data into insights." },
    { title: "Security", desc: "Advanced cybersecurity protocols, penetration testing, and compliance-ready infrastructure." },
    { title: "Automation", desc: "Streamlining business processes with intelligent automation and custom workflow tools." },
  ];

  return (
    <section 
      className="min-h-screen w-full bg-black py-20 px-6 relative overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* العناوين العلوية */}
      <div className="text-center mb-16 z-10">
        <h3 className="text-gray-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4">
          WHAT WE DO
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Services
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Technology solutions tailored to your business goals.
        </p>
      </div>

      {/* شبكة الخدمات (Services Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full z-10">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-2xl transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1"
          >
            {/* أيقونة بسيطة أو تأثير بصري لكل بطاقة */}
            <div className="w-8 h-8 bg-white/10 rounded-lg mb-6 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 text-white font-bold">
              {index + 1}
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {service.title}
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              {service.desc}
            </p>

            {/* تأثير التوهج عند الـ Hover خلف كل بطاقة */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500 -z-10"></div>
          </div>
        ))}
      </div>

      {/* التوهج الكبير في الخلفية (نفس الـ Home) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}