import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Bot, 
  Sparkles, 
  Zap, 
  Building2, 
  CreditCard, 
  ArrowRightLeft, 
  Coins,
  Crown,
  ArrowRight,
  CheckCircle2,
  Shield,
  TrendingUp,
  Globe,
  Users
} from 'lucide-react';

const Plataforma = () => {
  const ecosystemProducts = [
    {
      icon: Bot,
      title: "EX-AI Bot",
      description: "Sistema de negociação autônomo 24/7 com retorno médio de +18,5% ao mês.",
      highlight: "+18,5% mensal"
    },
    {
      icon: Sparkles,
      title: "Zeus AI Bot",
      description: "Gestão inteligente de criptoativos com renda passiva via Telegram.",
      highlight: "10-15% mensal"
    },
    {
      icon: Zap,
      title: "Flash Loans",
      description: "Arbitragem inteligente sem colateral com até 270% APY.",
      highlight: "270% APY"
    },
    {
      icon: Building2,
      title: "Neo-Bank",
      description: "Hub financeiro completo para armazenar, trocar e gastar criptomoedas.",
      highlight: "90% lucro"
    },
    {
      icon: CreditCard,
      title: "Aurum Card",
      description: "Pagamentos cripto com tecnologia Tap & Go em milhões de locais.",
      highlight: "$100K/mês"
    },
    {
      icon: ArrowRightLeft,
      title: "Exchange",
      description: "DEX de próxima geração com liquidez profunda e negociação cross-chain.",
      highlight: "Em breve"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção de ativos através de tecnologia blockchain e smart contracts auditados."
    },
    {
      icon: TrendingUp,
      title: "Rendimentos Consistentes",
      description: "Algoritmos de IA otimizados para maximizar retornos com risco controlado."
    },
    {
      icon: Globe,
      title: "Acesso Global",
      description: "Plataforma disponível em todo o mundo com suporte multi-idioma."
    },
    {
      icon: Users,
      title: "Comunidade Vibrante",
      description: "Junte-se a milhares de investidores que confiam na Aurum Foundation."
    }
  ];

  return (
    <>
      <SEOHead
        title="Plataforma Aurum | Ecossistema Financeiro Completo"
        description="Conheça a plataforma Aurum Foundation: um ecossistema completo de produtos e serviços para gestão de ativos digitais."
        canonicalUrl="https://aurum.foundation/plataforma"
        keywords="Aurum plataforma, ecossistema cripto, IA, trading, blockchain"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                PLATAFORMA AURUM
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                O Ecossistema Financeiro{' '}
                <span className="text-gradient">do Futuro</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Uma plataforma completa que combina inteligência artificial, blockchain e finanças descentralizadas para transformar sua experiência com ativos digitais.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-glow" asChild>
                  <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                    Acessar Plataforma
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/servicos">Ver Serviços</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Products */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Nosso <span className="text-gradient">Ecossistema</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Produtos e serviços integrados para maximizar seu potencial financeiro.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystemProducts.map((product, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {product.highlight}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Token Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <Coins className="h-8 w-8 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Token Nativo
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  AURUM Token — O Coração do{' '}
                  <span className="text-gradient">Ecossistema</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O AURUM Token é o ativo nativo que impulsiona todo o ecossistema, oferecendo utilidade inigualável e benefícios exclusivos para os detentores.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Acesso a ferramentas de arbitragem por IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Staking com recompensas passivas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Mecanismo deflacionário que aumenta valor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Crescimento de 2,5% a cada $1M em vendas</span>
                  </li>
                </ul>
                <Button className="btn-glow" asChild>
                  <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                    Adquirir AURUM Token
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 flex items-center justify-center border border-primary/20">
                  <Coins className="w-48 h-48 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Por que escolher a{' '}
                <span className="text-gradient">Aurum</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8">
                    <div className="mx-auto w-fit p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Crown className="h-6 w-6 text-primary" />
                      <span className="text-sm font-semibold text-primary">ASSINATURA PREMIUM</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                      Plano de Assinatura Aurum
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Desbloqueie acesso completo a todos os produtos e serviços por apenas <span className="text-primary font-bold text-2xl">$19,99/ano</span>
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Acesso exclusivo a todos os produtos</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Participação no Plano de Marketing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Comunidade vibrante de investidores</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>Programas educacionais exclusivos</span>
                      </li>
                    </ul>
                    <Button size="lg" className="btn-glow" asChild>
                      <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                        Assinar Agora
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-8 rounded-full bg-gradient-to-br from-primary to-accent">
                      <Crown className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Plataforma;
