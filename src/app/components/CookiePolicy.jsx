import { useNavigate } from 'react-router-dom';

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          <p className="text-purple-200/60 text-lg">
            Last Updated: January 13, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
          <p className="text-purple-100 text-lg leading-relaxed">
            This Cookie Policy explains how <strong>Vercitty Creation</strong> uses cookies and similar tracking technologies on our website. Cookies are small text files stored on your device that help us improve your browsing experience and provide personalized services.
          </p>
        </div>

        {/* Section 1: What Are Cookies */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            1. What Are Cookies?
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              Cookies are small data files placed on your device (computer, tablet, or smartphone) when you visit our website. They serve various purposes such as:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Remembering your preferences and settings</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Tracking website usage patterns and user behavior</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Enhancing website security and functionality</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Personalizing content and advertisements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Analyzing website performance and optimization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Types of Cookies We Use */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            2. Types of Cookies We Use
          </h2>
          <div className="space-y-4 text-purple-100">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h3 className="font-bold text-cyan-400 mb-2">Essential Cookies (Necessary)</h3>
                <p>
                  These cookies are required for the website to function properly. They enable basic functions like page navigation and access to secure areas. Without these cookies, the website cannot operate efficiently.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h3 className="font-bold text-cyan-400 mb-2">Performance & Analytics Cookies</h3>
                <p>
                  These cookies collect information about how you use our website, including pages visited, time spent, and links clicked. This data helps us understand user behavior and improve website performance. We use Google Analytics for this purpose.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h3 className="font-bold text-cyan-400 mb-2">Marketing & Advertising Cookies</h3>
                <p>
                  These cookies track your online activity to deliver personalized advertisements and content. They may be set by us or by third-party advertising partners to show you relevant ads across different websites.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h3 className="font-bold text-cyan-400 mb-2">Functional Cookies</h3>
                <p>
                  These cookies remember your preferences and settings to provide a more personalized experience. For example, they may remember your language preference or login information.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <h3 className="font-bold text-cyan-400 mb-2">Social Media Cookies</h3>
                <p>
                  These cookies are set by social media platforms (such as Facebook, Twitter, LinkedIn) when you interact with social media buttons on our website. They track your social media activity and may be used for targeting purposes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: First-Party & Third-Party Cookies */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            3. First-Party & Third-Party Cookies
          </h2>
          <div className="space-y-4 text-purple-100">
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>First-Party Cookies:</strong> Set directly by Vercitty Creation website and are used to improve your experience on our site</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Third-Party Cookies:</strong> Set by external service providers (Google Analytics, social media platforms, advertising networks) to track user behavior and deliver targeted content</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Cookie Duration */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            4. Cookie Duration
          </h2>
          <div className="space-y-4 text-purple-100">
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Session Cookies:</strong> Deleted automatically when you close your browser</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Persistent Cookies:</strong> Remain on your device for a specified period (from days to years) unless manually deleted</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5: Your Cookie Choices */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            5. Your Cookie Choices & Control
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              You have several options to control cookies:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or alert you when cookies are being sent. You can modify your browser settings to control cookie acceptance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Opt-Out Options:</strong> You can opt out of certain tracking technologies through your browser privacy settings or third-party opt-out tools</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Do Not Track:</strong> If your browser supports the "Do Not Track" feature, you can enable it to signal your preference to website operators</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Cookie Banner:</strong> You can manage your cookie preferences through our cookie consent banner</span>
              </li>
            </ul>
            <div className="mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-sm">
                <strong>Note:</strong> Disabling essential cookies may affect the functionality and accessibility of our website.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Google Analytics */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            6. Google Analytics
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              We use Google Analytics to collect and analyze data about website usage. Google Analytics uses cookies to track:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Pages you visit and how long you spend on them</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Your device type and operating system</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Your geographic location</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Referral sources and traffic patterns</span>
              </li>
            </ul>
            <p className="mt-4">
              You can opt out of Google Analytics tracking by installing the <strong>Google Analytics Opt-out Browser Add-on</strong> available at: <span className="text-cyan-400">https://tools.google.com/dlpage/gaoptout</span>
            </p>
          </div>
        </div>

        {/* Section 7: Security */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            7. Cookie Security
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              We implement security measures to protect cookies from unauthorized access or misuse. However, no transmission over the internet is completely secure. We encourage users to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Use secure passwords for your accounts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Keep your browser and software updated</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Clear cookies regularly from your browser</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Use antivirus software and firewalls</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 8: Changes to Cookie Policy */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            8. Changes to This Cookie Policy
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our cookie practices. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes constitutes your acceptance of the updated Cookie Policy.
            </p>
          </div>
        </div>

               {/* Section 9: Contact Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            9. Contact Us
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              If you have any questions about this Cookie Policy or our cookie practices, please contact us at:
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

