import React from 'react';

export default function Contact() {
  return (
    // الخلفية السوداء مع الشبكة (Grid)
    <section 
      className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      
      {/* العناوين */}
      <div className="text-center mb-12 z-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          WE'D LOVE TO HEAR FROM YOU.
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Fill out the form below, and we'll get back to you shortly.
        </p>
      </div>

      {/* نموذج الاتصال (The Form Card) */}
      <div className="w-full max-w-md z-10 transition-transform duration-500 hover:-translate-y-1">
        <form className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl flex flex-col gap-6">
          
          {/* حقل الاسم */}
          <div className="relative group">
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Name"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/20"
            />
          </div>

          {/* حقل الإيميل */}
          <div className="relative group">
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Email"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/20"
            />
          </div>

          {/* حقل الرسالة */}
          <div className="relative group">
            <textarea 
              id="message" 
              name="message" 
              rows="4"
              placeholder="Message"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/20 resize-none"
            ></textarea>
          </div>

          {/* زر الإرسال */}
          <button 
            type="submit" 
            className="w-full bg-white text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 active:scale-95 transition-all duration-300 group mt-2"
          >
            <span>Submit</span>
            {/* أيقونة السهم */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>

        </form>
      </div>
    </section>
  );
}