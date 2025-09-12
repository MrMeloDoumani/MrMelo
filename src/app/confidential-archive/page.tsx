
import Link from "next/link";

export default function ConfidentialArchive() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative fade-bottom">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,rgba(0,0,0,0),rgba(0,0,0,0.6))]" />

        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
              The Confidential Archive
            </h1>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-6">
              <strong>Exclusive personal insights and original content.</strong> My private collection of theories, 
              observations, and creative work spanning philosophy, business, and human experience.
            </p>
            <div className="bg-black/40 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <p className="text-foreground/80 mb-4">
                <em>This archive contains only my original personal material</em> - no client work, 
                no commissioned content. These are my authentic thoughts, theories, and creative expressions 
                on the topics that shape our world.
              </p>
              <div className="text-foreground/70">
                <p className="text-lg italic">Everyone has a price. Even private thoughts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-serif text-center mb-12">Topics Covered in the Archive</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Life & Philosophy</h3>
              <p className="text-foreground/80 text-sm">Personal theories on existence, purpose, consciousness, and the human condition</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Economy & Finance</h3>
              <p className="text-foreground/80 text-sm">Alternative economic theories, market psychology, wealth creation strategies</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Relationships & Psychology</h3>
              <p className="text-foreground/80 text-sm">Interpersonal dynamics, emotional intelligence, communication patterns</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Industries & Technology</h3>
              <p className="text-foreground/80 text-sm">Industry analysis, technological trends, innovation theories</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Business & Entrepreneurship</h3>
              <p className="text-foreground/80 text-sm">Business models, startup strategies, leadership insights, market disruption</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Self-Development & Growth</h3>
              <p className="text-foreground/80 text-sm">Personal growth frameworks, productivity systems, mindset development</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Creativity & Art</h3>
              <p className="text-foreground/80 text-sm">Creative processes, artistic theories, innovation in expression</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Society & Culture</h3>
              <p className="text-foreground/80 text-sm">Social dynamics, cultural observations, future trends</p>
            </div>
            
            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Ethics & Morality</h3>
              <p className="text-foreground/80 text-sm">Moral frameworks, ethical dilemmas, decision-making principles</p>
            </div>

            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Health & Wellness</h3>
              <p className="text-foreground/80 text-sm">Holistic health approaches, mental wellness strategies, lifestyle optimization</p>
            </div>

            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Education & Learning</h3>
              <p className="text-foreground/80 text-sm">Effective learning methods, knowledge acquisition, skill development frameworks</p>
            </div>

            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Technology & Future</h3>
              <p className="text-foreground/80 text-sm">Emerging tech analysis, future predictions, digital transformation insights</p>
            </div>

            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Spirituality & Mindfulness</h3>
              <p className="text-foreground/80 text-sm">Inner peace practices, spiritual growth, mindfulness techniques, consciousness exploration</p>
            </div>

            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Productivity & Systems</h3>
              <p className="text-foreground/80 text-sm">Workflow optimization, time management, system design, efficiency frameworks</p>
            </div>

            <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
              <h3 className="font-serif text-lg mb-3 text-[color:var(--accent)]">Communication & Influence</h3>
              <p className="text-foreground/80 text-sm">Persuasion techniques, influence strategies, effective communication, impact creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-serif text-center mb-12">Multi-Media Archive</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-20 h-20 bg-[color:var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Written Content</h3>
              <ul className="text-foreground/80 space-y-2 text-left">
                <li>• Personal essays and theories</li>
                <li>• Business analyses and frameworks</li>
                <li>• Creative writing and poetry</li>
                <li>• Research notes and insights</li>
                <li>• Strategic observations</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[color:var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎧</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Audio Content</h3>
              <ul className="text-foreground/80 space-y-2 text-left">
                <li>• Personal philosophy discussions</li>
                <li>• Business strategy recordings</li>
                <li>• Creative monologues</li>
                <li>• Meditation and reflection sessions</li>
                <li>• Industry analysis audio essays</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[color:var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="font-serif text-xl mb-4">Video Content</h3>
              <ul className="text-foreground/80 space-y-2 text-left">
                <li>• Personal insights and lectures</li>
                <li>• Business strategy breakdowns</li>
                <li>• Creative process demonstrations</li>
                <li>• Industry trend analyses</li>
                <li>• Philosophical discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-serif text-center mb-4">Flexible Access Model</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            Start with basic access, then unlock the topics that matter most to you. 
            New content drops keep the archive fresh and valuable.
          </p>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Base Membership */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif mb-6">Step 1: Choose Your Base Access</h3>
              
              <div className="grid gap-4">
                <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-serif text-lg">Basic Explorer</h4>
                      <p className="text-foreground/80 text-sm">Perfect for getting started</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">$15/month</div>
                      <div className="text-sm text-foreground/60">or $150/year (save 17%)</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Access to 3 topic categories</li>
                    <li>• Monthly content updates</li>
                    <li>• Download up to 5 items/month</li>
                    <li>• Cancel anytime (no refunds for partial months)</li>
                  </ul>
                </div>

                <div className="rounded-lg border-2 border-[color:var(--accent)] p-6 bg-black/40 relative">
                  <div className="absolute -top-3 left-4">
                    <span className="bg-[color:var(--accent)] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-serif text-lg">Deep Diver</h4>
                      <p className="text-foreground/80 text-sm">For serious personal growth</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">$35/month</div>
                      <div className="text-sm text-foreground/60">or $350/year (save 17%)</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Access to 8 topic categories</li>
                    <li>• Weekly content updates</li>
                    <li>• Download up to 15 items/month</li>
                    <li>• Priority access to new content</li>
                    <li>• Personal recommendations</li>
                    <li>• Cancel anytime (no refunds for partial months)</li>
                  </ul>
                </div>

                <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-serif text-lg">Archive Master</h4>
                      <p className="text-foreground/80 text-sm">Complete access to everything</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">$65/month</div>
                      <div className="text-sm text-foreground/60">or $650/year (save 17%)</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Access to all 15 topic categories</li>
                    <li>• Daily content updates</li>
                    <li>• Unlimited downloads</li>
                    <li>• Early access to new content</li>
                    <li>• Direct communication access</li>
                    <li>• Custom content requests</li>
                    <li>• Cancel anytime (no refunds for partial months)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Topic Selection & Micro-Payments */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif mb-6">Step 2: Customize Your Topics</h3>
              
              <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                <h4 className="font-serif text-lg mb-4">Topic Unlock Fees</h4>
                <p className="text-foreground/80 text-sm mb-4">
                  Add additional topics beyond your base membership:
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[color:var(--sand)]/30">
                    <span className="text-sm">Individual Topic Access</span>
                    <span className="font-semibold">$5/month</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[color:var(--sand)]/30">
                    <span className="text-sm">Topic Bundle (3 topics)</span>
                    <span className="font-semibold">$12/month</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Complete Archive Access</span>
                    <span className="font-semibold">$25/month</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                <h4 className="font-serif text-lg mb-4">Content Download Fees</h4>
                <p className="text-foreground/80 text-sm mb-4">
                  Pay-per-download for new premium content:
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[color:var(--sand)]/30">
                    <span className="text-sm">Text Essays & Articles</span>
                    <span className="font-semibold">$0.99</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[color:var(--sand)]/30">
                    <span className="text-sm">Audio Recordings</span>
                    <span className="font-semibold">$1.99</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Video Content</span>
                    <span className="font-semibold">$2.99</span>
                  </div>
                </div>
              </div>

              {/* Example Calculator */}
              <div className="rounded-lg border border-[color:var(--accent)] p-6 bg-black/40">
                <h4 className="font-serif text-lg mb-4">💡 Example Scenarios</h4>
                
                <div className="space-y-4 text-sm">
                  <div className="p-3 bg-black/40 rounded">
                    <div className="font-semibold mb-2">Scenario A: Focused Learner</div>
                    <div className="text-foreground/80 space-y-1">
                      <div>• Basic Explorer ($15/month)</div>
                      <div>• +2 Philosophy topics ($10/month)</div>
                      <div>• +3 downloads ($3-6/month)</div>
                      <div className="font-semibold text-[color:var(--accent)] mt-2">Total: $28-31/month</div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-black/40 rounded">
                    <div className="font-semibold mb-2">Scenario B: Content Enthusiast</div>
                    <div className="text-foreground/80 space-y-1">
                      <div>• Deep Diver ($35/month)</div>
                      <div>• +Complete archive ($25/month)</div>
                      <div>• +10+ downloads ($10-30/month)</div>
                      <div className="font-semibold text-[color:var(--accent)] mt-2">Total: $70-90/month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Ready to start building your personalized access to my personal archive? 
              Choose your base level and customize from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.paypal.com/paypalme/MrMelo84/35"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple rounded-full bg-[color:var(--accent)] text-black px-8 py-4 text-lg font-medium hover:opacity-90"
              >
                Start with Deep Diver - $35/month
              </a>
              <Link 
                href="/contact"
                className="btn-ripple rounded-full border border-[color:var(--sand)] px-8 py-4 text-lg font-medium hover:bg-[color:var(--sand)]/30"
              >
                Discuss Custom Access</a></div><div className="flex flex-col sm:flex-row gap-4 justify-center mt-4"><Link href="/register" className="btn-ripple rounded-full border border-[color:var(--sand)] px-8 py-4 text-lg font-medium hover:bg-[color:var(--sand)]/30">Start Registration Process</Link></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl font-serif mb-8">Why Access The Confidential Archive?</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-2">🔒 Personal & Authentic</h3>
              <p className="text-foreground/80 text-sm">100% original content - no client work or commissioned material</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎯 Deep Insights</h3>
              <p className="text-foreground/80 text-sm">Unfiltered personal theories and observations across multiple disciplines</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📱 Multi-Format</h3>
              <p className="text-foreground/80 text-sm">Text essays, audio recordings, and video content for different learning styles</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💯 Exclusive Value</h3>
              <p className="text-foreground/80 text-sm">Content that exists nowhere else - purely personal and unique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Payment Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-serif text-center mb-12">Terms of Payment & Service</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                <h3 className="font-serif text-lg mb-4 text-[color:var(--accent)]">💳 Payment Terms</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li><strong>Auto-Renewal:</strong> Subscriptions renew automatically monthly/annually</li>
                  <li><strong>No Refunds:</strong> All payments are final and non-refundable</li>
                  <li><strong>Late Fees:</strong> $15 fee for failed payments requiring manual processing</li>
                  <li><strong>Currency:</strong> All prices in USD; conversion fees borne by customer</li>
                  <li><strong>Taxes:</strong> Customer responsible for all applicable taxes</li>
                </ul>
              </div>

              <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                <h3 className="font-serif text-lg mb-4 text-[color:var(--accent)]">🔄 Cancellation Policy</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li><strong>Easy Cancellation:</strong> Cancel anytime through account dashboard</li>
                  <li><strong>Access Until Period Ends:</strong> Continue until paid billing cycle completes</li>
                  <li><strong>No Refunds:</strong> No prorated refunds for partial months</li>
                  <li><strong>Content Retention:</strong> Downloaded content remains accessible</li>
                  <li><strong>Reactivation:</strong> Cancelled accounts may be reactivated within 30 days</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                <h3 className="font-serif text-lg mb-4 text-[color:var(--accent)]">⚖️ Legal Compliance</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li><strong>GDPR Compliant:</strong> EU data protection regulations followed</li>
                  <li><strong>CCPA Compliant:</strong> California privacy rights respected</li>
                  <li><strong>PCI DSS:</strong> Secure payment processing standards met</li>
                  <li><strong>Intellectual Property:</strong> All content owned by MrMelo</li>
                  <li><strong>Personal Use Only:</strong> Content for individual use exclusively</li>
                </ul>
              </div>

              <div className="rounded-lg border border-[color:var(--sand)] p-6 bg-black/40">
                <h3 className="font-serif text-lg mb-4 text-[color:var(--accent)]">🛡️ Liability & Support</h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li><strong>Limited Liability:</strong> Service provided &quot;as-is&quot; with reasonable care</li>
                  <li><strong>Technical Support:</strong> 24-48 hour response time</li>
                  <li><strong>Dispute Resolution:</strong> Arbitration for disputes over $500</li>
                  <li><strong>Governing Law:</strong> United States law with international considerations</li>
                  <li><strong>Service Availability:</strong> Best efforts made for consistent access</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-foreground/60 text-sm">
              By proceeding with payment, you agree to these terms. For full details, see our complete Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h2 className="text-2xl font-serif text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border border-[color:var(--sand)] rounded-lg p-6">
              <h3 className="font-semibold mb-2">Is this content original and personal?</h3>
              <p className="text-foreground/80">Absolutely. This archive contains only my original personal thoughts, theories, and creative work. No client projects, commissioned content, or work created for others is included.</p>
            </div>
            
            <div className="border border-[color:var(--sand)] rounded-lg p-6">
              <h3 className="font-semibold mb-2">What topics are covered?</h3>
              <p className="text-foreground/80">The archive covers philosophy, economics, relationships, business, self-development, creativity, society, ethics, health, education, technology, spirituality, productivity, and communication - all through my personal lens.</p>
            </div>
            
            <div className="border border-[color:var(--sand)] rounded-lg p-6">
              <h3 className="font-semibold mb-2">How quickly do I get access?</h3>
              <p className="text-foreground/80">Instantly! After successful PayPal payment, you&apos;ll receive an email with your unique access password within minutes.</p>
            </div>

            <div className="border border-[color:var(--sand)] rounded-lg p-6">
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-foreground/80">Yes! Cancel anytime through your account dashboard. Access continues until the end of your paid billing period. No refunds for partial months, but you keep all downloaded content.</p>
            </div>

            <div className="border border-[color:var(--sand)] rounded-lg p-6">
              <h3 className="font-semibold mb-2">What if I have payment issues?</h3>
              <p className="text-foreground/80">Contact support immediately. We offer a 3-day payment retry period, after which a $15 processing fee applies. Accounts are suspended after 7 days of non-payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-2xl font-serif mb-4">Ready to Explore My Personal Archive?</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
            Discover the unfiltered thoughts, theories, and creative work that shape my perspective on the world. 
            This is where philosophy meets business, creativity meets strategy, and personal insights become universal wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.paypal.com/paypalme/MrMelo84/35"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ripple rounded-full bg-[color:var(--accent)] text-black px-8 py-4 text-lg font-medium hover:opacity-90"
            >
              Start with Deep Diver - $35/month
            </a>
            <Link 
              href="/contact"
              className="btn-ripple rounded-full border border-[color:var(--sand)] px-8 py-4 text-lg font-medium hover:bg-[color:var(--sand)]/30"
            >
              Have Questions?</Link></div></div><div className="text-center mt-12"><div className="bg-black/20 rounded-lg p-8"><h2 className="text-2xl font-serif mb-4">Ready to Get Started?</h2><p className="text-foreground/80 mb-6 max-w-2xl mx-auto">Join the exclusive community with access to my personal archive of insights and creative work. Get your personalized access code in under 2 minutes.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/register" className="btn-ripple rounded-full bg-[color:var(--accent)] text-black px-8 py-4 text-lg font-medium hover:opacity-90">Create Your Access Code</Link></div></div></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
