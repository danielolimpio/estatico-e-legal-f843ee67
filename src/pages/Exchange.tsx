import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  ArrowRight,
  ArrowRightLeft,
  Globe,
  Shield,
  Layers,
  BarChart3,
  DollarSign,
  Lock,
  Zap,
  CheckCircle2
} from 'lucide-react';

const Exchange = () => {
  const exchangeTypes = [
    {
      title: "Exchanges Centralizadas (CEX)",
      description: "Operadas por uma empresa que atua como intermediária, oferecendo transações rápidas, mas exigindo que os usuários confiem em terceiros."
    },
    {
      title: "Exchanges Descentralizadas (DEX)",
      description: "Construídas em tecnologia blockchain, permitem que os usuários negociem diretamente de suas carteiras sem depender de intermediários."
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Liquidez Profunda",
      description: "Execução rápida de ordens e condições de negociação competitivas."
    },
    {
      icon: Globe,
      title: "Compatibilidade Cross-Chain",
      description: "Negocie ativos entre diferentes blockchains sem intermediários."
    },
    {
      icon: DollarSign,
      title: "Suporte a Fiat",
      description: "Entrada e saída fáceis com moedas tradicionais."
    },
    {
      icon: Layers,
      title: "Opções de Negociação Abrangentes",
      description: "De negociação à vista a futuros e derivativos."
    },
    {
      icon: Lock,
      title: "Protocolos de Segurança Avançados",
      description: "Protegendo ativos através de tecnologia de smart contracts e medidas de segurança de ponta."
    }
  ];

  const techFeatures = [
    "Motor de negociação de alta velocidade com latência mínima",
    "Estrutura transparente e descentralizada sem taxas ocultas",
    "Interface amigável para iniciantes e traders profissionais"
  ];

  return (
    <>
      <SEOHead
        title="Aurum Exchange | Revolucionando a Negociação Descentralizada"
        description="Aurum Exchange é uma DEX de próxima geração projetada para oferecer liquidez profunda e negociação cross-chain contínua."
        canonicalUrl="https://aurum.foundation/exchange"
        keywords="Aurum Exchange, DEX, exchange descentralizada, cripto, trading, cross-chain"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
                AURUM<br />EXCHANGE:
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-wider mb-8">
                Revolucionando a Negociação Descentralizada
              </p>
              <Button size="lg" className="btn-glow" asChild>
                <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                  Entrar na Lista de Espera
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What is Crypto Exchange */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm text-primary font-medium">O que é uma Exchange de Cripto?</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
                  Uma <span className="text-gradient">exchange de cripto</span> é um mercado digital onde usuários podem comprar, vender e negociar criptomoedas.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  As exchanges desempenham um papel crucial no ecossistema blockchain ao fornecer liquidez, descoberta de preços e um ambiente seguro para transações.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl aspect-video" />
            </div>
          </div>
        </section>

        {/* Exchange Types */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-primary to-accent p-8 border-0">
                <CardContent className="p-0">
                  <h3 className="text-xl font-display font-bold text-white mb-4">
                    Existem dois tipos principais de exchanges:
                  </h3>
                </CardContent>
              </Card>
              {exchangeTypes.map((type, index) => (
                <Card 
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <h3 className="text-lg font-semibold text-primary mb-3">{type.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future of Trading */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  O FUTURO <span className="text-gradient">DA NEGOCIAÇÃO</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <span className="text-primary font-semibold">Aurum Exchange</span> é uma exchange descentralizada (DEX) de próxima geração atualmente em desenvolvimento, projetada para oferecer <span className="underline decoration-primary">liquidez profunda e negociação cross-chain contínua</span>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Combinando negociação à vista, futuros e derivativos com suporte a fiat, estamos construindo uma plataforma que entrega <span className="font-semibold">eficiência, flexibilidade e segurança para todos os traders</span>.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl aspect-square" />
            </div>
          </div>
        </section>

        {/* Why Aurum Exchange */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              POR QUE <span className="text-gradient">AURUM EXCHANGE</span>?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-fit p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Building the Future */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">CONSTRUINDO O</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  <span className="text-gradient">FUTURO</span> DAS FINANÇAS DIGITAIS
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Aurum Exchange está sendo desenvolvida com escalabilidade e adaptabilidade como base. Nossa stack de tecnologia garante:
                </p>
                <ul className="space-y-3">
                  {techFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right text-muted-foreground text-sm">
                <span className="text-primary">#AurumExchange</span>
              </div>
            </div>
          </div>
        </section>

        {/* Launching Soon */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl aspect-video" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  LANÇANDO <span className="text-gradient">EM BREVE!</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <span className="text-primary font-semibold">Aurum Exchange está atualmente em desenvolvimento</span>, e estamos preparando acesso antecipado exclusivo para um grupo seleto de usuários.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Seja um dos primeiros a experimentar a próxima era da negociação descentralizada — junte-se à nossa lista de espera agora e garanta sua vaga para acesso beta. O futuro da negociação começa aqui!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input placeholder="Insira seu e-mail" className="flex-1" />
                  <Button className="btn-glow" asChild>
                    <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                      Entrar na lista de espera
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Exchange;
