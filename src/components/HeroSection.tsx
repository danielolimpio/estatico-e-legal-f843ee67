import { Button } from './ui/button';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 right-0 w-px h-40 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-1/3 left-10 w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-primary animate-float opacity-60" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/50 animate-float animation-delay-200" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
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
            <Button variant="hero" size="xl" className="group">
              Começar Agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
