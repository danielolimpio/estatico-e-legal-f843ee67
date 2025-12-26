import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Shield,
  Zap,
  ArrowRight,
  Coins,
  Bot,
  CreditCard,
  Building2,
  FileText,
  Download,
  ExternalLink
} from "lucide-react";

const ecosystemComponents = [
  {
    icon: Bot,
    title: "Aurum EX-AI Bot",
    description: "Sistema de negociação autônomo alimentado por IA que opera 24/7 com gestão avançada de risco.",
    features: ["Negociação automatizada", "Análise em tempo real", "Retorno médio de +18,5%/mês"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Aurum Zeus AI Bot",
    description: "Ferramenta multifuncional para gestão de criptoativos e renda passiva via Telegram.",
    features: ["6 pares de negociação", "Retorno de 10-15%/mês", "Saques flexíveis"],
    gradient: "from-violet-500 to-purple-500"
  },
  {
    icon: Layers,
    title: "Aurum Flash Loans",
    description: "Sistema de arbitragem DeFi com empréstimos sem colateral e execução instantânea.",
    features: ["Sem colateral necessário", "APY de até 270%", "Arbitragem automatizada"],
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Building2,
    title: "Aurum Neo-Bank",
    description: "Hub financeiro completo para armazenar, trocar e gerenciar criptomoedas.",
    features: ["Cartões virtuais e físicos", "Disponibilidade global", "Sem limites de emissão"],
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: CreditCard,
    title: "Aurum Card",
    description: "Solução de pagamentos que conecta cripto ao mundo tradicional.",
    features: ["Apple Pay & Google Pay", "Conversão instantânea", "Limite de $100.000/mês"],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Aurum Exchange",
    description: "Exchange descentralizada de próxima geração com liquidez profunda.",
    features: ["Cross-chain trading", "Suporte a fiat", "Smart contracts seguros"],
    gradient: "from-indigo-500 to-blue-500"
  }
];

const tokenomics = [
  { label: "Nome do Token", value: "AURUM" },
  { label: "Tipo", value: "Utility Token" },
  { label: "Blockchain", value: "Multi-chain" },
  { label: "Mecanismo", value: "Deflacionário" },
  { label: "Crescimento", value: "+2,5% por $1M vendido" }
];

const documents = [
  { title: "Whitepaper", description: "Documento técnico completo do ecossistema", icon: FileText },
  { title: "Tokenomics", description: "Estrutura econômica do AURUM Token", icon: Coins },
  { title: "Roadmap", description: "Plano de desenvolvimento e metas", icon: Layers },
  { title: "Auditoria de Segurança", description: "Relatórios de segurança e compliance", icon: Shield }
];

const Documentacao = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Documentação | Aurum Foundation - Ecossistema Completo"
        description="Explore a documentação completa do ecossistema Aurum Foundation. Conheça nossos produtos, tecnologias e tokenomics."
        canonicalUrl="https://aurumfoundation.world/documentacao"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Documentação Oficial
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ecossistema <span className="text-primary">Aurum</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Descubra como nossa tecnologia de ponta em IA e Blockchain está revolucionando o futuro das finanças digitais.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Componentes do Ecossistema
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma suíte completa de produtos e serviços integrados para maximizar seu potencial financeiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemComponents.map((component, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${component.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <component.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{component.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AURUM Token Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Coins className="w-4 h-4 mr-2" />
                Token Nativo
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AURUM Token
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O AURUM Token é o ativo nativo que impulsiona todo o ecossistema, oferecendo utilidade inigualável e benefícios exclusivos para holders.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Ativação do Algoritmo Flash</h4>
                    <p className="text-sm text-muted-foreground">Acesso a ferramentas de arbitragem impulsionadas por IA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Staking & Recompensas</h4>
                    <p className="text-sm text-muted-foreground">Stake seus tokens para ganhar recompensas passivas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">Mecanismo Deflacionário</h4>
                    <p className="text-sm text-muted-foreground">Tokens queimados aumentam escassez e valor</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                Tokenomics
              </h3>
              <div className="space-y-4">
                {tokenomics.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Documentos Oficiais
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acesse nossos documentos técnicos e relatórios para uma compreensão completa do projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {documents.map((doc, index) => (
              <Card 
                key={index}
                className="group p-6 bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <doc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{doc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                  Acessar
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Arquitetura Técnica
              </h2>
              <p className="text-muted-foreground">
                Nossa infraestrutura foi construída com as tecnologias mais avançadas do mercado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
                <Cpu className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="font-bold mb-2">Inteligência Artificial</h3>
                <p className="text-sm text-muted-foreground">
                  Algoritmos de ML e Deep Learning para análise de mercado e execução de trades.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-violet-500/10 to-violet-600/5 border-violet-500/20">
                <Database className="w-10 h-10 text-violet-500 mb-4" />
                <h3 className="font-bold mb-2">Blockchain</h3>
                <p className="text-sm text-muted-foreground">
                  Smart contracts auditados em múltiplas redes para máxima segurança e interoperabilidade.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20">
                <Shield className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="font-bold mb-2">Segurança</h3>
                <p className="text-sm text-muted-foreground">
                  Criptografia de ponta, auditorias regulares e protocolos de segurança avançados.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentacao;
