import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Map, Home, Building2, Briefcase, Phone, CreditCard, Globe, Shield, BookOpen, FileText, HelpCircle, Headphones, Scale, Lock, Cookie, ExternalLink } from 'lucide-react';

const sitemapData = {
  principal: [
    { label: 'Página Inicial', href: '/', icon: Home, description: 'Página principal da Aurum Foundation' },
    { label: 'Sobre Nós', href: '/sobre-nos', icon: Building2, description: 'Conheça nossa história e missão' },
    { label: 'Serviços', href: '/servicos', icon: Briefcase, description: 'Nossos serviços financeiros' },
    { label: 'Contato', href: '/contato', icon: Phone, description: 'Entre em contato conosco' },
  ],
  produtos: [
    { label: 'Plataforma', href: '/plataforma', icon: Globe, description: 'Nossa plataforma de investimentos' },
    { label: 'Cartões', href: '/cartoes', icon: CreditCard, description: 'Cartões Aurum com benefícios exclusivos' },
    { label: 'Exchange', href: '/exchange', icon: Globe, description: 'Compra e venda de criptomoedas' },
    { label: 'Segurança', href: '/seguranca', icon: Shield, description: 'Como protegemos seus dados' },
  ],
  recursos: [
    { label: 'Blog', href: '/blog', icon: BookOpen, description: 'Artigos e novidades do mercado' },
    { label: 'Documentação', href: '/documentacao', icon: FileText, description: 'Documentação do ecossistema' },
    { label: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Perguntas frequentes' },
    { label: 'Suporte', href: '/suporte', icon: Headphones, description: 'Atendimento ao cliente' },
  ],
  legal: [
    { label: 'Termos de Uso', href: '/termos-de-uso', icon: Scale, description: 'Termos e condições de uso' },
    { label: 'Política de Privacidade', href: '/politica-de-privacidade', icon: Lock, description: 'Como tratamos seus dados' },
    { label: 'Política de Cookies', href: '/politica-de-cookies', icon: Cookie, description: 'Uso de cookies no site' },
  ],
};

const Sitemap = () => {
  return (
    <>
      <SEOHead
        title="Sitemap - Aurum Foundation"
        description="Navegue por todas as páginas do site da Aurum Foundation. Encontre facilmente informações sobre nossos produtos, serviços e recursos."
        canonicalUrl="https://aurumfoundation.world/sitemap"
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Map className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Mapa do Site</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Sitemap
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Encontre rapidamente todas as páginas e seções do site da Aurum Foundation
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Páginas Principais */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Páginas Principais</h2>
                </div>
                <ul className="space-y-4">
                  {sitemapData.principal.map((item) => (
                    <li key={item.href}>
                      <a 
                        href={item.href}
                        className="group flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          <span className="text-xs text-primary/60 mt-2 block">{item.href}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Produtos */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Produtos</h2>
                </div>
                <ul className="space-y-4">
                  {sitemapData.produtos.map((item) => (
                    <li key={item.href}>
                      <a 
                        href={item.href}
                        className="group flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          <span className="text-xs text-primary/60 mt-2 block">{item.href}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recursos */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Recursos</h2>
                </div>
                <ul className="space-y-4">
                  {sitemapData.recursos.map((item) => (
                    <li key={item.href}>
                      <a 
                        href={item.href}
                        className="group flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          <span className="text-xs text-primary/60 mt-2 block">{item.href}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="bg-card rounded-2xl border border-border/50 p-8 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Legal</h2>
                </div>
                <ul className="space-y-4">
                  {sitemapData.legal.map((item) => (
                    <li key={item.href}>
                      <a 
                        href={item.href}
                        className="group flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                          <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</span>
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          <span className="text-xs text-primary/60 mt-2 block">{item.href}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* XML Sitemap Info */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-muted/30 rounded-2xl border border-border/50 p-8 text-center">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold text-foreground mb-2">Sitemap XML</h3>
                <p className="text-muted-foreground mb-4">
                  Para mecanismos de busca, também disponibilizamos nosso sitemap em formato XML.
                </p>
                <a 
                  href="/sitemap.xml" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <span>Acessar sitemap.xml</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sitemap;
