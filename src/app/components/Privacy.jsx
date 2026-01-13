import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#0f0520]">
      {/* Background overlay */}
      <div className="fixed inset-0 -z-50 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-24 left-6 z-40"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 hover:from-purple-600/40 hover:to-cyan-600/40 border border-purple-500/30 rounded-full text-purple-300 hover:text-cyan-300 transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 mb-4">
              Privacy Policy
            </h1>
            <p className="text-purple-200/60 text-lg">
              Last Updated: January 13, 2026
            </p>
          </div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm"
          >
            <p className="text-purple-100 text-lg leading-relaxed">
              At <strong>Vercitty Creation</strong>, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines how we collect, use, protect, and share your personal information in compliance with applicable data protection laws.
            </p>
          </motion.section>

          {/* Information We Collect */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-purple-100">
              <p>
                We collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Contact Information:</strong> Name, email address, phone number, and company details</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Project Details:</strong> Information about your project requirements, timeline, and budget</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Communication Data:</strong> Messages, inquiries, and correspondence with our team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Technical Data:</strong> IP address, browser type, device information, and website usage patterns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Payment Information:</strong> Billing details and transaction records (processed securely)</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* How We Use Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-purple-100">
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To respond to your inquiries and provide customer support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To deliver, maintain, and improve our services and website functionality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To communicate about your project progress and updates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To process payments and send invoices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To send marketing communications and promotional offers (with your consent)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To analyze usage patterns and improve our website experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To comply with legal obligations and protect our rights</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Data Protection & Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              3. Data Protection & Security
            </h2>
            <div className="space-y-4 text-purple-100">
              <p>
                We implement comprehensive technical, administrative, and physical security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These include:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Encryption of sensitive data in transit and at rest</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Secure authentication mechanisms and access controls</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Regular security audits and vulnerability assessments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Restricted access to personal data by authorized personnel only</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Employee training on data protection and privacy practices</span>
                </li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </motion.section>

          {/* Third-Party Sharing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              4. Third-Party Sharing & Disclosure
            </h2>
            <div className="space-y-4 text-purple-100">
              <p>
                We do <strong>not sell, trade, or rent</strong> your personal information to third parties. However, we may share information in the following circumstances:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Service Providers:</strong> With trusted vendors who assist us in providing services (under strict confidentiality agreements)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* User Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              5. Your Rights & Choices
            </h2>
            <div className="space-y-4 text-purple-100">
              <p>
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Right to Access:</strong> Request a copy of your personal data we hold</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Right to Correct:</strong> Request correction of inaccurate information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Right to Delete:</strong> Request deletion of your personal data (subject to legal obligations)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications at any time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Right to Data Portability:</strong> Request your data in a portable format</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Cookies & Tracking */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
              6. Cookies & Tracking Technologies
            </h2>
            <div className="space-y-4 text-purple-100">
              <p>
                We use cookies and similar tracking technologies to enhance your website experience. These may include:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Essential Cookies:</strong> Required for website functionality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Analytics Cookies:</strong> To understand how you use our website</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><strong>Marketing Cookies:</strong> To personalize content and ads</span>
                </li>
              </ul>
                        <p className="mt-4">
                          You can manage or disable cookies through your browser settings. Please note that disabling cookies
                          may affect the functionality of our website.
                        </p>
                      </div>
                    </motion.section>
                  </motion.div>
                </div>
              </div>
            );
          }
