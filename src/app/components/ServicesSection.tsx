import { motion } from 'motion/react';
import { useState } from 'react';

const services = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Cinematic storytelling through professional video production, motion graphics, and post-production excellence.',
    gradient: 'from-purple-500/20 via-pink-500/20 to-red-500/20',
    borderGradient: 'from-purple-500/40 to-pink-500/40',
    iconGradient: 'from-purple-400 to-pink-400',
    features: ['Motion Graphics', 'Color Grading', 'VFX & Compositing', '4K Production'],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Stunning visual identities that capture attention and communicate your brand story with precision and creativity.',
    gradient: 'from-cyan-500/20 via-blue-500/20 to-purple-500/20',
    borderGradient: 'from-cyan-500/40 to-blue-500/40',
    iconGradient: 'from-cyan-400 to-blue-400',
    features: ['Brand Identity', 'Logo Design', 'Print & Digital', 'Marketing Collateral'],
  },
  {
    id: 'web-dev',
    title: 'Web Development & UI/UX',
    description: 'Cutting-edge web applications with seamless user experiences, modern interfaces, and powerful functionality.',
    gradient: 'from-blue-500/20 via-purple-500/20 to-cyan-500/20',
    borderGradient: 'from-blue-500/40 to-purple-500/40',
    iconGradient: 'from-blue-400 to-purple-400',
    features: ['Responsive Design', 'React & Next.js', 'UI/UX Strategy', 'Progressive Web Apps'],
  },
];

