#!/bin/bash
# Create a corrected version of the confidential-archive page
head -350 src/app/confidential-archive/page.tsx > temp_confidential.tsx

# Add the corrected section
cat >> temp_confidential.tsx << 'CORRECTED'
              <Link 
                href="/contact"
                className="btn-ripple rounded-full border border-[color:var(--sand)] px-8 py-4 text-lg font-medium hover:bg-[color:var(--sand)]/30"
              >
                Discuss Custom Access
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link 
                href="/register" 
                className="btn-ripple rounded-full border border-[color:var(--sand)] px-8 py-4 text-lg font-medium hover:bg-[color:var(--sand)]/30"
              >
                Start Registration Process
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
    </>
  );
}
