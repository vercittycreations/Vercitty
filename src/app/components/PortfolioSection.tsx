import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { url } from 'node:inspector';


const projects = [
  {
    id: 'forex',
    title: 'Forex Gym Web',
    category: 'Web Development',
    description: 'Modern SaaS dashboard for gym fitness freak with real-time analytics and intuitive UX',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'from-blue-400 to-purple-400',
    url: 'https://forgex-gym.vercel.app/'
  },
  {
    id: 'brandvision',
    title: 'Brand Vision Campaign',
    category: 'Video Editing',
    description: 'Cinematic brand story that increased engagement by 300%',
    image: 'https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY3NjEyODc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-400 to-pink-400',
    url: "https://drive.google.com/drive/folders/1j1CxiaNh97vioBpx4DlRDS3ZYtpwPRPc"
  },
  {
    id: 'real-estate-3d',
    title: '3D Real Estate Web',
    category: 'Web Development',
    url: 'https://luxury-real-estate-3d.vercel.app/',
    description: 'Premium brand identity for luxury lifestyle brand',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    id: 'quit-desktop',
    title: 'Personal Dairy Webapp',
    category: 'Web Development',
    url: 'https://quit-desktop.vercel.app/',
    description: 'Personal Dairy Task app with multi user login with firebase auth.',
    image: 'https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    id: 'SaaS',
    title: 'SasS Platform Web',
    category: 'Web Development',
    description: 'Saas Website Design were all your team works together',
    image: 'https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNhYXN8ZW58MHx8MHx8fDA%3D',
    color: 'from-purple-400 to-cyan-400',
    url: 'https://saaswebdemo2026.vercel.app/'
  },
  {
    id: 'health-app',
    title: 'Health Care+',
    category: 'Web Development',
    description: 'Your personal health care app where you find all the solutions.',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    color: 'from-pink-400 to-purple-400',
    url : 'https://health-web-app-liard.vercel.app/'
  },
  {
    id: 'corporateshow',
    title: 'Corporate Showcase',
    category: 'Video Editing',
    description: 'High-end corporate video with motion graphics and VFX',
    image: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc1NDg4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-400 to-cyan-400',
    url: "https://drive.google.com/drive/folders/1j1CxiaNh97vioBpx4DlRDS3ZYtpwPRPc"
  },
];


const categories = ['All', 'Web Development', 'Video Editing', 'Graphic Design', 'UI/UX Design'];


export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMore, setShowMore] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Show 3 projects initially, all if showMore is true
  const displayedProjects = showMore ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="portfolio" className="relative py-32 bg-gradient-to-b from-[#120828] via-[#0a0118] to-[#120828] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Our Work
            </span>
          </div>


          <h2 className="mb-6 text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Featured Projects
            </span>
          </h2>


          <p className="text-xl text-purple-200/70 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have helped brands achieve their goals
          </p>
        </motion.div>


        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowMore(false); // Reset when changing category
              }}
              className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 border-purple-500/30 shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                  : 'bg-purple-500/10 border-white/10 hover:border-purple-500/30'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>


        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/50 to-transparent opacity-60" />
                </div>


                {/* Content */}
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 mb-3 text-sm rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 backdrop-blur-sm`}>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}>
                      {project.category}
                    </span>
                  </div>


                  <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>


                  <p className="text-purple-200/70 leading-relaxed">
                    {project.description}
                  </p>


                  {/* View project button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 transform hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center pt-8"
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {showMore ? (
                  <>
                    Show Less
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Show More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
