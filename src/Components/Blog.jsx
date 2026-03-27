import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: "Building AlMustashar: The Struggles Behind Saudi Arabia's Legal AI",
      excerpt: "How we overcame the challenges of building an AI legal assistant for all Saudi law — from Arabic NLP hurdles to earning user trust in a high-stakes domain.",
      author: "Sa7ab Team",
      date: "March 18, 2025"
    },
    {
      title: "Introducing Sa7ab: Our Journey and Vision",
      excerpt: "Thrilled to unveil the new Sa7ab portfolio at sa7ab.io. Building Sa7ab has been a journey of growth, creativity, and countless late-night coding sessions.",
      author: "Marouane Mezzi",
      date: "March 25, 2024"
    }
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
      {/* العناوين العلوية (نفس الـ Layout في الصورة) */}
      <div className="text-center mb-24 z-10 relative">
        <h3 className="text-gray-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">
          INSIGHTS
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Blog
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Thoughts on technology and building products.
        </p>
      </div>

      {/* قائمة المقالات (Post List) بنفس تنسيق الصورة */}
      <div className="max-w-4xl w-full mx-auto space-y-2 z-10 relative">
        {posts.map((post, index) => (
          <article 
            key={index}
            // التعديل الطفيف: إضافة تفاعل (Hover) للزر (Check with group class)
            className="group cursor-pointer border-b border-white/10 pb-16 last:border-0 hover:bg-white/[0.01] transition-all p-4 rounded-xl"
          >
            {/* عنوان المقال */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              {post.title}
            </h2>
            
            {/* الوصف (Excerpt) */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              {post.excerpt}
            </p>

            {/* تفاصيل الكاتب والتاريخ (نفس ترتيب الصورة) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="font-medium text-gray-300">{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              
              {/* التعديل الطفيف: سهم تفاعلي (يتحرك للأمام) */}
              <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300 text-sm">
                <span>Read Article</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-blue-500 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* التعديل الطفيف: التوهج الجانبي الموحد (Blue Glow) للحفاظ على الهوية */}
      <div className="absolute top-0 right-0 w-[400px] h-[700px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}