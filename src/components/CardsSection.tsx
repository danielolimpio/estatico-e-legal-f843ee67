import { Button } from './ui/button';
import { CreditCard, Zap, Globe, Shield, ArrowRight } from 'lucide-react';
import cardsImage from '@/assets/cards-image.webp';

const features = [
  {
    icon: Zap,
    title: 'Tap & Go',
    description: 'Integração com Apple Pay e Google Pay'
  },
  {
    icon: Globe,
    title: 'Aceito Globalmente',
    description: 'Milhões de locais ao redor do mundo'
  },
  {
    icon: Shield,
    title: 'Seguro',
    description: 'Taxas transparentes sem custos ocultos'
  }
];

const CardsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <CreditCard className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Aurum Card</span>
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              O Futuro dos{' '}
              <span className="text-gradient">Pagamentos com Cripto</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pague com cripto como se fosse dinheiro. O Aurum Card conecta o mundo das criptomoedas 
              à finança tradicional, permitindo conversões instantâneas e pagamentos em milhões de estabelecimentos.
            </p>
            
            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col p-4 rounded-xl bg-muted/50 border border-border/50">
                  <feature.icon className="w-6 h-6 text-primary mb-2" />
                  <span className="font-semibold text-sm mb-1">{feature.title}</span>
                  <span className="text-xs text-muted-foreground">{feature.description}</span>
                </div>
              ))}
            </div>
            
            {/* Highlight */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8">
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">$100K</span>
                <span className="block text-xs text-muted-foreground">Limite mensal</span>
              </div>
              <div className="h-10 w-px bg-border" />
              <span className="text-sm text-muted-foreground">
                Sem verificação KYC para o cartão <span className="text-primary font-semibold">Infinity</span>
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="/cartoes">
                  Conhecer Cartões
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                  Solicitar Agora
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up animation-delay-200">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl scale-110 opacity-50" />
              
              <img
                src={cardsImage}
                alt="Aurum Cards - Infinity, World Elite e Imperium"
                className="relative z-10 w-full max-w-lg lg:max-w-xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
