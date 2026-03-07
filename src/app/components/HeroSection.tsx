import { motion } from 'motion/react';
import { FloatingElement } from './FloatingElement';
// import Snowfall from 'react-snowfall'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://imgs.search.brave.com/9kJAEjHfvCU0cf73hPMdush78DkImswESOHFYu9-3l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjE1/OTUxMC5qcGc')`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118]/80 via-[#1a0b2e]/70 to-[#0f0520]/80" />

      {/* Ambient light effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div 
          className="absolute bottom-20 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" 
          style={{ animationDelay: '1s' }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" 
          style={{ animationDelay: '2s' }} 
        />
        {/* <Snowfall color='#ffc0cb'/> */}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] hidden md:block" />

      {/* Floating 3D elements */}
      <div className="hidden md:block">
        <FloatingElement
          delay={0}
          className="absolute top-[15%] left-[10%] w-40 h-52 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-[0_8px_32px_0_rgba(139,92,246,0.2)]"
          style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)' }}
        >
          <div className="w-full h-full p-4 flex flex-col gap-2">
            <div className="w-full h-3 bg-purple-400/30 rounded-full" />
            <div className="w-3/4 h-3 bg-cyan-400/30 rounded-full" />
            <div className="flex-1 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg mt-2" />
          </div>
        </FloatingElement>

        <FloatingElement
          delay={0.5}
          className="absolute top-[25%] right-[15%] w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl shadow-[0_8px_32px_0_rgba(34,211,238,0.2)]"
          style={{ transform: 'perspective(1000px) rotateY(15deg) rotateX(-10deg)' }}
        >
          <div className="w-full h-full p-4">
            <div className="w-full h-full border-2 border-dashed border-cyan-400/40 rounded-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-purple-400/40 rounded-full" />
            </div>
          </div>
        </FloatingElement>

        <FloatingElement
          delay={1}
          className="absolute bottom-[20%] left-[15%] w-36 h-44 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20 rounded-2xl shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]"
          style={{ transform: 'perspective(1000px) rotateY(10deg) rotateX(15deg)' }}
        >
          <div className="w-full h-full p-3 flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-blue-400/30 rounded" />
              <div className="w-6 h-6 bg-purple-400/30 rounded" />
              <div className="w-6 h-6 bg-cyan-400/30 rounded" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg" />
          </div>
        </FloatingElement>

        <FloatingElement
          delay={1.5}
          className="absolute bottom-[15%] right-[12%] w-52 h-32 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl shadow-[0_8px_32px_0_rgba(139,92,246,0.2)]"
          style={{ transform: 'perspective(1000px) rotateY(-10deg) rotateX(-15deg)' }}
        >
          <div className="w-full h-full p-4 flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400/40 to-cyan-400/40 rounded-lg" />
            <div className="flex-1 flex flex-col gap-2">
              <div className="w-full h-2 bg-purple-400/30 rounded-full" />
              <div className="w-2/3 h-2 bg-cyan-400/30 rounded-full" />
              <div className="w-4/5 h-2 bg-blue-400/30 rounded-full" />
            </div>
          </div>
        </FloatingElement>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        />

        
        <motion.div
          role="heading"
          aria-level={1}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-bold antialiased tracking-tight"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.05em',
            fontWeight: 700,
            /* clamp(min, preferred, max)
               Scales smoothly from 36px on mobile → caps at 80px on wide screens.
               No breakpoint jumps — perfectly fluid. */
            fontSize: 'clamp(2.25rem, 6vw, 5rem)',
          }}
        >
          <span
            style={{
              display: 'block',
              lineHeight: 1.15,
              paddingTop: '0.06em',
              paddingBottom: '0.1em',
              background: 'linear-gradient(to right, #ffffff, #e9d5ff, #a5f3fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Crafting Digital
          </span>
          <span
            style={{
              display: 'block',
              lineHeight: 1.15,
              paddingTop: '0.06em',
              paddingBottom: '0.1em',
              background: 'linear-gradient(to right, #c084fc, #22d3ee, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Experiences That Convert
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 md:mb-12 text-base sm:text-lg md:text-2xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed px-2 md:px-0"
        >
          Where creativity meets technology to deliver exceptional results.
          We transform your vision into powerful digital experiences that engage, inspire, and drive success.
        </motion.p>

        {/* ALL BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Start Your Project — unchanged */}
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap">
              Start Your Project →
            </span>
          </button>

          {/* Team Attendance + Vercitty Academy */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href="https://attandance-rho.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2.5 md:py-4 rounded-full border border-purple-500/50 bg-purple-900/20 backdrop-blur-sm text-purple-200 hover:text-white hover:border-purple-400 hover:bg-purple-800/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:scale-105 transition-all duration-300 text-sm md:text-base whitespace-nowrap"
            >
              🗓️ Team Attendance
            </a>
            <a
              href="https://vercitty-academy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2.5 md:py-4 rounded-full border border-cyan-500/50 bg-cyan-900/20 backdrop-blur-sm text-cyan-200 hover:text-white hover:border-cyan-400 hover:bg-cyan-800/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:scale-105 transition-all duration-300 text-sm md:text-base whitespace-nowrap"
            >
              🎓 Vercitty Academy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-[#0a0118] to-transparent" />
    </section>
  );
}