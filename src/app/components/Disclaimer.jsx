import { useNavigate } from 'react-router-dom';

export default function Disclaimer() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#0f0520]">
      {/* Background overlay */}
      <div className="fixed inset-0 -z-50 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 hover:from-purple-600/40 hover:to-cyan-600/40 border border-purple-500/30 rounded-full text-purple-300 hover:text-cyan-300 transition-all duration-300 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 mb-4">
            Disclaimer
          </h1>
          <p className="text-purple-200/60 text-lg">
            Last Updated: January 13, 2026
          </p>
        </div>

        {/* Warning Box */}
        <div className="mb-12 p-8 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <p className="text-red-300 text-lg font-semibold">
            ⚠️ IMPORTANT: Please read this Disclaimer carefully before using Vercitty Creation's services and website.
          </p>
        </div>

        {/* Section 1: General Disclaimer */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            1. General Disclaimer
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              The information provided on the Vercitty Creation website and services is provided on an "as-is" and "as-available" basis. While we strive to provide accurate and up-to-date information, we make no warranties, express or implied, regarding the accuracy, completeness, or reliability of the content.
            </p>
            <p>
              We do not guarantee that the website will be uninterrupted, error-free, or free from viruses or other harmful components. Your use of the website and services is entirely at your own risk.
            </p>
          </div>
        </div>

        {/* Section 2: No Professional Advice */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            2. No Professional Advice
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              The content on our website and services are provided for informational purposes only and should not be construed as:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Legal, financial, tax, or accounting advice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Medical, health, or psychological advice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Business, investment, or professional consulting advice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>A substitute for professional consultation or expertise</span>
              </li>
            </ul>
            <p className="mt-4">
              For professional advice, please consult with qualified professionals in the relevant field.
            </p>
          </div>
        </div>

        {/* Section 3: Limitation of Liability */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            3. Limitation of Liability
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              To the maximum extent permitted by law, Vercitty Creation and its owners, employees, and partners shall not be liable for:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Any direct, indirect, incidental, special, or consequential damages</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Loss of profits, revenue, data, or business opportunities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Business interruption or service disruption</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Loss of or damage to reputation or goodwill</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Any loss or damage arising from your use of or inability to use the website or services</span>
              </li>
            </ul>
            <p className="mt-4">
              This applies even if we have been advised of the possibility of such damages.
            </p>
          </div>
        </div>

        {/* Section 4: Third-Party Content & Links */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            4. Third-Party Content & Links
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              Our website may contain links to third-party websites, resources, and content. We are not responsible for:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>The accuracy, completeness, or legality of content on third-party websites</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>The availability or functionality of external links</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Privacy policies or practices of third-party websites</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Any damages or issues resulting from visiting third-party websites</span>
              </li>
            </ul>
            <p className="mt-4">
              External links are provided for convenience and do not constitute endorsement. Visit third-party websites at your own risk.
            </p>
          </div>
        </div>

        {/* Section 5: Intellectual Property */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            5. Intellectual Property Rights
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              All content on the Vercitty Creation website, including text, graphics, logos, images, videos, and software, is the property of Vercitty Creation or its content suppliers and is protected by international copyright and intellectual property laws.
            </p>
            <p>
              You may not:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Reproduce, distribute, or transmit any content without written permission</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Modify, adapt, or create derivative works from our content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Remove or alter any copyright or intellectual property notices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Use our content for commercial purposes without authorization</span>
              </li>
            </ul>
            <p className="mt-4">
              Unauthorized use of our intellectual property may result in civil and criminal penalties.
            </p>
          </div>
        </div>

        {/* Section 6: Results & Guarantees */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            6. No Guarantee of Results
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              While we strive to provide high-quality services, we do not guarantee specific results from:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Web design or development projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Digital marketing or SEO services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Video production or graphic design work</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Increased traffic, conversions, or sales</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Ranking improvements or visibility gains</span>
              </li>
            </ul>
            <p className="mt-4">
              Results depend on various factors beyond our control, including market conditions, competition, and client implementation.
            </p>
          </div>
        </div>

        {/* Section 7: Website Availability */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            7. Website Availability & Maintenance
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              While we strive to maintain continuous website availability, we do not guarantee:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Uninterrupted access to the website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Error-free or bug-free operation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Protection against all security threats or data breaches</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Unscheduled maintenance or downtime</span>
              </li>
            </ul>
            <p className="mt-4">
              We may perform scheduled maintenance or updates that may temporarily affect website availability.
            </p>
          </div>
        </div>

        {/* Section 8: User Content */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            8. User-Provided Content
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              If you provide content, data, or materials to us for project work:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>You warrant that you own or have the right to provide such content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>You are responsible for creating backups of your original content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>The content does not infringe on any third-party rights</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>We are not liable for loss or damage to your provided content</span>
              </li>
            </ul>
          </div>
                  </div>

        {/* Section 9: Contact Information */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            9. Contact Information
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              If you have any questions regarding this Disclaimer, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> vercitycreations@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

