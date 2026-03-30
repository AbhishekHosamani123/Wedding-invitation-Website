
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
        src="/wedding BG.mp4"
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
            Radha & Krishna
          </div>

          <div className="hidden md:flex gap-8 text-sm text-muted-foreground font-medium tracking-wide">
            <a href="#home" className="transition-colors hover:text-white">Home</a>
            <a href="#story" className="transition-colors hover:text-white">Our Story</a>
            <a href="#events" className="transition-colors hover:text-white">Events</a>
            <a href="#rsvp" className="transition-colors hover:text-white">RSVP</a>
          </div>

          <a href="#rsvp" className="liquid-glass inline-flex rounded-full px-6 py-2.5 text-sm transition-transform hover:scale-[1.03]">
            RSVP
          </a>
        </nav>

        {/* --- HERO SECTION --- */}
        <section id="home" className="flex flex-col items-center text-center px-6 pt-24 sm:pt-32 pb-32 sm:pb-40 min-h-[90vh] justify-center">
          <div className="inline-flex liquid-glass px-4 py-1.5 rounded-full text-xs font-semibold text-primary/80 mb-8 animate-fade-rise">
            Save The Date • 25th Nov 2026
          </div>
          <h1
            className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl animate-fade-rise-delay"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Celebrating <em className="not-italic text-muted-foreground">Love.</em>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 animate-fade-rise-delay-2 leading-relaxed">
            We invite you to share our joy as we embark on a new journey together. Join us for a beautiful celebration of love, laughter, and happily ever after.
          </p>

          <a href="#events" className="liquid-glass rounded-full px-12 py-5 mt-12 animate-fade-rise-delay-2 transition-transform hover:scale-[1.03] text-lg">
            View Details
          </a>
        </section>

        {/* --- STORY SECTION --- */}
        <section id="story" className="px-6 py-24 max-w-5xl mx-auto border-t border-white/5">
          <h2 className="text-4xl sm:text-5xl mb-12 tracking-tight text-center" style={{ fontFamily: "var(--font-display)" }}>
            Our Journey
          </h2>
          
          <div className="flex flex-col gap-6">
            <div className="liquid-glass p-8 sm:p-10 rounded-3xl transition-all hover:bg-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-2xl font-medium">How We Met</h3>
                <span className="text-muted-foreground text-sm mt-2 sm:mt-0 font-mono">June 2021</span>
              </div>
              <p className="text-primary/70 font-medium mb-6">A Chance Encounter</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                <li>It all started with a cup of coffee and a shared love for the monsoon rain.</li>
                <li>What began as a simple conversation turned into endless chats and unforgettable memories.</li>
              </ul>
            </div>

            <div className="liquid-glass p-8 sm:p-10 rounded-3xl transition-all hover:bg-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-2xl font-medium">The Proposal</h3>
                <span className="text-muted-foreground text-sm mt-2 sm:mt-0 font-mono">Feb 2025</span>
              </div>
              <p className="text-primary/70 font-medium mb-6">A Beautiful Promise</p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-3">
                <li>Under a starlit sky, a promise was made to be together forever.</li>
                <li>Followed by joyous celebrations with our closest family and friends.</li>
              </ul>
            </div>
            
            <div className="liquid-glass p-8 sm:p-10 rounded-3xl transition-all hover:bg-white/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-2xl font-medium">The Wedding</h3>
                <span className="text-muted-foreground text-sm mt-2 sm:mt-0 font-mono">Nov 2026</span>
              </div>
              <p className="text-primary/70 font-medium mb-6">Happily Ever After</p>
              <p className="text-muted-foreground">
                We are thrilled to celebrate our big day with all of you and create memories that will last a lifetime.
              </p>
            </div>
          </div>
        </section>

        {/* --- EVENTS SECTION --- */}
        <section id="events" className="px-6 py-24 max-w-6xl mx-auto border-t border-white/5">
          <h2 className="text-4xl sm:text-5xl mb-12 tracking-tight text-center" style={{ fontFamily: "var(--font-display)" }}>
            Wedding Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="liquid-glass p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-all">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold">Haldi & Mehendi</h3>
                <span className="liquid-glass px-3 py-1 rounded-full text-xs text-yellow-300">23rd Nov, 10:00 AM</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Join us for a vibrant morning filled with colors, music, and the beautiful application of henna.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Dress Code: Yellow/Green</span>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-all">
              <h3 className="text-2xl font-semibold mb-6">Sangeet Night</h3>
              <p className="text-muted-foreground mb-6">
                An evening of dazzling performances, dancing, and heartfelt celebrations. Wear your dancing shoes!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">24th Nov, 7:00 PM</span>
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Dress Code: Glamorous</span>
              </div>
            </div>

            <div className="liquid-glass p-8 rounded-3xl group cursor-pointer hover:bg-white/5 transition-all md:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold">The Wedding Ceremony</h3>
                <span className="liquid-glass px-3 py-1 rounded-full text-xs text-red-300">25th Nov, 12:00 PM</span>
              </div>
              <p className="text-muted-foreground mb-6">
                The auspicious moment when we take our vows and step into our new life together, followed by a grand reception.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Dress Code: Traditional Indian</span>
                <span className="text-xs text-primary/60 border border-white/10 px-3 py-1 rounded-full">Venue: The Grand Palace, Belagavi</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- RSVP SECTION --- */}
        <section id="rsvp" className="px-6 py-24 max-w-5xl mx-auto pb-40 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Details */}
            <div>
              <h2 className="text-4xl sm:text-5xl mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Join Us
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  We can't wait to celebrate our special day with you! Please let us know if you'll be able to make it so we can prepare for your arrival.
                </p>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Important Dates</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="liquid-glass px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">RSVP by Oct 15th, 2026</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Contact Us</h4>
                  <p className="text-sm text-primary/80">
                    For any queries regarding travel or accommodation:<br/>
                    <a href="mailto:contact@radhakrishna.wedding" className="text-white hover:underline mt-1 inline-block">contact@radhakrishna.wedding</a><br/>
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            {/* RSVP Form/Action */}
            <div className="flex flex-col justify-center">
              <div className="liquid-glass p-8 rounded-3xl">
                <h3 className="text-2xl font-medium mb-6">Are you attending?</h3>
                <div className="flex flex-col gap-4">
                  <button className="bg-white text-black font-semibold rounded-full px-6 py-3 transition-transform hover:scale-[1.02]">
                    Yes, I'll be there!
                  </button>
                  <button className="border border-white/20 text-white rounded-full px-6 py-3 transition-transform hover:scale-[1.02] hover:bg-white/5">
                    Sorry, I can't make it
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-6 text-center">
                  * A formal invitation follows to your address.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-muted-foreground px-6 mt-20">
          <p>© 2026 Radha & Krishna. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
