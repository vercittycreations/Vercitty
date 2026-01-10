// import { motion } from 'motion/react';
// import { FloatingElement } from './FloatingElement';
// const handleStartProject = () => {
//   const contactSection = document.getElementById('contact');
//   contactSection?.scrollIntoView({ behavior: 'smooth' });
// };
// export function CTASection() {
//   return (
//     <section id="contact" className="relative py-32 bg-gradient-to-b from-[#120828] to-[#0a0118] overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />
//         <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
//       </div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

//       {/* Floating elements */}
//       <FloatingElement
//         delay={0}
//         className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-md border border-purple-500/20 rounded-2xl"
//         style={{ transform: 'perspective(1000px) rotateY(-15deg) rotateX(10deg)' }}
//       >
//         <div className="w-full h-full flex items-center justify-center">
//           <div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-full" />
//         </div>
//       </FloatingElement>

//       <FloatingElement
//         delay={0.5}
//         className="absolute bottom-20 right-[10%] w-36 h-36 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-cyan-500/20 rounded-2xl"
//         style={{ transform: 'perspective(1000px) rotateY(15deg) rotateX(-10deg)' }}
//       >
//         <div className="w-full h-full p-4 flex flex-col gap-2">
//           <div className="w-full h-2 bg-cyan-400/30 rounded-full" />
//           <div className="w-3/4 h-2 bg-purple-400/30 rounded-full" />
//           <div className="flex-1 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mt-2" />
//         </div>
//       </FloatingElement>

//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-blue-500/20 backdrop-blur-2xl border border-purple-500/30 shadow-[0_8px_64px_0_rgba(139,92,246,0.3)]"
//         >
//           {/* Decorative corners */}
//           <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-purple-500/50 rounded-tl-3xl" />
//           <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-3xl" />
//           <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-3xl" />
//           <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-purple-500/50 rounded-br-3xl" />

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 backdrop-blur-sm border border-purple-500/40 rounded-full mb-6">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
//                 Ready to Get Started?
//               </span>
//             </div>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="mb-6 text-4xl md:text-6xl font-bold"
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
//               Let's Create Something
//             </span>
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
//               Extraordinary Together
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mb-10 text-xl text-purple-200/80 max-w-2xl mx-auto leading-relaxed"
//           >
//             Transform your vision into reality with Vercitty Creation.
//             Let's discuss your project and create digital experiences that convert.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           >
//             <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-300">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <span className="relative z-10 flex items-center gap-3">
//                 <button onClick={handleStartProject} className="your-button-class">
//   Start Your Project
// </button>

//                 <svg
//                   className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                 </svg>
//               </span>
//             </button>

//             <button className="group px-10 py-5 bg-transparent backdrop-blur-sm border-2 border-purple-500/50 rounded-full hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300">
//               <span className="flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
//                 <span>Schedule a Call</span>
//                 <svg
//                   className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 </svg>
//               </span>
//             </button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//             className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-purple-200/60"
//           >
//             <div className="flex items-center gap-2">
//               <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span>Free Consultation</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span>No Obligation Quote</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//               <span>24/7 Support</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );

