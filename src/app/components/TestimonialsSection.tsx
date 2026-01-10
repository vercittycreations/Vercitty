import { motion } from 'motion/react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'TechStart India',
    initials: 'PS',
    rating: 5,
    review: 'Vercitty Creation completely transformed our startup\'s digital presence. From website redesign to brand identity, their attention to detail was impeccable. Within 3 months of launch, we saw a 340% increase in website traffic and our conversion rate jumped from 2.3% to 8.7%. Highly recommended!',
    image: null,
    stats: '+340% traffic increase',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Rajesh Verma',
    role: 'Marketing Manager',
    company: 'Luxe India Retail',
    initials: 'RV',
    rating: 5,
    review: 'The graphic design and brand strategy work from Vercitty exceeded our expectations. They delivered a complete visual identity system that perfectly captures our premium positioning. Our customer engagement increased by 280% on social media, and the brand recognition metrics improved significantly across all demographics.',
    image: null,
    stats: '+280% social engagement',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    role: 'Product Lead',
    company: 'InnovateLabs',
    initials: 'AG',
    rating: 5,
    review: 'Working with Vercitty for our SaaS platform redesign was a game-changer. Their UI/UX team created an intuitive interface that reduced customer support tickets by 45% and increased user retention by 62%. The collaborative process was seamless, and they delivered everything on schedule. Outstanding work!',
    image: null,
    stats: '62% retention ↑',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    name: 'Vikram Patel',
    role: 'Brand Director',
    company: 'Elite Fashion Studios',
    initials: 'VP',
    rating: 5,
    review: 'The video production and motion graphics work from Vercitty elevated our brand storytelling to a professional level we couldn\'t achieve in-house. Our flagship campaign video generated 2.4M views and achieved a 12.5% engagement rate—three times our previous benchmark. Their creative team is truly world-class.',
    image: null,
    stats: '2.4M+ video views',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 5,
    name: 'Neha Malhotra',
    role: 'Operations Director',
    company: 'GlobalTech Solutions',
    initials: 'NM',
    rating: 5,
    review: 'Vercitty Creation delivered a complete digital transformation for our enterprise website. The responsive design and optimization improved our page load speed by 58%, increased organic search visibility by 175%, and generated an estimated additional ₹45 lakhs in annual revenue. Their technical expertise is exceptional.',
    image: null,
    stats: '+175% SEO visibility',
    gradient: 'from-red-500 to-purple-500'
  },
  {
    id: 6,
    name: 'Arjun Singh',
    role: 'Co-founder',
    company: 'StartupHub India',
    initials: 'AS',
    rating: 5,
    review: 'The web development and UI/UX design work was exceptional. Vercitty not only built our platform but also mentored our team on best practices. We launched 2 months ahead of schedule, secured Series A funding with impressive demo metrics, and our user acquisition cost dropped by 38%. They\'re true partners in growth.',
    image: null,
    stats: '-38% CAC reduction',
    gradient: 'from-indigo-500 to-purple-500'
  }
];


function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <motion.div
        animate={{
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500"
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl rounded-3xl`} />

        <div className="relative z-10">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 fill-current text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}
                viewBox="0 0 20 20"
              >
                <path
                  fill="url(#star-gradient-${testimonial.id}-${i})"
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                />
                <defs>
                  <linearGradient id={`star-gradient-${testimonial.id}-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={testimonial.gradient.includes('purple') ? '#a855f7' : '#22d3ee'} />
                    <stop offset="100%" stopColor={testimonial.gradient.includes('pink') ? '#ec4899' : '#8b5cf6'} />
                  </linearGradient>
                </defs>
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="mb-6 text-lg text-purple-200/80 leading-relaxed">
            "{testimonial.review}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
              <span className="text-xl font-bold text-white">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${testimonial.gradient}`}>
                {testimonial.name}
              </h4>
              <p className="text-sm text-purple-200/70">
                {testimonial.role} • {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-b from-[#120828] via-[#0a0118] to-[#120828] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
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
              Client Testimonials
            </span>
          </div>
          
          <h2 className="mb-6 text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              What Our Clients Say
            </span>
          </h2>
          
          <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the brands we've helped succeed
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
