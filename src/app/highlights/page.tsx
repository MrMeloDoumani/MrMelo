// Helper function to get MIME type based on file extension
const getVideoMimeType = (filename: string): string => {
  const extension = filename.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'mp4':
    case 'm4v':
      return 'video/mp4';
    case 'mov':
      return 'video/quicktime';
    case 'webm':
      return 'video/webm';
    case 'avi':
      return 'video/x-msvideo';
    default:
      return 'video/mp4'; // fallback
  }
};

export default function HighlightsPage() {
  // Video highlights from the Video Highlights folder
  const videoHighlights = [
    {
      id: 'bulletin',
      title: 'Bulletin',
      description: 'Dynamic bulletin-style presentation showcasing key messaging and brand communication',
      src: 'https://sgkqgi3mjft1jnni.public.blob.vercel-storage.com/Bulletin.mp4',
      thumbnail: '/video-highlights/thumbnails/Bulletin.jpg'
    },
    {
      id: 'creative-video-essay',
      title: 'Creative Video Essay',
      description: 'Thought-provoking video essay exploring creative concepts and innovative storytelling',
      src: 'https://sgkqgi3mjft1jnni.public.blob.vercel-storage.com/Creative%20Video%20Essay.mp4',
      thumbnail: '/video-highlights/thumbnails/Creative Video Essay.jpg'
    },
    {
      id: 'foundernomics-song-commercial',
      title: 'Foundernomics Song Commercial',
      description: 'Musical commercial for Foundernomics, blending business insights with engaging audio-visual content',
      src: 'https://sgkqgi3mjft1jnni.public.blob.vercel-storage.com/Foundernomics%20Song%20Commercial.mp4',
      thumbnail: '/video-highlights/thumbnails/Foundernomics Song Commercial.jpg'
    },
    {
      id: 'mock-commercial-sahara',
      title: 'Mock Commercial (Sahara)',
      description: 'Creative mock commercial demonstrating advertising concepts and brand storytelling',
      src: 'https://sgkqgi3mjft1jnni.public.blob.vercel-storage.com/Mock%20Commercial%20%28Sahara%29.MP4',
      thumbnail: '/video-highlights/thumbnails/Mock Commercial (Sahara).jpg'
    },
    {
      id: 'mock-podcast-tansweer',
      title: 'Mock Podcast (Tansweer)',
      description: 'Engaging podcast-style content exploring business and entrepreneurial topics',
      src: 'https://sgkqgi3mjft1jnni.public.blob.vercel-storage.com/Mock%20Commercial%20%28Tanweer%29.mp4',
      thumbnail: '/video-highlights/thumbnails/Mock Podcast (Tansweer).jpg'
    },
    {
      id: 'social-media-creation',
      title: 'Social Media Creation',
      description: 'Professional social media content creation with voiceover and visual storytelling',
      src: 'https://sgkqgi3mjft1jnni.public.blob.vercel-storage.com/Social%20Media%20Creation%20Voiced.MOV',
      thumbnail: '/video-highlights/thumbnails/Social Media Creation Voiced.jpg'
    },
    {
      id: 'testimonials',
      title: 'Client Testimonials',
      description: 'Authentic testimonials from satisfied clients sharing their success stories and experiences',
      src: 'https://sgkqgi3mjft1jnni.public.blob.vercel-storage.com/Testiomonials.MP4',
      thumbnail: '/video-highlights/thumbnails/Testiomonials.jpg'
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
                  <source src={video.src} type={getVideoMimeType(video.src)} />
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


