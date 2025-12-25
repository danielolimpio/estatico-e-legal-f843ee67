import { Cpu, CreditCard, LineChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'IA Avançada',
    description: 'Algoritmos de inteligência artificial que otimizam suas estratégias de investimento em tempo real.',
  },
  {
    icon: Shield,
    title: 'Segurança Total',
    description: 'Proteção de nível institucional com criptografia de ponta e auditoria contínua.',
  },
  {
    icon: CreditCard,
    title: 'Cartão Digital',
    description: 'Acesse seus fundos instantaneamente com nosso cartão virtual e físico integrado.',
  },
  {
    icon: LineChart,
    title: 'Analytics Pro',
    description: 'Dashboard completo com métricas avançadas e relatórios personalizados.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Ecossistema Completo</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground">
            Uma plataforma integrada que combina o melhor da tecnologia financeira com facilidade de uso.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <article 
              key={feature.title}
              className="stat-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-4 -right-8 w-16 h-px bg-gradient-to-r from-primary/30 to-transparent rotate-45" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
