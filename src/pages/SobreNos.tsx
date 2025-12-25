import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Target, Bot, Coins, BarChart3, CreditCard, Users, Building, Mail, MapPin, FileText } from 'lucide-react';
import bryanBenson from '@/assets/bryan-benson.png';

const SobreNos = () => {
  const ecosystemFeatures = [
    { icon: TrendingUp, text: 'Aumentar a eficiência financeira' },
    { icon: Target, text: 'Otimizar retornos sobre investimentos' },
    { icon: Shield, text: 'Apoiar o sucesso de longo prazo' },
  ];

  const products = [
    {
      icon: Bot,
      title: 'Zeus AI Trading Bot',
      description: 'Otimiza estratégias de negociação usando aprendizado de máquina, sem bloquear seus fundos.',
    },
    {
      icon: Coins,
      title: 'Aurum Staking',
      description: 'Permite aos usuários ganhar recompensas diárias e assegurar seu crescimento financeiro.',
    },
    {
      icon: BarChart3,
      title: 'EX-AI Bot',
      description: 'Oferece opções de investimento flexíveis, permitindo retornos estáveis adaptados a diferentes níveis de risco e estratégias de crescimento.',
    },
    {
      icon: CreditCard,
      title: 'Aurum Cards',
      description: 'Integra pagamentos em cripto moedas à vida cotidiana, por meio de transações globais seguras.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Sobre Nós | AURUM - Ecossistema Financeiro Digital"
        description="Conheça a Aurum, um ecossistema financeiro abrangente projetado para empoderar usuários com ferramentas inovadoras para ganhar e gerenciar ativos digitais."
        canonicalUrl="https://aurum.foundation/sobre-nos/"
        keywords="Aurum, sobre nós, ecossistema financeiro, ativos digitais, blockchain, fintech, Hong Kong"
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
                SOBRE A AURUM
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Um ecossistema financeiro{' '}
                <span className="text-gradient">abrangente</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A Aurum é um ecossistema financeiro abrangente, projetado para empoderar usuários com ferramentas inovadoras para ganhar e gerenciar ativos digitais.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa missão é fornecer soluções seguras, eficientes e escaláveis que atendam às necessidades em constante evolução de investidores individuais e empresas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-up">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                    NOSSO ECOSSISTEMA
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Tecnologias avançadas para oportunidades financeiras
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    O ecossistema Aurum integra tecnologias avançadas para oferecer acesso fluido a uma ampla gama de oportunidades financeiras. Desde robôs de negociação impulsionados por IA até staking, licenças NFT, blockchain proprietário e uma exchange descentralizada — cada componente foi projetado para:
                  </p>
                  <ul className="space-y-4">
                    {ecosystemFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-medium">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative animate-fade-up animation-delay-200">
                  <div className="aspect-square rounded-3xl bg-gradient-hero p-1">
                    <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Shield className="w-12 h-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-2">Segurança</h3>
                        <p className="text-muted-foreground">Eficiência</p>
                        <p className="text-muted-foreground">Escala</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="py-16 lg:py-24 bg-foreground text-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 mb-6">
                <Building className="w-5 h-5" />
                <span className="font-medium text-sm">Fundação Aurum</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Registrada em Hong Kong
              </h2>
              <p className="text-lg text-background/70 leading-relaxed mb-8">
                A Aurum Foundation Limited foi oficialmente registrada em Hong Kong em 7 de novembro de 2024, sob a Companies Ordinance, com um capital autorizado de 1 milhão de dólares. Essa incorporação estratégica fortalece nossa posição em um dos principais centros financeiros do mundo, garantindo transparência, conformidade e crescimento sustentável.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
                  <p className="text-3xl font-display font-bold text-primary mb-2">$1M</p>
                  <p className="text-sm text-background/60">Capital Autorizado</p>
                </div>
                <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
                  <p className="text-3xl font-display font-bold text-primary mb-2">2024</p>
                  <p className="text-sm text-background/60">Ano de Fundação</p>
                </div>
                <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
                  <p className="text-3xl font-display font-bold text-primary mb-2">HK</p>
                  <p className="text-sm text-background/60">Hong Kong</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                  EQUIPE DE LIDERANÇA EXPERTA
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Profissionais altamente qualificados
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Nossa equipe de liderança é composta por profissionais altamente qualificados, com vasta experiência em fintech, negociação, blockchain e marketing digital. Seu profundo conhecimento e abordagem estratégica impulsionam o desenvolvimento e o crescimento do ecossistema Aurum.
                </p>
              </div>

              {/* CEO Card */}
              <div className="max-w-4xl mx-auto animate-fade-up animation-delay-200">
                <div className="relative p-1 rounded-3xl bg-gradient-hero">
                  <div className="bg-background rounded-3xl p-8 lg:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                          <img 
                            src={bryanBenson} 
                            alt="Bryan Benson - CEO da Aurum"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary flex items-center justify-center">
                          <Users className="w-10 h-10 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">Bryan Benson</h3>
                        <p className="text-primary font-medium mb-6">Diretor Executivo (CEO)</p>
                        <blockquote className="text-muted-foreground italic leading-relaxed mb-6 border-l-4 border-primary pl-4">
                          "A Binance se tornou um unicórnio fintech em apenas um ano. Na Aurum, adotamos uma abordagem mais conservadora, estabelecendo isso como nosso objetivo para os próximos três anos."
                        </blockquote>
                        <p className="text-muted-foreground leading-relaxed">
                          Bryan Benson, ex-Morgan Stanley e Diretor LATAM da Binance, impulsiona o crescimento da Aurum, tornando os ativos digitais mais acessíveis por meio de inovação e parcerias globais.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-up">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                  PRODUTOS PRINCIPAIS
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Soluções integradas para seus investimentos
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Com esses produtos interconectados, os usuários podem investir, negociar e gerenciar ativos em uma única plataforma segura.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div 
                    key={index}
                    className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-3">{product.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                NOSSA PROMESSA
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Maximize seu potencial financeiro
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A Aurum oferece um ecossistema inovador e acessível que ajuda os usuários a maximizar seu potencial financeiro por meio de tecnologia avançada e soluções intuitivas, garantindo sucesso de longo prazo.
              </p>
              <Button size="xl" asChild>
                <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                  Junte-se a nós agora
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Info Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Informações Legais e Contato
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 animate-fade-up animation-delay-200">
                <div className="p-6 rounded-2xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Endereço</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    UNIT 503, 5/FL, SILVERCORD TOWER 2<br />
                    30 CANTON ROAD TSIM SHA TSUI<br />
                    Hong Kong
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Certificado</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No.: 77289699-000-11-24-6
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">E-mail de Suporte</h3>
                  <p className="text-sm text-muted-foreground">
                    <a 
                      href="mailto:contact-us@aurum.foundation" 
                      className="hover:text-primary transition-colors"
                    >
                      contact-us@aurum.foundation
                    </a>
                  </p>
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

export default SobreNos;
