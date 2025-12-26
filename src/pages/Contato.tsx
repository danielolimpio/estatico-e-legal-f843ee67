import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  Clock,
  Building2
} from 'lucide-react';

const Contato = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@aurumfoundation.world",
      href: "mailto:contato@aurumfoundation.world",
      description: "Resposta em até 24 horas úteis"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+55 12 98140-8992",
      href: "https://wa.me/5512981408992",
      description: "Atendimento de segunda a sexta"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "UNIT 503, 5/FL. SILVERCORD TOWER 2",
      href: "#",
      description: "30 CANTON ROAD, TSIM SHA TSUI, Hong Kong"
    }
  ];

  return (
    <>
      <SEOHead
        title="Contato | Aurum Foundation - Fale Conosco"
        description="Entre em contato com a Aurum Foundation. Estamos prontos para ajudá-lo em sua jornada financeira digital."
        canonicalUrl="https://aurum.foundation/contato"
        keywords="Aurum contato, suporte, atendimento, WhatsApp, email"
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
                CONTATO
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Fale com a{' '}
                <span className="text-gradient">Aurum Foundation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Estamos prontos para ajudá-lo em sua jornada financeira digital. Entre em contato através dos nossos canais de atendimento.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 animate-fade-up text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="mx-auto p-4 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      {info.value}
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e retornaremos o mais breve possível.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nome completo
                        </label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-mail
                        </label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefone / WhatsApp
                      </label>
                      <Input id="phone" placeholder="+55 (00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Assunto
                      </label>
                      <Input id="subject" placeholder="Como podemos ajudar?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua dúvida ou solicitação..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full btn-glow" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Informações Adicionais
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa equipe está disponível para atendê-lo e esclarecer todas as suas dúvidas sobre nossos produtos e serviços.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Horário de Atendimento</h4>
                      <p className="text-sm text-muted-foreground">
                        Segunda a Sexta: 9h às 18h (Horário de Hong Kong)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Suporte via WhatsApp</h4>
                      <p className="text-sm text-muted-foreground">
                        Atendimento rápido e personalizado para membros da plataforma.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sede Internacional</h4>
                      <p className="text-sm text-muted-foreground">
                        UNIT 503, 5/FL. SILVERCORD TOWER 2<br />
                        30 CANTON ROAD, TSIM SHA TSUI<br />
                        Hong Kong
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <h4 className="font-display font-bold text-lg mb-2">
                    Prefere falar diretamente?
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Clique no botão abaixo para iniciar uma conversa no WhatsApp.
                  </p>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <a 
                      href="https://wa.me/5512981408992" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Conversar no WhatsApp
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

export default Contato;
