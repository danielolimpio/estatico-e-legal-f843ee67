import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Sem taxas ocultas',
  'Suporte 24/7',
  'Garantia de satisfação',
];

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      {/* Decorative lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Comece Gratuitamente
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Construa o patrimônio que seu{' '}
            <span className="text-gradient">futuro merece</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de investidores que confiam na Aurum para gerenciar 
            e multiplicar seu patrimônio com segurança e inteligência.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                Criar Conta Grátis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
