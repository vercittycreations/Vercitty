import { useNavigate } from 'react-router-dom';

export default function TermsService() {
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
            Terms of Service
          </h1>
          <p className="text-purple-200/60 text-lg">
            Last Updated: January 13, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
          <p className="text-purple-100 text-lg leading-relaxed">
            Welcome to <strong>Vercitty Creation</strong>. These Terms of Service ("Terms") govern your access to and use of our website, services, and all content provided by us. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to any part of these Terms, please do not use our services.
          </p>
        </div>

        {/* Section 1: Service Agreement */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            1. Service Agreement
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              When you engage Vercitty Creation for our services, the following terms apply:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Project Scope:</strong> All project scope, deliverables, timeline, and pricing will be discussed and confirmed in writing before work begins</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Payment Terms:</strong> Payment is due as specified in the project agreement. Late payments may incur additional fees</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Project Timeline:</strong> Timelines are estimates and subject to change based on client feedback and requirements changes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Revision Policy:</strong> A specified number of revisions are included in the project package. Additional revisions may incur extra charges</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Intellectual Property Rights */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            2. Intellectual Property Rights
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              Ownership of intellectual property is determined as follows:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Website Content:</strong> All content on the Vercitty Creation website, including text, graphics, logos, images, and software, is the property of Vercitty Creation and protected by international copyright laws</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Project Deliverables:</strong> Upon full payment, ownership of project deliverables transfers to the client, except for design templates and processes which remain our intellectual property</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Portfolio Use:</strong> We retain the right to use completed projects in our portfolio and case studies unless otherwise agreed in writing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Unauthorized Use:</strong> Reproducing, modifying, or distributing our content without permission is prohibited and may result in legal action</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: User Responsibilities */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            3. User Responsibilities
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              As a client, you agree to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Provide accurate and complete information for your project</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Respond to communications and provide feedback in a timely manner</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Provide necessary content, materials, and assets required for the project</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Not use our services for illegal, unethical, or harmful purposes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Ensure you own the rights to all content you provide to us</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Not engage in harassment, abuse, or discrimination</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Limitation of Liability */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            4. Limitation of Liability
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              To the maximum extent permitted by law:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Vercitty Creation is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Our total liability shall not exceed the amount paid by you for the services in question</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>We are not responsible for lost profits, lost data, or business interruption</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Services are provided on an "as-is" basis without warranties of any kind</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 5: Payment & Refund Policy */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            5. Payment & Refund Policy
          </h2>
          <div className="space-y-4 text-purple-100">
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Payment Methods:</strong> We accept bank transfers, credit cards, and other agreed payment methods</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Deposit:</strong> A deposit of 50% is required to initiate a project; the remaining balance is due upon completion</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Refund Policy:</strong> Refunds are only provided if the work is not started. Once work begins, refunds are not available unless there is a breach of contract by Vercitty Creation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Late Payment:</strong> Payments not made by the agreed date may incur late fees or suspension of services</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 6: Confidentiality */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            6. Confidentiality
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              Both parties agree to:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Maintain confidentiality of all sensitive information shared during the engagement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Not disclose proprietary information without written consent</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Protect shared data from unauthorized access or use</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 7: Termination */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            7. Termination
          </h2>
          <div className="space-y-4 text-purple-100">
            <p>
              Either party may terminate the engagement under the following conditions:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>By mutual written agreement</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>If payment is not received within 30 days of the due date</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>If there is a material breach of these terms that is not corrected within 7 days of written notice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Termination does not eliminate payment obligations for work completed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 8: Warranties & Disclaimers */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
            8. Warranties & Disclaimers
          </h2>
          <div className="space-y-4 text-purple-100">
            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Services are provided on an "as-is" basis without express or implied warranties</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>We do not guarantee specific results or outcomes from our services</span>
              </li>
                            <li className="flex gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>We are not responsible for delays caused by third-party services or force majeure events</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
        {/* Section 9: Governing Law */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6">
          9. Governing Law
        </h2>
        <div className="space-y-4 text-purple-100">
          <p>
            These Terms shall be governed and interpreted in accordance with the laws applicable in the jurisdiction
            where Vercitty Creation operates.
          </p>
        </div>
      </div>
    </div>
  );
}
