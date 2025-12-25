import { Button } from './ui/button';
import { ArrowRight, Shield, Zap, Play } from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoId = 'aPk6FUIHnSs';

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-1/3 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/3 left-10 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary animate-float opacity-60" />
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 rounded-full bg-primary/50 animate-float animation-delay-200" />

      {/* Premium Video - Right Side (Desktop Only) */}
      <div className="absolute top-1/2 -translate-y-1/2 -mt-12 xl:-mt-16 right-[5%] xl:right-[8%] 2xl:right-[10%] hidden lg:flex items-center z-20 animate-fade-up animation-delay-200">
        {/* Premium Frame Container */}
        <div className="relative">
          {/* Outer Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-primary/15 to-primary/30 rounded-3xl blur-2xl" />
          
          {/* Premium Border Frame */}
          <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-primary via-primary/70 to-primary/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
            {/* Inner Frame */}
            <div className="p-[2px] rounded-[14px] bg-background">
              {/* Video Container - Responsive sizes */}
              <div className="relative w-[480px] lg:w-[420px] xl:w-[520px] 2xl:w-[640px] 3xl:w-[720px] aspect-video rounded-xl overflow-hidden bg-muted">
                {!isVideoLoaded ? (
                  <button
                    onClick={() => setIsVideoLoaded(true)}
                    className="absolute inset-0 group cursor-pointer"
                    aria-label="Reproduzir vídeo"
                  >
                    {/* Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Thumbnail do vídeo"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-background/30 flex items-center justify-center transition-all duration-300 group-hover:bg-background/10">
                      <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-primary flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50 group-hover:shadow-2xl">
                        <Play className="w-6 h-6 xl:w-8 xl:h-8 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </button>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Vídeo Institucional"
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

      <div className="container relative z-10">
        <div className="lg:w-1/2 lg:pr-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Plataforma Segura & Regulamentada</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
            A maneira mais segura de{' '}
            <span className="text-gradient">gerenciar seus ativos</span>{' '}
            digitais
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up animation-delay-200">
            Tecnologia financeira de última geração com inteligência artificial e blockchain. 
            Gestão patrimonial automatizada para investidores modernos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                Começar Agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl">
              Conhecer Plataforma
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm">100% Automatizado</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Criptografia Avançada</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm font-semibold text-foreground">10M+</span>
              <span className="text-sm">em ativos gerenciados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
