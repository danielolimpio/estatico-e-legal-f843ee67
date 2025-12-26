import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Bot, 
  Zap, 
  CreditCard, 
  Building2, 
  Coins, 
  ArrowRightLeft, 
  Sparkles, 
  Crown,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Wallet,
  Globe,
  LineChart,
  Lock,
  Percent,
  Users,
  GraduationCap,
  Rocket
} from 'lucide-react';

const Servicos = () => {
  const services = [
    {
      id: 1,
      icon: Bot,
      title: "Aurum EX-AI Bot",
      subtitle: "Negociação Autônoma 24/7",
      description: "Deixe o estresse do mercado para trás. O EX-AI Bot é um sistema de negociação autônomo de ponta, projetado para gerar lucros com risco mínimo.",
      howItWorks: "Alimentado por IA, o bot analisa dados em tempo real, executa trades estratégicos 24 horas por dia e adapta-se às mudanças do mercado.",
      features: [
        { icon: Zap, text: "Operação Automatizada: Gerencia suas negociações independentemente" },
        { icon: Shield, text: "Gestão Avançada de Risco: Protocolos rigorosos para operações seguras" },
        { icon: LineChart, text: "Dashboard em Tempo Real: Monitore seus lucros instantaneamente" }
      ],
      highlight: "+18,5% retorno mensal médio",
      highlightSubtext: "Desempenho comprovado ao longo de 1,5 anos",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Aurum Zeus AI Bot",
      subtitle: "Gestão Inteligente e Renda Passiva",
      description: "Simplifique sua vida financeira digital. O Zeus AI Bot é uma ferramenta multifuncional que combina gestão de criptoativos, negociação ilimitada e renda passiva.",
      howItWorks: "Através de IA avançada, o bot permite negociações automatizadas, monitoramento em tempo real e saques flexíveis via Telegram.",
      features: [
        { icon: TrendingUp, text: "Retorno mensal de até 10-15% em pares como BTC, ETH, SOL" },
        { icon: Wallet, text: "Depósitos e saques flexíveis com taxa de apenas 0,5%" },
        { icon: Clock, text: "Monitoramento transparente em tempo real" }
      ],
      highlight: "10-15% retorno mensal",
      highlightSubtext: "Renda passiva estável com controle total",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      id: 3,
      icon: Zap,
      title: "Aurum Flash Loans",
      subtitle: "Arbitragem Inteligente sem Colateral",
      description: "Desbloqueie oportunidades de ganhos instantâneos. O Flash Loans é um sistema de arbitragem impulsionado por IA que aproveita as oportunidades de preço entre diferentes DEXs.",
      howItWorks: "O sistema identifica automaticamente oportunidades de arbitragem, toma emprestado fundos da AAVE sem colateral, realiza o trade e devolve o empréstimo — tudo em segundos.",
      features: [
        { icon: Bot, text: "Arbitragem Impulsionada por IA: Decisões rápidas e lucrativas" },
        { icon: Lock, text: "Empréstimos Sem Colateral: Não bloqueie seus ativos" },
        { icon: Percent, text: "Retorno Anual Potencial: Até 270% APY" }
      ],
      highlight: "270% APY",
      highlightSubtext: "Retorno anual potencial",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 4,
      icon: Building2,
      title: "Aurum Neo-Bank",
      subtitle: "Seu Hub Financeiro All-in-One",
      description: "Integre o mundo das criptomoedas à sua vida diária. O Neo-Bank é seu hub financeiro completo para armazenar, trocar, gerenciar e gastar criptomoedas.",
      howItWorks: "Emita cartões virtuais e físicos em minutos, opere globalmente e transforme-se em um parceiro para ganhar comissões.",
      features: [
        { icon: CreditCard, text: "Cartões virtuais e físicos sem verificação KYC inicial" },
        { icon: Globe, text: "Disponibilidade global em todas as regiões" },
        { icon: Percent, text: "Até 90% de comissão em vendas de cartões" }
      ],
      highlight: "Até 90% lucro",
      highlightSubtext: "Comissões em vendas de cartões",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 5,
      icon: CreditCard,
      title: "Aurum Card",
      subtitle: "O Futuro dos Pagamentos com Cripto",
      description: "Pague com cripto como se fosse dinheiro. O Aurum Card conecta o mundo das criptomoedas à finança tradicional com tecnologia Tap & Go.",
      howItWorks: "Integração perfeita com Apple Pay e Google Pay para pagamentos instantâneos em milhões de locais ao redor do mundo.",
      features: [
        { icon: Zap, text: "Tecnologia Tap & Go com Apple Pay e Google Pay" },
        { icon: ArrowRightLeft, text: "Conversão instantânea para qualquer moeda local" },
        { icon: Shield, text: "Taxas transparentes sem custos ocultos" }
      ],
      highlight: "$100.000/mês",
      highlightSubtext: "Limite sem verificação KYC (Infinity)",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      id: 6,
      icon: ArrowRightLeft,
      title: "Aurum Exchange",
      subtitle: "A Próxima Geração de Trocas Descentralizadas",
      description: "Revolucionando o futuro da negociação. A Aurum Exchange é uma DEX de próxima geração com liquidez profunda e negociação cross-chain.",
      howItWorks: "Negocie ativos entre diferentes blockchains sem intermediários, com suporte a fiat e segurança avançada por smart contracts.",
      features: [
        { icon: LineChart, text: "Liquidez Profunda: Execução rápida de ordens" },
        { icon: Globe, text: "Compatibilidade Cross-Chain entre blockchains" },
        { icon: Lock, text: "Segurança Avançada com smart contracts" }
      ],
      highlight: "Cross-Chain",
      highlightSubtext: "Negocie entre diferentes blockchains",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 7,
      icon: Coins,
      title: "Aurum Token (AURUM)",
      subtitle: "O Coração do Ecossistema",
      description: "O Aurum Token é o ativo nativo que impulsiona todo o ecossistema, oferecendo utilidade inigualável e benefícios exclusivos.",
      howItWorks: "Stake seus tokens para ganhar recompensas, acesse ferramentas de arbitragem por IA e beneficie-se do mecanismo de deflação que aumenta o valor.",
      features: [
        { icon: Bot, text: "Ativação do Algoritmo Flash para arbitragem por IA" },
        { icon: TrendingUp, text: "Staking & Recompensas para renda passiva" },
        { icon: Percent, text: "Crescimento de 2,5% a cada $1M em vendas" }
      ],
      highlight: "+2,5%",
      highlightSubtext: "Crescimento a cada $1M em vendas",
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      id: 8,
      icon: Crown,
      title: "Plano de Assinatura Aurum",
      subtitle: "Acesso Exclusivo ao Ecossistema",
      description: "Desbloqueie o acesso completo a todos os produtos e serviços da Aurum Foundation e participe de nosso plano de marketing.",
      howItWorks: "Com apenas $19,99 por ano, você tem acesso total à plataforma, programas de indicação, comunidade exclusiva e sessões de treinamento.",
      features: [
        { icon: Sparkles, text: "Acesso exclusivo a todos os produtos e serviços" },
        { icon: Users, text: "Participação no Plano de Marketing e indicações" },
        { icon: GraduationCap, text: "Programas educacionais e eventos exclusivos" }
      ],
      highlight: "$19,99/ano",
      highlightSubtext: "Acesso completo ao ecossistema",
      gradient: "from-fuchsia-500 to-purple-600"
    }
  ];

  return (
    <>
      <SEOHead
        title="Produtos & Serviços | Aurum Foundation - Ecossistema Financeiro Digital"
        description="Conheça os produtos e serviços da Aurum Foundation: bots de negociação por IA, Flash Loans, Neo-Bank, cartões cripto e muito mais."
        canonicalUrl="https://aurum.foundation/servicos"
        keywords="Aurum, serviços financeiros, cripto, IA, trading bot, flash loans, neo-bank, blockchain"
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
                PRODUTOS & SERVIÇOS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Seu Portfólio Inteligente,{' '}
                <span className="text-gradient">Gerenciado pelo Futuro</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Na Aurum Foundation, construímos um ecossistema financeiro do futuro, onde tecnologia, inteligência artificial e blockchain convergem para oferecer soluções simples, seguras e lucrativas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-glow" asChild>
                  <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                    <Rocket className="mr-2 h-5 w-5" />
                    Começar Agora
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/sobre-nos">Conhecer a Aurum</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="grid lg:grid-cols-12 gap-6 p-6 lg:p-8">
                    {/* Left Column - Icon and Title */}
                    <div className="lg:col-span-4 flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            0{service.id}
                          </span>
                          <CardTitle className="text-2xl lg:text-3xl mt-1">{service.title}</CardTitle>
                          <CardDescription className="text-base font-medium text-primary mt-1">
                            {service.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto">
                        <div className={`inline-flex flex-col px-4 py-3 rounded-xl bg-gradient-to-br ${service.gradient}`}>
                          <span className="text-2xl font-display font-bold text-white">
                            {service.highlight}
                          </span>
                          <span className="text-xs text-white/80">
                            {service.highlightSubtext}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Features and How it works */}
                    <div className="lg:col-span-8 lg:border-l lg:border-border/50 lg:pl-8">
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          Como Funciona
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          {service.howItWorks}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          Principais Recursos
                        </h4>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {service.features.map((feature, idx) => (
                            <div 
                              key={idx}
                              className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                                <feature.icon className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm text-foreground leading-snug">
                                {feature.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Comece sua jornada financeira{' '}
                <span className="text-gradient">do futuro</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Escolha o produto ou serviço que melhor se adapta aos seus objetivos e deixe a Aurum Foundation transformar seu potencial em realidade.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="btn-glow" asChild>
                  <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                    <Rocket className="mr-2 h-5 w-5" />
                    Criar Conta Grátis
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contato">Falar com Consultor</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Servicos;