function VideoEditingIcon() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
      {/* Timeline tracks */}
      <rect x="20" y="40" width="160" height="12" rx="6" fill="url(#videoGrad1)" opacity="0.6" />
      <rect x="20" y="60" width="120" height="12" rx="6" fill="url(#videoGrad2)" opacity="0.8" />
      <rect x="20" y="80" width="140" height="12" rx="6" fill="url(#videoGrad3)" opacity="0.7" />
      
      {/* Play button */}
      <circle cx="100" cy="130" r="35" fill="url(#videoGrad4)" opacity="0.2" />
      <circle cx="100" cy="130" r="28" stroke="url(#videoGrad5)" strokeWidth="3" fill="none" />
      <path d="M92 115 L115 130 L92 145 Z" fill="url(#videoGrad5)" />
      
      {/* Video frames */}
      <rect x="30" y="155" width="35" height="25" rx="3" fill="url(#videoGrad6)" opacity="0.4" />
      <rect x="72" y="155" width="35" height="25" rx="3" fill="url(#videoGrad6)" opacity="0.6" />
      <rect x="114" y="155" width="35" height="25" rx="3" fill="url(#videoGrad6)" opacity="0.5" />
      
      <defs>
        <linearGradient id="videoGrad1" x1="20" y1="46" x2="180" y2="46">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="videoGrad2" x1="20" y1="66" x2="140" y2="66">
          <stop stopColor="#ec4899" />
          <stop offset="1" stopColor="#f43f5e" />
        </linearGradient>
        <linearGradient id="videoGrad3" x1="20" y1="86" x2="160" y2="86">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="videoGrad4" x1="65" y1="95" x2="135" y2="165">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="videoGrad5" x1="72" y1="102" x2="128" y2="158">
          <stop stopColor="#e879f9" />
          <stop offset="1" stopColor="#f472b6" />
        </linearGradient>
        <linearGradient id="videoGrad6" x1="30" y1="167.5" x2="149" y2="167.5">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GraphicDesignIcon() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
      {/* Color palette circles */}
      <circle cx="50" cy="50" r="18" fill="url(#graphicGrad1)" opacity="0.8" />
      <circle cx="90" cy="45" r="18" fill="url(#graphicGrad2)" opacity="0.8" />
      <circle cx="130" cy="50" r="18" fill="url(#graphicGrad3)" opacity="0.8" />
      
      {/* Poster/canvas */}
      <rect x="40" y="85" width="120" height="90" rx="8" fill="url(#graphicGrad4)" opacity="0.1" stroke="url(#graphicGrad5)" strokeWidth="2" />
      
      {/* Design elements inside */}
      <circle cx="100" cy="115" r="12" fill="url(#graphicGrad6)" opacity="0.6" />
      <rect x="70" y="140" width="60" height="4" rx="2" fill="url(#graphicGrad7)" opacity="0.7" />
      <rect x="80" y="150" width="40" height="4" rx="2" fill="url(#graphicGrad7)" opacity="0.5" />
      
      {/* Floating logo mockup */}
      <path d="M145 120 L165 130 L155 150 L135 140 Z" fill="url(#graphicGrad8)" opacity="0.6" />
      
      <defs>
        <linearGradient id="graphicGrad1" x1="32" y1="32" x2="68" y2="68">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="graphicGrad2" x1="72" y1="27" x2="108" y2="63">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="graphicGrad3" x1="112" y1="32" x2="148" y2="68">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="graphicGrad4" x1="40" y1="130" x2="160" y2="130">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="graphicGrad5" x1="40" y1="130" x2="160" y2="130">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="graphicGrad6" x1="88" y1="103" x2="112" y2="127">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="graphicGrad7" x1="70" y1="142" x2="130" y2="142">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="graphicGrad8" x1="135" y1="120" x2="165" y2="150">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function WebDevIcon() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
      {/* Browser window */}
      <rect x="25" y="35" width="150" height="100" rx="8" fill="url(#webGrad1)" opacity="0.1" stroke="url(#webGrad2)" strokeWidth="2" />
      
      {/* Browser dots */}
      <circle cx="40" cy="50" r="3" fill="url(#webGrad3)" />
      <circle cx="52" cy="50" r="3" fill="url(#webGrad3)" />
      <circle cx="64" cy="50" r="3" fill="url(#webGrad3)" />
      
      {/* UI elements */}
      <rect x="40" y="65" width="50" height="6" rx="3" fill="url(#webGrad4)" opacity="0.7" />
      <rect x="40" y="78" width="35" height="6" rx="3" fill="url(#webGrad4)" opacity="0.5" />
      
      {/* Wireframe cards */}
      <rect x="105" y="65" width="55" height="35" rx="4" fill="url(#webGrad5)" opacity="0.3" stroke="url(#webGrad6)" strokeWidth="1.5" />
      <rect x="115" y="72" width="35" height="4" rx="2" fill="url(#webGrad7)" opacity="0.6" />
      <rect x="115" y="80" width="25" height="4" rx="2" fill="url(#webGrad7)" opacity="0.4" />
      
      {/* App screens floating */}
      <rect x="45" y="145" width="40" height="50" rx="6" fill="url(#webGrad8)" opacity="0.2" stroke="url(#webGrad9)" strokeWidth="2" />
      <rect x="95" y="140" width="40" height="50" rx="6" fill="url(#webGrad10)" opacity="0.3" stroke="url(#webGrad11)" strokeWidth="2" />
      <rect x="145" y="145" width="40" height="50" rx="6" fill="url(#webGrad12)" opacity="0.2" stroke="url(#webGrad13)" strokeWidth="2" />
      
      <defs>
        <linearGradient id="webGrad1" x1="25" y1="85" x2="175" y2="85">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="webGrad2" x1="25" y1="85" x2="175" y2="85">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="webGrad3" x1="40" y1="47" x2="64" y2="53">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="webGrad4" x1="40" y1="68" x2="90" y2="81">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="webGrad5" x1="105" y1="82.5" x2="160" y2="82.5">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="webGrad6" x1="105" y1="82.5" x2="160" y2="82.5">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="webGrad7" x1="115" y1="76" x2="150" y2="84">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="webGrad8" x1="45" y1="170" x2="85" y2="170">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="webGrad9" x1="45" y1="170" x2="85" y2="170">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="webGrad10" x1="95" y1="165" x2="135" y2="165">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="webGrad11" x1="95" y1="165" x2="135" y2="165">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#67e8f9" />
        </linearGradient>
        <linearGradient id="webGrad12" x1="145" y1="170" x2="185" y2="170">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="webGrad13" x1="145" y1="170" x2="185" y2="170">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const icons = {
    'video-editing': <VideoEditingIcon />,
    'graphic-design': <GraphicDesignIcon />,
    'web-dev': <WebDevIcon />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`relative h-full p-8 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
        />

        {/* Card content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            animate={{
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="w-32 h-32 mb-6 mx-auto"
          >
            {icons[service.id as keyof typeof icons]}
          </motion.div>

          {/* Title */}
          <h3 className={`mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.iconGradient}`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-purple-200/80 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3">
            {service.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.iconGradient}`} />
                <span className="text-purple-100/70">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl"
          />
        </div>

        {/* 3D depth layers */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
          style={{ transform: 'translateZ(20px)' }}
        />
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0118] via-[#120828] to-[#0a0118] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Our Services
            </span>
          </div>
          
          <h2 className="mb-6 text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Premium Creative Solutions
            </span>
          </h2>
          
          <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
            Elevate your brand with our comprehensive suite of creative services,
            tailored for startups and enterprises alike.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
