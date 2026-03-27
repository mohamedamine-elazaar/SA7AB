import React from 'react';

export default function About() {
  const stats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Projects Completed", value: "150+" },
    { label: "Global Clients", value: "40+" },
    { label: "Awards Won", value: "12" },
  ];

  return (
    <section 
      className="min-h-screen w-full bg-black py-24 px-6 relative overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* الجزء العلوي: القصة أو المهمة */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        <div className="space-y-8">
          <div>
            <h3 className="text-gray-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4">
              ABOUT OUR STUDIO
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              We are a team of <br />
              <span className="text-blue-500">innovators</span> & <br />
              <span>problem solvers.</span>
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Our mission is to bridge the gap between complex technology and business growth. 
            We don't just write code; we build the digital foundation that allows your 
            vision to scale globally.
          </p>

          <div className="flex gap-6 pt-4">
            <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all">
              Our Vision
            </button>
            <button className="border border-white/20 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all">
              Meet The Team
            </button>
          </div>
        </div>

        {/* الجزء الأيمن: بطاقة الإحصائيات (The Distinction) */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-blue-500/50 transition-all duration-500"
            >
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                {stat.value}
              </span>
              <span className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* الجزء السفلي: النص التعريفي الإضافي */}
      <div className="max-w-4xl w-full mt-32 text-center z-10">
        <div className="bg-gradient-to-r from-transparent via-white/10 to-transparent h-[1px] w-full mb-16"></div>
        <p className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
          "Technology is best when it brings people together and solves real-world challenges."
        </p>
      </div>

      {/* التوهج الخلفي (نفس الهوية البصرية) */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}