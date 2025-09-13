export default function HighlightsPage() {
  // Video highlights from the Video Highlights folder
  // When you add videos to /public/video-highlights/, update this array with their details
  const videoHighlights = [
    {
      id: 'showreel-main',
      title: 'Creative Showreel',
      description: 'Comprehensive showcase of visual storytelling and multimedia production excellence',
      src: '/video-highlights/showreel-main.mp4',
      thumbnail: '/video-highlights/thumbnails/showreel-main.jpg'
    },
    {
      id: 'brand-story',
      title: 'Brand Storytelling',
      description: 'Strategic narratives that connect brands with their audiences on a deeper level',
      src: '/video-highlights/brand-story.mp4',
      thumbnail: '/video-highlights/thumbnails/brand-story.jpg'
    },
    {
      id: 'product-showcase',
      title: 'Product Showcase',
      description: 'Elegant presentations that highlight product features and user experiences',
      src: '/video-highlights/product-showcase.mp4',
      thumbnail: '/video-highlights/thumbnails/product-showcase.jpg'
    },
    {
      id: 'documentary-style',
      title: 'Documentary Style',
      description: 'Authentic storytelling that captures real moments and genuine narratives',
      src: '/video-highlights/documentary-style.mp4',
      thumbnail: '/video-highlights/thumbnails/documentary-style.jpg'
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics',
      description: 'Dynamic visual communication that brings data and concepts to life',
      src: '/video-highlights/motion-graphics.mp4',
      thumbnail: '/video-highlights/thumbnails/motion-graphics.jpg'
    },
    {
      id: 'client-testimonial',
      title: 'Client Success Stories',
      description: 'Real results and testimonials from satisfied clients and partners',
      src: '/video-highlights/client-testimonial.mp4',
      thumbnail: '/video-highlights/thumbnails/client-testimonial.jpg'
    },
    {
      id: 'behind-scenes',
      title: 'Behind the Scenes',
      description: 'The creative process and production journey that brings projects to life',
      src: '/video-highlights/behind-scenes.mp4',
      thumbnail: '/video-highlights/thumbnails/behind-scenes.jpg'
    },
    {
      id: 'portfolio-highlights',
      title: 'Portfolio Highlights',
      description: 'Curated selection of our finest work across various industries and formats',
      src: '/video-highlights/portfolio-highlights.mp4',
      thumbnail: '/video-highlights/thumbnails/portfolio-highlights.jpg'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
            Video Highlights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing excellence in visual storytelling, creative direction, and multimedia production.
            Each piece represents the pinnacle of craft and strategic communication.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videoHighlights.map((video) => (
            <article
              key={video.id}
              className="group relative bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Video Container */}
              <div className="relative aspect-[16/9] w-full">
                <video
                  className="w-full h-full object-cover rounded-t-xl"
                  controls
                  preload="metadata"
                  poster={video.thumbnail}
                  muted
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-6 py-3 mb-6">
            <span className="text-yellow-400 text-sm font-medium">🎬 More Content Available</span>
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Additional video highlights and client work samples available upon request.
            Contact us to discuss your specific project needs.
          </p>
        </div>
      </div>
    </section>
  );
}


