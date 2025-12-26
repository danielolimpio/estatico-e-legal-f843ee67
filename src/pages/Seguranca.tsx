import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server,
  CheckCircle2,
  ArrowRight,
  KeyRound,
  FileCheck,
  AlertTriangle,
  Globe,
  Fingerprint,
  ShieldCheck
} from 'lucide-react';

const Seguranca = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Criptografia de Ponta",
      description: "Todos os dados são protegidos com criptografia AES-256 de nível militar, garantindo que suas informações permaneçam seguras."
    },
    {
      icon: Shield,
      title: "Smart Contracts Auditados",
      description: "Nossos smart contracts passam por auditorias rigorosas de empresas de segurança líderes do setor."
    },
    {
      icon: Fingerprint,
      title: "Autenticação Multi-Fator",
      description: "Proteção adicional com 2FA, biometria e verificação por dispositivo para acesso às suas contas."
    },
    {
      icon: Server,
      title: "Infraestrutura Distribuída",
      description: "Servidores distribuídos globalmente com redundância para garantir disponibilidade 24/7."
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "Sistemas de detecção de ameaças em tempo real com equipe de segurança dedicada."
    },
    {
      icon: KeyRound,
      title: "Cold Storage",
      description: "A maior parte dos ativos é mantida em carteiras frias offline, protegidas contra ataques."
    }
  ];

  const certifications = [
    {
      icon: FileCheck,
      title: "Registro Empresarial",
      description: "Empresa registrada e regulamentada em Hong Kong"
    },
    {
      icon: ShieldCheck,
      title: "Certificação de Segurança",
      description: "Certificado No.: 77289699-000-11-24-6"
    },
    {
      icon: Globe,
      title: "Conformidade Global",
      description: "Aderência às regulamentações internacionais de proteção de dados"
    }
  ];

  const securityPractices = [
    "Auditorias regulares de segurança por terceiros independentes",
    "Programa de bug bounty para identificação de vulnerabilidades",
    "Segregação de fundos de clientes e operacionais",
    "Backups criptografados com recuperação de desastres",
    "Treinamento contínuo da equipe em práticas de segurança",
    "Políticas rigorosas de acesso baseadas em princípio de menor privilégio"
  ];

  return (
    <>
      <SEOHead
        title="Segurança | Aurum Foundation - Proteção de Nível Institucional"
        description="Conheça as medidas de segurança da Aurum Foundation: criptografia avançada, smart contracts auditados e proteção 24/7."
        canonicalUrl="https://aurum.foundation/seguranca"
        keywords="Aurum segurança, proteção cripto, criptografia, smart contracts, auditoria"
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
                SEGURANÇA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Proteção de{' '}
                <span className="text-gradient">Nível Institucional</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Na Aurum Foundation, a segurança dos seus ativos é nossa prioridade máxima. Implementamos as mais avançadas tecnologias e práticas de segurança do mercado.
              </p>
              <Button size="lg" className="btn-glow" asChild>
                <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                  Começar com Segurança
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Camadas de{' '}
                <span className="text-gradient">Proteção</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Múltiplas camadas de segurança para proteger seus ativos e dados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent w-fit mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Certificações &{' '}
                  <span className="text-gradient">Conformidade</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A Aurum Foundation opera sob rigorosos padrões de conformidade e regulamentação, garantindo transparência e confiabilidade em todas as operações.
                </p>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                        <cert.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 flex items-center justify-center border border-primary/20">
                  <Shield className="w-48 h-48 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Práticas de{' '}
                  <span className="text-gradient">Segurança</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Compromisso contínuo com a proteção dos nossos usuários.
                </p>
              </div>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {securityPractices.map((practice, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl bg-muted/50"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{practice}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-br from-primary to-accent border-0 overflow-hidden">
              <CardContent className="p-8 lg:p-12 text-center">
                <AlertTriangle className="h-16 w-16 text-white/80 mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Sua Segurança é Nossa Prioridade
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8">
                  Nunca compartilharemos suas informações com terceiros. Todos os dados são criptografados e protegidos com as mais avançadas tecnologias de segurança.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                    <a href="https://backoffice.aurum.foundation/u/5CW428" target="_blank" rel="noopener noreferrer">
                      Começar Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <a href="/contato">Falar com Especialista</a>
                  </Button>
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

export default Seguranca;
