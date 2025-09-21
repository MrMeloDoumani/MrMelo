import Link from "next/link";

/**
 * Content of Character Index (CCI) Page
 *
 * Hidden page explaining the Content of Character equation and methodology
 * Uses same aesthetics as main site with black background and gold accents
 *
 * Features:
 * - Mathematical equation for CCI
 * - Detailed explanations for business and social-minded readers
 * - Professional academic-style presentation
 *
 * Last Updated: September 21, 2025
 * Status: Production Ready
 */
export default function ContentOfCharacterPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.08) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
            Content of Character Index
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A mathematical framework for measuring and evolving character capital in business and social contexts.
          </p>
        </div>

        {/* Equation */}
        <div className="bg-slate-900/50 rounded-lg p-8 mb-12 border border-slate-700/50">
          <h2 className="text-2xl font-serif mb-6 text-amber-200">The Equation</h2>
          <div className="bg-black/50 p-6 rounded border border-slate-600">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-mono text-amber-100 mb-4">
                CCI(t) = RD(t) &times; L(t) &times; F(t) &times; [ &Sigma;<sub>i &isin; D</sub> w<sub>i</sub> &middot; P<sub>i</sub>(t) &middot; K<sub>i</sub>(t) ] / [ 1 + B(t) ]
              </div>
            </div>
          </div>
        </div>

        {/* Indicator Definitions */}
        <div className="bg-slate-900/50 rounded-lg p-8 mb-12 border border-slate-700/50">
          <h2 className="text-2xl font-serif mb-6 text-amber-200">Indicator Definitions</h2>
          <div className="space-y-4 text-gray-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold text-amber-200 mb-2">RD(t) ∈ [0,1] – Recognition of Duality</div>
                <p className="text-sm">Awareness that each trait can manifest constructively or harmfully.</p>
              </div>
              <div>
                <div className="font-semibold text-amber-200 mb-2">L(t) ∈ [-1,1] – Free-will Lean</div>
                <p className="text-sm">Directional choice at time t (constructive = +1, harmful = -1).</p>
              </div>
              <div>
                <div className="font-semibold text-amber-200 mb-2">F(t) = A(t)·I(t)·Ap(t) – Evolution Bundle</div>
                <div className="text-xs space-y-1">
                  <p><strong>A(t)</strong> ∈ [0,1] – Adaptability (openness, learning, reform willingness)</p>
                  <p><strong>I(t)</strong> ∈ [0,1] – Interpretation accuracy (clarity, bias resistance)</p>
                  <p><strong>Ap(t)</strong> ∈ [0,1] – Application (embedding lessons into lived action)</p>
                </div>
              </div>
              <div>
                <div className="font-semibold text-amber-200 mb-2">Dimensions & Weights</div>
                <div className="text-xs space-y-1">
                  <p><strong>D</strong> – Set of dimensions: Moral Alignment (M), Ethics (E), Principles (P), Vision (V), Ambition (Amb), Values in Practice (X)</p>
                  <p><strong>w<sub>i</sub></strong> ≥ 0, Σ w<sub>i</sub> = 1 – Weight assigned to each dimension</p>
                  <p><strong>P<sub>i</sub>(t)</strong> ≥ 0 – Potential magnitude of trait i (capacity for impact)</p>
                  <p><strong>K<sub>i</sub>(t)</strong> ∈ [0,1] – Consistency of behavior with stated values</p>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-amber-200 mb-2">B(t) ≥ 0 – Burden from Corrupting Influences</div>
              <p className="text-sm">Burden from primary & secondary agents (toxicity, regulatory pressure, burnout, misaligned incentives).</p>
            </div>
          </div>
        </div>

        {/* Business-Minded Narrative */}
        <div className="bg-slate-900/50 rounded-lg p-8 mb-8 border border-slate-700/50">
          <h2 className="text-2xl font-serif mb-6 text-indigo-200">For Business-Minded Readers</h2>
          <div className="space-y-4 text-gray-300">
            <p>The CCI works like a &ldquo;character-capital KPI.&rdquo;</p>

            <div>
              <h3 className="font-semibold text-indigo-200 mb-2">Recognition of Duality (RD)</h3>
              <p className="text-sm">Is a manager&apos;s situational awareness: knowing that confidence, competitiveness, or curiosity can be a growth driver or a risk factor. Higher RD means you can proactively guard against downsides.</p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-200 mb-2">Free-will Lean (L)</h3>
              <p className="text-sm">Reflects strategic intent. Choosing the constructive direction (+1) aligns actions with long-term value creation; drifting toward the negative side (-1) signals tactical shortcuts that may harm the organization.</p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-200 mb-2">Evolution Bundle (F = A·I·Ap)</h3>
              <p className="text-sm">Captures organizational agility: Adaptability (A) – ability to pivot when markets shift. Interpretation accuracy (I) – reading data cleanly, resisting bias. Application (Ap) – disciplined execution that turns insight into results. Because they multiply, a weakness in any one drags the whole bundle down, just as a weak link can break a supply chain.</p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-200 mb-2">Weighted Dimension Sum (Σ w<sub>i</sub>·P<sub>i</sub>·K<sub>i</sub>)</h3>
              <p className="text-sm">Maps to a competency model. Assign higher weights to dimensions critical for a role (e.g., Ethics, Vision, Ambition). P<sub>i</sub> is the raw potential of that skill; K<sub>i</sub> measures whether the employee consistently lives it. Multiplying gives a realistic contribution, and summing across dimensions yields total &ldquo;character capital&rdquo; you can draw on.</p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-200 mb-2">Burden (B)</h3>
              <p className="text-sm">Represents cultural and operational drag—toxicity, regulatory pressure, burnout, or misaligned incentives. Since it sits in the denominator as 1 + B, a larger burden shrinks the overall CCI, just like high overhead cuts profit margins.</p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-200 mb-2">Dynamic Update</h3>
              <p className="text-sm">dCCI/dt = γ·A·ΔX<sub>exp</sub> – δ·(1–W)·B shows how the score evolves: γ·A·ΔX<sub>exp</sub> – learning from high-quality experiences (wins, successful pivots) multiplied by adaptability raises the score. δ·(1–W)·B – when actual decisions drift from the intended strategic lean (W = free-will coherence) and the burden remains high, the score falls.</p>
            </div>

            <div className="bg-indigo-900/20 p-4 rounded border border-indigo-500/20">
              <p className="font-semibold text-indigo-200">Bottom line:</p>
              <p className="text-sm">Treat CCI as a measurable asset. Improving awareness, intent, adaptability, consistency, and reducing burden directly lifts the invisible character capital that fuels ethical risk mitigation, employee engagement, and sustainable profitability.</p>
            </div>
          </div>
        </div>

        {/* Social-Minded Narrative */}
        <div className="bg-slate-900/50 rounded-lg p-8 mb-8 border border-slate-700/50">
          <h2 className="text-2xl font-serif mb-6 text-purple-200">For Social-Minded Readers</h2>
          <div className="space-y-4 text-gray-300">
            <p>The CCI serves as a diagnostic of collective character health.</p>

            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Recognition of Duality (RD)</h3>
              <p className="text-sm">Is self-awareness: realizing that traits such as passion or anger can build community or fuel division. Higher RD means citizens pause, reflect, and choose the constructive route.</p>
            </div>

            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Free-will Lean (L)</h3>
              <p className="text-sm">Captures intentional solidarity. Choosing compassionate, inclusive actions (positive L) versus selfish or aggressive reactions (negative L) shapes the social fabric.</p>
            </div>

            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Evolution Bundle (F = A·I·Ap)</h3>
              <p className="text-sm">Reflects personal and communal growth: Adaptability (A) – openness to new ideas, cultural humility. Interpretation accuracy (I) – seeing facts clearly, resisting misinformation. Application (Ap) – turning empathy into concrete deeds (volunteering, advocacy). A deficit in any area stalls good intentions.</p>
            </div>

            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Weighted Dimension Sum (Σ w<sub>i</sub>·P<sub>i</sub>·K<sub>i</sub>)</h3>
              <p className="text-sm">Maps community values. A neighborhood may weight Moral Alignment and Values in Practice heavily while de-emphasizing raw Ambition. P<sub>i</sub> shows how much impact a value could have; K<sub>i</sub> checks whether people actually live that value. The sum tells you how much &ldquo;collective character&rdquo; truly exists.</p>
            </div>

            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Burden (B)</h3>
              <p className="text-sm">Captures systemic pressures—poverty, discrimination, echo chambers, oppressive policies—that erode the ability to act constructively. Because it sits in the denominator, larger burdens pull the whole index down.</p>
            </div>

            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Dynamic Update</h3>
              <p className="text-sm">dCCI/dt = γ·A·ΔX<sub>exp</sub> – δ·(1–W)·B illustrates change over time: ΔX<sub>exp</sub> is the net quality of life experiences (education, mentorship, restorative justice). Positive experiences, combined with adaptability, push the score upward. W measures alignment between declared values (e.g., &ldquo;I stand for climate justice&rdquo;) and actual behavior (e.g., reducing personal carbon footprint). Gaps, amplified by lingering burdens, drag the score down.</p>
            </div>

            <div className="bg-purple-900/20 p-4 rounded border border-purple-500/20">
              <p className="font-semibold text-purple-200">Bottom line:</p>
              <p className="text-sm">CCI provides a clear picture of where self-awareness, intentional solidarity, quality experiences, and systemic barriers intersect. Raising RD, L, A, I, Ap, and K while dismantling B strengthens the collective character that underpins resilient, equitable societies.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg font-semibold hover:from-slate-600 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-slate-500/25"
          >
            ← Return to MrMelo.com
          </Link>
        </div>
      </div>
    </div>
  );
}
