export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h1 className="text-4xl font-serif mb-8 text-white">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Mr. Melo (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                Human Knowledge Model platform and related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>

              <h3 className="text-xl font-medium mb-3 text-white">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Questions, prompts, and interactions with our AI system</li>
                <li>Feedback and support communications</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-white">2.2 Information We Collect Automatically</h3>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li>Usage data and interaction patterns</li>
                <li>Device information and browser data</li>
                <li>IP addresses and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li>Provide and improve our AI-powered knowledge services</li>
                <li>Process transactions and manage subscriptions</li>
                <li>Personalize your experience and responses</li>
                <li>Communicate with you about our services</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns to improve our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist our operations (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure server infrastructure with regular security audits</li>
                <li>Access controls and employee training</li>
                <li>Regular security updates and monitoring</li>
                <li>Secure payment processing through certified providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
              <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Restriction:</strong> Limit how we process your information</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing based on consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Data Retention</h2>
              <p className="text-gray-300 mb-4">
                We retain your personal information only as long as necessary for the purposes outlined in this policy,
                unless a longer retention period is required by law. When we no longer need your information, we securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">9. International Data Transfers</h2>
              <p className="text-gray-300 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards
                are in place to protect your information during such transfers, including standard contractual clauses and adequacy decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Third-Party Services</h2>
              <p className="text-gray-300 mb-4">
                We may use third-party service providers for payment processing, analytics, and other services. These providers
                are contractually obligated to maintain the confidentiality and security of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Children&apos;s Privacy</h2>
              <p className="text-gray-300 mb-4">
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                If we become aware that we have collected such information, we will take steps to delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through
                a prominent notice on our platform. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@mrmelo.com<br />
                  <strong>Address:</strong> [Your Business Address]<br />
                  <strong>Phone:</strong> [Your Phone Number]
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">14. Compliance</h2>
              <p className="text-gray-300 mb-4">
                This Privacy Policy complies with applicable data protection laws, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4">
                <li>General Data Protection Regulation (GDPR) for EU residents</li>
                <li>California Consumer Privacy Act (CCPA) for California residents</li>
                <li>Other applicable privacy laws and regulations</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
