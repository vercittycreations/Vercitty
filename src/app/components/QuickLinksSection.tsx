'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';

const cards = [
  {
    id: 'attendance',
    emoji: '🗓️',
    title: 'Team Attendance',
    href: 'https://attandance-rho.vercel.app',
    description:
      `Track your team's daily attendance effortlessly. Real-time records, smart summaries, and a clean dashboard built for the Vercitty crew.`,
    bullets: [
      '✦ Real-time attendance tracking',
      '✦ Daily & monthly reports',
      '✦ Simple one-click mark system',
      '✦ Built for Vercitty team',
    ],
    gradient: 'from-purple-600/20 to-purple-900/30',
    border: 'border-purple-500/30',
    glow: 'hover:shadow-[0_0_50px_rgba(139,92,246,0.3)]',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    bulletColor: 'text-purple-300/80',
    btnGradient: 'from-purple-600 to-purple-800',
    btnGlow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]',
    accentBar: 'from-purple-400 to-cyan-400',
    slideFrom: { opacity: 0, x: -120 },
  },
  {
    id: 'academy',
    emoji: '🎓',
    title: 'Vercitty Academy',
    href: 'https://vercitty-academy.vercel.app',
    description:
      'Learn, grow, and level up with Vercitty Academy. Curated courses and resources crafted to sharpen your digital skills.',
    bullets: [
      '✦ Curated digital courses',
      '✦ Skill-based learning paths',
      '✦ Beginner to advanced content',
      '✦ Powered by Vercitty Creations',
    ],
    gradient: 'from-cyan-600/20 to-cyan-900/30',
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-[0_0_50px_rgba(34,211,238,0.3)]',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    bulletColor: 'text-cyan-300/80',
    btnGradient: 'from-cyan-600 to-cyan-800',
    btnGlow: 'hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]',
    accentBar: 'from-cyan-400 to-purple-400',
    slideFrom: { opacity: 0, x: 120 },
  },
];

function Card({ card, index }: { card: (typeof cards)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={card.slideFrom}
      animate={isInView ? { opacity: 1, x: 0 } : card.slideFrom}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`
        relative flex flex-col rounded-3xl border ${card.border}
        bg-gradient-to-br ${card.gradient}
        backdrop-blur-md p-7 md:p-9
        shadow-[0_8px_40px_rgba(0,0,0,0.4)]
        ${card.glow}
        transition-all duration-500 overflow-hidden
        w-full max-w-md mx-auto
      `}
    >
      {/* Accent top bar */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${card.accentBar} rounded-t-3xl`} />

      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl pointer-events-none" />

      {/* Emoji + Title */}
      <div className="flex items-center gap-4 mb-5">
        <div className={`text-4xl md:text-5xl w-16 h-16 flex items-center justify-center rounded-2xl border ${card.border} bg-white/5 backdrop-blur-sm flex-shrink-0`}>
          {card.emoji}
        </div>
        <div>
          <span className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${card.badgeColor} mb-2 inline-block`}>
            Vercitty
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {card.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-purple-100/70 text-sm md:text-base leading-relaxed mb-6">
        {card.description}
      </p>

      {/* Feature Bullets */}
      <ul className="flex flex-col gap-2 mb-8">
        {card.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: index * 0.15 + 0.4 + i * 0.08, duration: 0.4 }}
            className={`text-sm ${card.bulletColor} font-medium`}
          >
            {bullet}
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-auto">
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group inline-flex items-center justify-center gap-2 w-full
            px-6 py-3.5 rounded-full font-semibold text-sm md:text-base text-white
            bg-gradient-to-r ${card.btnGradient}
            ${card.btnGlow}
            hover:scale-[1.03] active:scale-[0.98]
            transition-all duration-300
          `}
        >
          Visit {card.title}
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </motion.div>
  );
}

export function QuickLinksSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#0a0118]">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 md:w-[500px] md:h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-purple-400 mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            Our Platforms
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mt-4">
            Everything You Need,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              All in One Place
            </span>
          </h2>
          <p className="mt-4 text-purple-200/60 text-base md:text-lg max-w-xl mx-auto">
            Vercitty Creations brings you powerful tools and learning resources — built for our team and community.
          </p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mx-auto h-[2px] w-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full origin-center"
          />
        </motion.div>

        {/* Cards — side by side on md+, stacked on mobile */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div key={card.id} className="w-full md:w-1/2 max-w-md md:max-w-none flex">
              <Card card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}