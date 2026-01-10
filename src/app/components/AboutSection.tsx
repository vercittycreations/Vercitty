import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast Delivery',
    description: 'We respect your time. Quick turnarounds without compromising quality.',
  },
  {
    icon: '🎨',
    title: 'Creative Excellence',
    description: 'Award-winning designs that capture attention and drive engagement.',
  },
  {
    icon: '🚀',
    title: 'Results-Driven',
    description: 'Every project is crafted with your business goals and ROI in mind.',
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'High-end production values that elevate your brand above competitors.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Process',
    description: 'We work closely with you at every step to ensure your vision comes to life.',
  },
  {
    icon: '🔒',
    title: 'Reliable & Trustworthy',
    description: 'Transparent communication, secure processes, and on-time delivery guaranteed.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-[#120828] via-[#0a0118] to-[#120828] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="mb-6 text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Your Success Is Our Mission
            </span>
          </h2>
          
          <p className="text-xl text-purple-200/70 max-w-3xl mx-auto leading-relaxed">
            We're not just a creative agency — we're your strategic partner in digital transformation.
            With cutting-edge technology and unmatched creativity, we turn your ideas into reality.
          </p>
        </motion.div>

        {/* Main content with image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 shadow-[0_8px_32px_0_rgba(139,92,246,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc1NDg4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vercitty Creation Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 px-8 py-6 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl shadow-[0_8px_32px_0_rgba(139,92,246,0.4)]"
            >
              <div className="text-3xl font-bold text-white">4+</div>
              <div className="text-sm text-purple-100">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Crafting Digital Excellence Since Birth !!
            </h3>
            
            <p className="mb-6 text-lg text-purple-200/80 leading-relaxed">
              At Vercitty Creation, we believe in the power of exceptional design and innovative technology
              to transform businesses. Our team of passionate creatives and technical experts work tirelessly
              to deliver solutions that don't just meet expectations — they exceed them.
            </p>
            
            <p className="mb-8 text-lg text-purple-200/80 leading-relaxed">
              From startups looking to make their mark to established enterprises seeking to innovate,
              we've partnered with brands across industries to create digital experiences that convert,
              engage, and inspire.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full">
                <span className="text-purple-200">Award-Winning Team</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full">
                <span className="text-cyan-200">24/7 Support</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                <span className="text-blue-200">Global Reach</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="mb-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {feature.title}
              </h4>
              <p className="text-purple-200/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
