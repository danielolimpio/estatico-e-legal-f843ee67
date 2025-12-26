import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Headphones, 
  MessageCircle,
  Mail,
  Phone,
  Clock,
  FileText,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const supportChannels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Atendimento rápido via mensagem",
    value: "+55 12 98140-8992",
    link: "https://wa.me/5512981408992",
    gradient: "from-green-500 to-emerald-500",
    availability: "24/7"
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Suporte técnico detalhado",
    value: "suporte@aurumfoundation.world",
    link: "mailto:suporte@aurumfoundation.world",
    gradient: "from-blue-500 to-cyan-500",
    availability: "Resposta em até 24h"
  },
  {
    icon: FileText,
    title: "Documentação",
    description: "Guias e tutoriais completos",
    value: "Acessar Docs",
    link: "/documentacao",
    gradient: "from-violet-500 to-purple-500",
    availability: "Sempre disponível"
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Respostas para dúvidas comuns",
    value: "Ver Perguntas",
    link: "/faq",
    gradient: "from-amber-500 to-orange-500",
    availability: "Sempre disponível"
  }
];

const supportFeatures = [
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Tempo médio de resposta de menos de 2 horas para tickets prioritários."
  },
  {
    icon: Shield,
    title: "Suporte Especializado",
    description: "Equipe técnica qualificada para resolver qualquer problema."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada caso é tratado individualmente com atenção aos detalhes."
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Suporte disponível a qualquer hora, qualquer dia da semana."
  }
];

const ticketCategories = [
  "Problema Técnico",
  "Dúvidas sobre Produtos",
  "Problemas com Pagamento",
  "Conta e Acesso",
  "Bots de Negociação",
  "Cartões e Neo-Bank",
  "Flash Loans",
  "AURUM Token",
  "Sugestões",
  "Outro"
];

const Suporte = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Suporte | Aurum Foundation - Central de Atendimento"
        description="Entre em contato com nossa equipe de suporte. Estamos prontos para ajudar você com qualquer dúvida ou problema."
        canonicalUrl="https://aurumfoundation.world/suporte"
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
              <Headphones className="w-4 h-4 mr-2" />
              Central de Suporte
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Como Podemos <span className="text-primary">Ajudar?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Nossa equipe está pronta para oferecer o suporte que você precisa. Escolha o canal de sua preferência.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${channel.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    {channel.availability}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={channel.link} target={channel.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {channel.value}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Abrir Ticket de Suporte
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais rápido possível.
              </p>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input 
                      id="nome" 
                      placeholder="Seu nome"
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoria</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {ticketCategories.map((category, index) => (
                          <SelectItem key={index} value={category.toLowerCase().replace(/\s+/g, '-')}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prioridade">Prioridade</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Selecione a prioridade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixa">Baixa</SelectItem>
                        <SelectItem value="media">Média</SelectItem>
                        <SelectItem value="alta">Alta</SelectItem>
                        <SelectItem value="urgente">Urgente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto</Label>
                  <Input 
                    id="assunto" 
                    placeholder="Resumo do seu problema ou dúvida"
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Descrição Detalhada</Label>
                  <Textarea 
                    id="mensagem"
                    placeholder="Descreva seu problema ou dúvida com o máximo de detalhes possível..."
                    className="min-h-[150px] bg-background/50"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Ao enviar este formulário, você concorda com nossa política de privacidade. Suas informações serão tratadas com confidencialidade.
                  </p>
                </div>

                <Button type="submit" className="w-full rounded-full" size="lg">
                  Enviar Ticket
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Links Úteis</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/faq">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  FAQ
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/documentacao">
                  <FileText className="w-4 h-4 mr-2" />
                  Documentação
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/servicos">
                  <Zap className="w-4 h-4 mr-2" />
                  Serviços
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/seguranca">
                  <Shield className="w-4 h-4 mr-2" />
                  Segurança
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Suporte;
