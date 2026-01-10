import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 120, suffix: '+', label: 'Projects Completed', color: 'from-purple-400 to-pink-400' },
  { value: 100, suffix: '+', label: 'Happy Clients', color: 'from-cyan-400 to-blue-400' },
  { value: 4, suffix: '+', label: 'Years Experience', color: 'from-blue-400 to-purple-400' },
  { value: 96, suffix: '%', label: 'Client Satisfaction', color: 'from-pink-400 to-purple-400' },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * stat.value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-3xl" />
        
        <div className="relative z-10 text-center">
          <div className={`text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
            {count}{stat.suffix}
          </div>
          <div className="text-purple-200/70">{stat.label}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#120828] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Trusted by Brands Worldwide
            </span>
          </h2>
          <p className="text-xl text-purple-200/70">
            Numbers that speak for our excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
