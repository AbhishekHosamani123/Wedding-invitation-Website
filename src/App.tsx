import React from "react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-foreground overflow-x-hidden font-body scroll-smooth">
      {/* FIXED VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      
      {/* DARK GRADIENT OVERLAY */}
      <div className="fixed inset-0 bg-background/80 z-0 mix-blend-multiply pointer-events-none" />

      {/* CONTENT ENVELOPE */}
      <div className="relative z-10">
        
        {/* NAVBAR */}
        <nav className="flex justify-between px-6 sm:px-8 py-6 max-w-7xl mx-auto items-center">
          <div
            className="text-2xl sm:text-3xl tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Abhishek U.H.
          </div>

          <div className="hidden md:flex gap-8 text-sm text-muted-foreground font-medium tracking-wide">
            <a href="#home" className="transition-colors hover:text-white">Home</a>
            <a href="#experience" className="transition-colors hover:text-white">Experience</a>
            <a href="#projects" className="transition-colors hover:text-white">Projects</a>
            <a href="#skills" className="transition-colors hover:text-white">Skills</a>
          </div>

          <a href="mailto:abhishekhosamani522@gmail.com" className="liquid-glass inline-flex rounded-full px-6 py-2.5 text-sm transition-transform hover:scale-[1.03]">
            Reach Out
          </a>
        </nav>

        {/* --- HERO SECTION --- */}
        <section id="home" className="flex flex-col items-center text-center px-6 pt-24 sm:pt-32 pb-32 sm:pb-40 min-h-[90vh] justify-center">
          <div className="inline-flex liquid-glass px-4 py-1.5 rounded-full text-xs font-semibold text-primary/80 mb-8 animate-fade-rise">
            Available for New Roles
          </div>
          <h1
            className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl animate-fade-rise-delay"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Architecting <em className="not-italic text-muted-foreground">Intelligence.</em>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 animate-fade-rise-delay-2 leading-relaxed">
            I'm an AI Engineer passionate about chatbot dev, automation, and full-stack solutions.
            Building intelligent tools for deep thinkers and bold creators.
          </p>

          <a href="#projects" className="liquid-glass rounded-full px-12 py-5 mt-12 animate-fade-rise-delay-2 transition-transform hover:scale-[1.03] text-lg">
            View My Work
          </a>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="px-6 py-24 max-w-5xl mx-auto border-t border-white/5">
          <h2 className="text-4xl sm:text-5xl mb-12 tracking-tight text-center" style={{ fontFamily: "var(--font-display)" }}>
            Professional Background
          </h2>
          
          <div className="flex flex-col gap-6">
            <div className="liquid-glass p-8 sm:p-10 rounded-3xl transition-all hover:bg-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-2xl font-medium">AI Engineer Intern</h3>
                <span className="text-muted-foreground text-sm mt-2 sm:mt-0 font-mono">Dec 2025 – Present</span>
              </div>
              <p className="text-primary/70 font-medium mb-6">Inera Software | Remote</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                <li>Developing AI-powered automation systems and LLM-based chatbots for structured generation.</li>
                <li>Designing backend data processing pipelines securely using SQL and Supabase (PostgreSQL).</li>
              </ul>
            </div>

            <div className="liquid-glass p-8 sm:p-10 rounded-3xl transition-all hover:bg-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-2xl font-medium">Data Science Intern</h3>
                <span className="text-muted-foreground text-sm mt-2 sm:mt-0 font-mono">Feb 2025 – Mar 2025</span>
              </div>
              <p className="text-primary/70 font-medium mb-6">Xcel Corp | Belagavi</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                <li>Built a Breast Cancer Prediction model mapping 92% accuracy, cleaning 10,000+ records.</li>
                <li>Applied precision feature engineering and evaluated ML metrics securely under real-world strains.</li>
              </ul>
            </div>

            <div className="liquid-glass p-8 sm:p-10 rounded-3xl transition-all hover:bg-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-2xl font-medium">Workshop Conductor</h3>
                <span className="text-muted-foreground text-sm mt-2 sm:mt-0 font-mono">Apr 2025</span>
              </div>
              <p className="text-primary/70 font-medium mb-6">NIIT | Gadag</p>
              <p className="text-muted-foreground">
                Conducted complex hands-on Data Analytics, Excel, and Power BI workshops for 120+ students, bridging textbook knowledge to applied practice.
              </p>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="px-6 py-24 max-w-6xl mx-auto border-t border-white/5">
          <h2 className="text-4xl sm:text-5xl mb-12 tracking-tight text-center" style={{ fontFamily: "var(--font-display)" }}>
            Featured Artifacts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="liquid-glass p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-all">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold">Valentine's Campaign</h3>
                <span className="liquid-glass px-3 py-1 rounded-full text-xs text-green-300">Revenue: ₹7,980</span>
              </div>
              <p className="text-muted-foreground mb-6">
                A highly-scalable deployed consumer site powered by Supabase/PostgreSQL yielding live transactions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">React</span>
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Supabase</span>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-all">
              <h3 className="text-2xl font-semibold mb-6">GitChat</h3>
              <p className="text-muted-foreground mb-6">
                An innovative AI app ingesting robust GitHub repositories and orchestrating summaries utilizing API RAG context windows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">LLM Integration</span>
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Data Ingestion</span>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-all">
              <h3 className="text-2xl font-semibold mb-6">Intelligent Chatbot</h3>
              <p className="text-muted-foreground mb-6">
                Context-aware AI bot utilizing intricate prompt layers, backend automation, and stateful architecture handling interactions perfectly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">OpenRouter</span>
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Agents</span>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-all">
              <h3 className="text-2xl font-semibold mb-6">Sarathi AI Agent</h3>
              <p className="text-muted-foreground mb-6">
                WhatsApp N8N RAG integration serving dynamic crop metrics predicting robust data yields off 500+ records via Scikit-Learn.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Python</span>
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">N8N</span>
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">WhatsApp API</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- SKILLS & EDUCATION --- */}
        <section id="skills" className="px-6 py-24 max-w-5xl mx-auto pb-40 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Skills */}
            <div>
              <h2 className="text-4xl sm:text-5xl mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Toolset
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">AI & Core</h4>
                  <div className="flex flex-wrap gap-2">
                    {["RAG", "Prompt Engineering", "N8N Automation", "OpenRouter", "LLM Integration"].map(s => (
                      <span key={s} className="liquid-glass px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Engineering</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "TypeScript", "SQL", "REST APIs", "Pandas", "Supabase", "React", "GCP"].map(s => (
                      <span key={s} className="liquid-glass px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-4xl sm:text-5xl mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Formation
              </h2>
              <div className="space-y-6">
                <div className="relative border-l border-white/10 pl-6 py-2 mx-1">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-4 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <h4 className="text-xl font-medium">BCA</h4>
                  <p className="text-primary/70 mb-2">Gogte College of Commerce (2026)</p>
                  <p className="text-sm text-muted-foreground">CGPA: 7.3</p>
                </div>
                
                <div className="relative border-l border-white/10 pl-6 py-2 mx-1">
                  <div className="absolute w-3 h-3 bg-white/30 rounded-full -left-[6.5px] top-4" />
                  <h4 className="text-xl font-medium">12th Commerce</h4>
                  <p className="text-primary/70 mb-2">Karnataka Board (2023)</p>
                  <p className="text-sm text-muted-foreground">91.33%</p>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">Certifications</h4>
                <ul className="space-y-2 text-primary/80">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Google Cloud Data Analytics</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Power BI Mastery</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> UI/UX Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-muted-foreground px-6 mt-20">
          <p>© 2026 Abhishek U. Hosamani. Engineered with absolute precision.</p>
        </footer>

      </div>
    </div>
  );
}
