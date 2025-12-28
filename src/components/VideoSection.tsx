import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoSectionProps {
  videoId: string;
  size?: 'normal' | 'large';
}

const VideoSection = ({ videoId, size = 'normal' }: VideoSectionProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const sizeClasses = size === 'large' 
    ? 'max-w-5xl' 
    : 'max-w-4xl';

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10">
        <div className={`${sizeClasses} mx-auto`}>
          {/* Premium Frame Container */}
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/15 to-primary/30 rounded-3xl blur-2xl" />
            
            {/* Premium Border Frame */}
            <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-primary via-primary/70 to-primary/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
              {/* Inner Frame */}
              <div className="p-[2px] rounded-[14px] bg-background">
                {/* Video Container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-muted">
                  {!isVideoLoaded ? (
                    <button
                      onClick={() => setIsVideoLoaded(true)}
                      className="absolute inset-0 group cursor-pointer"
                      aria-label="Reproduzir vídeo"
                    >
                      {/* Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="Thumbnail do vídeo"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('hqdefault')) {
                            target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                          }
                        }}
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-background/30 flex items-center justify-center transition-all duration-300 group-hover:bg-background/10">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50 group-hover:shadow-2xl">
                          <Play className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                      title="Vídeo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  )}
                </div>
              </div>
            </div>
            
            {/* Decorative Corner Elements */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-xl" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-xl" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
