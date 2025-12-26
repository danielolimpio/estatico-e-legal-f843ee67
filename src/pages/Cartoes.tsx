import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CreditCard, 
  Smartphone, 
  Globe, 
  ArrowRight,
  Zap,
  Shield,
  RefreshCw,
  CheckCircle2,
  Wallet,
  DollarSign
} from 'lucide-react';

const Cartoes = () => {
  const cardTypes = [
    {
      name: "Virtual Card",
      description: "Cartão virtual para compras online",
      price: "$49",
      features: ["Ativação instantânea", "Compras online", "Limite de $10.000/mês"]
    },
    {
      name: "Physical Card",
      description: "Cartão físico para uso em qualquer lugar",
      price: "$149",
      features: ["Entrega global", "Tap & Go", "Limite de $50.000/mês"]
    },
    {
      name: "Infinity Card",
      description: "Para usuários de alto volume",
      price: "$249",
      features: ["Sem KYC", "Premium support", "Limite de $100.000/mês"]
    }
  ];

  const stats = [
    { value: "$249", label: "Taxa única de emissão" },
    { value: "2,2%", label: "Comissão para recarga USDT" },
    { value: "até $150", label: "Bônus por indicação de cartão" },
    { value: "$100.000", label: "Limite mensal sem KYC" }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Sem contato e compatível com dispositivos móveis",
      description: "O Aurum Card se integra perfeitamente com Apple Pay e Google Pay, permitindo pagamentos rápidos e fáceis sem contato."
    },
    {
      icon: Shield,
      title: "Taxas Transparentes",
      description: "Desfrute de uma estrutura de taxas clara e justa, sem custos ocultos, garantindo uma experiência de pagamento suave e previsível."
    },
    {
      icon: RefreshCw,
      title: "Conversão Instantânea de Moeda",
      description: "Gaste seus ativos cripto em qualquer moeda local sem conversões manuais. Nosso sistema lida automaticamente com a troca."
    }
  ];

  return (
    <>
      <SEOHead
        title="Aurum Card | O Futuro dos Pagamentos Cripto"
        description="O Aurum Card é uma solução inovadora de pagamento que conecta o mundo das criptomoedas às finanças tradicionais."
        canonicalUrl="https://aurum.foundation/cartoes"
        keywords="Aurum Card, cartão cripto, pagamentos, Apple Pay, Google Pay, USDT"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  AURUM Card — o futuro dos{' '}
                  <span className="text-gradient">pagamentos cripto</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  O Aurum Card é uma solução de pagamento inovadora que conecta o mundo das criptomoedas às finanças tradicionais.
                </p>
                <Button size="lg" className="btn-glow" asChild>
                  <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                    Solicitar agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-gradient-to-br from-foreground to-foreground/80 rounded-3xl p-8 flex items-center justify-center">
                    <CreditCard className="w-48 h-48 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Aurum Card */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <span className="text-sm text-primary font-medium">Aurum Cards</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
                O Aurum Card é sua porta de entrada para{' '}
                <span className="text-gradient">gastos cripto sem esforço</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Projetado para máxima flexibilidade e segurança, ele permite que você gaste cripto como dinheiro, seja comprando online, pagando em lojas ou sacando em caixas eletrônicos.
              </p>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-lg text-muted-foreground mb-4">Tecnologia Tap & Go</h3>
                <p className="text-2xl font-display font-bold mb-4">
                  Com integração <span className="text-primary">Apple Pay e Google Pay</span>, você pode tocar e pagar instantaneamente em milhões de locais em todo o mundo.
                </p>
                <p className="text-muted-foreground">
                  Sem necessidade de conversões manuais — basta carregar seu cartão, tocar e pronto!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Seja um dos primeiros a obter seu AURUM Card!
            </h2>
            <Button size="lg" className="btn-glow" asChild>
              <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                Solicitar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  AURUM CARD — STATUS, LIMITES, VANTAGENS
                </span>
              </div>
              <div>
                <p className="text-muted-foreground">
                  O Aurum Infinity Card é nossa oferta premium — projetado para gastos de alto volume e acesso global.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className="text-center border-border/50 bg-card/50 backdrop-blur-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Principais Recursos<br />& Benefícios
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Projetamos o AURUM Card para oferecer controle total sobre seus ativos cripto no dia a dia. Nossa solução de pagamento global combina segurança, conveniência e transparência para tornar os gastos com cripto tão simples quanto o banco tradicional.
                </p>
              </div>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <Card 
                    key={index}
                    className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/30 transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              O futuro dos pagamentos cripto está aqui.
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Prepare-se para experimentar transações cripto contínuas, sem fronteiras e seguras.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                Participar agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Cartoes;
