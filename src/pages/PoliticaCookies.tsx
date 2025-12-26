import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  BarChart3, 
  Target, 
  Clock, 
  FileText, 
  Mail, 
  Globe,
  Laptop,
  Smartphone,
  Monitor,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';

const PoliticaCookies = () => {
  const lastUpdated = "26 de dezembro de 2025";

  const cookieTypes = [
    {
      icon: Shield,
      name: "Cookies Estritamente Necessários",
      description: "Essenciais para o funcionamento básico do site e não podem ser desativados.",
      required: true,
      examples: [
        "Autenticação e sessão do usuário",
        "Segurança e prevenção de fraudes",
        "Configurações de preferências de privacidade",
        "Balanceamento de carga do servidor"
      ],
      retention: "Sessão ou até 1 ano"
    },
    {
      icon: Settings,
      name: "Cookies de Funcionalidade",
      description: "Permitem funcionalidades aprimoradas e personalização da experiência.",
      required: false,
      examples: [
        "Preferências de idioma e região",
        "Configurações de exibição e tema",
        "Dados de formulários para preenchimento automático",
        "Personalização do dashboard"
      ],
      retention: "Até 2 anos"
    },
    {
      icon: BarChart3,
      name: "Cookies de Análise e Desempenho",
      description: "Nos ajudam a entender como os visitantes interagem com o site.",
      required: false,
      examples: [
        "Páginas mais visitadas e tempo de permanência",
        "Taxa de rejeição e fluxo de navegação",
        "Erros e problemas técnicos encontrados",
        "Desempenho e velocidade de carregamento"
      ],
      retention: "Até 2 anos"
    },
    {
      icon: Target,
      name: "Cookies de Marketing e Publicidade",
      description: "Utilizados para exibir anúncios relevantes aos seus interesses.",
      required: false,
      examples: [
        "Rastreamento de conversões de campanhas",
        "Remarketing em plataformas parceiras",
        "Segmentação de público para anúncios",
        "Medição de eficácia de campanhas"
      ],
      retention: "Até 2 anos"
    }
  ];

  const thirdPartyCookies = [
    {
      provider: "Google Analytics",
      purpose: "Análise de tráfego e comportamento do usuário",
      cookies: "_ga, _gid, _gat",
      policy: "https://policies.google.com/privacy"
    },
    {
      provider: "Google Tag Manager",
      purpose: "Gerenciamento de tags e scripts",
      cookies: "_gtm",
      policy: "https://policies.google.com/privacy"
    },
    {
      provider: "Hotjar",
      purpose: "Mapas de calor e gravações de sessão",
      cookies: "_hj*",
      policy: "https://www.hotjar.com/privacy"
    },
    {
      provider: "Facebook Pixel",
      purpose: "Remarketing e conversões",
      cookies: "_fbp, fr",
      policy: "https://www.facebook.com/privacy"
    },
    {
      provider: "Intercom",
      purpose: "Chat de suporte ao cliente",
      cookies: "intercom-*",
      policy: "https://www.intercom.com/legal/privacy"
    }
  ];

  const sections = [
    {
      id: "introducao",
      icon: Cookie,
      title: "1. O Que São Cookies?",
      content: `Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, smartphone ou tablet) quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.

Os cookies permitem que um site reconheça seu dispositivo e lembre de informações sobre sua visita, como suas preferências de idioma e outras configurações. Isso pode facilitar sua próxima visita e tornar o site mais útil para você.

Além dos cookies, também podemos utilizar outras tecnologias similares, como:

**Web Beacons (Pixels)**
Pequenas imagens transparentes incorporadas em páginas da web ou e-mails que nos permitem rastrear visualizações e interações.

**Local Storage e Session Storage**
Tecnologias de armazenamento do navegador que funcionam de forma similar aos cookies, mas podem armazenar mais dados.

**Fingerprinting**
Técnica que coleta informações sobre seu dispositivo e navegador para criar uma "impressão digital" única.

Nesta política, utilizamos o termo "cookies" para nos referirmos a todas essas tecnologias de forma geral.`
    },
    {
      id: "como-usamos",
      icon: Eye,
      title: "2. Como Usamos Cookies na Aurum Foundation",
      content: `A Aurum Foundation utiliza cookies para diversos fins relacionados à operação de nossa plataforma de gestão de ativos digitais:

**2.1 Autenticação e Segurança**
- Manter você conectado à sua conta enquanto navega
- Verificar sua identidade durante operações sensíveis
- Detectar tentativas de acesso não autorizado
- Prevenir ataques de segurança (CSRF, XSS)
- Implementar autenticação de dois fatores

**2.2 Operação dos Serviços**
- Processar transações nos bots EX-AI e Zeus AI
- Manter sessões ativas durante operações de Flash Loans
- Armazenar configurações do Aurum Card
- Gerenciar preferências de negociação na Exchange

**2.3 Preferências e Personalização**
- Lembrar suas configurações de tema (claro/escuro)
- Manter suas preferências de idioma
- Personalizar o dashboard conforme seu uso
- Salvar filtros e ordenações preferidos

**2.4 Análise e Melhoria**
- Entender como você utiliza nossa plataforma
- Identificar problemas técnicos e bugs
- Medir a eficácia de novos recursos
- Otimizar a experiência do usuário

**2.5 Marketing (com seu consentimento)**
- Mostrar anúncios relevantes em outras plataformas
- Medir o sucesso de nossas campanhas
- Evitar mostrar os mesmos anúncios repetidamente
- Personalizar comunicações de marketing`
    },
    {
      id: "gerenciamento",
      icon: Settings,
      title: "3. Gerenciando Suas Preferências de Cookies",
      content: `Você tem controle sobre os cookies que aceitamos usar. Existem várias formas de gerenciar suas preferências:

**3.1 Banner de Consentimento**
Ao acessar nosso site pela primeira vez, você verá um banner solicitando seu consentimento para o uso de cookies não essenciais. Você pode:
- Aceitar todos os cookies
- Rejeitar cookies não essenciais
- Personalizar suas preferências por categoria

**3.2 Central de Privacidade**
A qualquer momento, você pode acessar nossa Central de Privacidade para:
- Visualizar os cookies atualmente em uso
- Modificar suas preferências
- Revogar consentimentos anteriores
- Exportar suas configurações

**3.3 Configurações do Navegador**
Você também pode controlar cookies através das configurações do seu navegador:

**Google Chrome**
Configurações > Privacidade e segurança > Cookies e outros dados do site

**Mozilla Firefox**
Configurações > Privacidade e Segurança > Cookies e dados do site

**Safari**
Preferências > Privacidade > Gerenciar dados do site

**Microsoft Edge**
Configurações > Cookies e permissões do site > Gerenciar e excluir cookies

**3.4 Opt-Out de Terceiros**
Para cookies de publicidade, você pode optar por não participar através de:
- Your Online Choices (www.youronlinechoices.com)
- Network Advertising Initiative (www.networkadvertising.org)
- Digital Advertising Alliance (www.aboutads.info)

**Importante:** A desativação de cookies essenciais pode impedir o funcionamento adequado de nossos serviços, incluindo login, transações e funcionalidades de segurança.`
    },
    {
      id: "duracao",
      icon: Clock,
      title: "4. Duração dos Cookies",
      content: `Os cookies que utilizamos têm diferentes durações dependendo de sua finalidade:

**4.1 Cookies de Sessão**
São temporários e são excluídos automaticamente quando você fecha o navegador. Utilizados para:
- Manter sua sessão de login ativa
- Armazenar itens em processos de várias etapas
- Garantir segurança durante operações sensíveis

**4.2 Cookies Persistentes**
Permanecem no seu dispositivo por um período definido ou até serem excluídos manualmente. Utilizados para:
- Lembrar suas preferências entre visitas
- Reconhecer você como usuário recorrente
- Análise de longo prazo

**4.3 Períodos de Retenção por Categoria**

| Categoria | Duração Típica |
|-----------|----------------|
| Essenciais | Sessão a 1 ano |
| Funcionais | 1 a 2 anos |
| Analíticos | 30 dias a 2 anos |
| Marketing | 30 dias a 2 anos |

**4.4 Renovação**
Alguns cookies podem ter sua duração renovada quando você retorna ao site. Isso nos permite:
- Manter suas preferências atualizadas
- Continuar análises de longo prazo
- Fornecer experiência consistente`
    },
    {
      id: "terceiros",
      icon: Globe,
      title: "5. Cookies de Terceiros",
      content: `Além de nossos próprios cookies, utilizamos cookies de provedores terceirizados confiáveis para fornecer determinados serviços:

**5.1 Por Que Usamos Cookies de Terceiros**
- Análise avançada de tráfego e comportamento
- Processamento de pagamentos seguro
- Suporte ao cliente via chat
- Prevenção de fraudes
- Marketing e publicidade direcionada

**5.2 Nossos Parceiros**
Trabalhamos com provedores que aderem a altos padrões de privacidade e segurança. Cada parceiro tem sua própria política de privacidade.

**5.3 Suas Escolhas**
Você pode optar por bloquear cookies de terceiros através:
- Das configurações do seu navegador
- Das ferramentas de opt-out de cada provedor
- Da nossa Central de Privacidade

**5.4 Responsabilidade**
Embora selecionemos cuidadosamente nossos parceiros, não temos controle direto sobre como eles processam os dados. Recomendamos que consulte as políticas de privacidade de cada provedor listado.`
    },
    {
      id: "dispositivos",
      icon: Laptop,
      title: "6. Cookies em Diferentes Dispositivos",
      content: `Sua experiência com cookies pode variar dependendo do dispositivo que você usa:

**6.1 Computadores Desktop**
- Suporte completo a todos os tipos de cookies
- Maior capacidade de armazenamento
- Controles de privacidade mais granulares
- Extensões de navegador para bloqueio

**6.2 Dispositivos Móveis (Smartphones e Tablets)**
- Suporte a cookies pode variar por navegador
- Apps nativos usam identificadores diferentes
- Configurações de privacidade específicas do sistema
- Limitações de armazenamento em alguns casos

**6.3 Navegação Privada/Anônima**
- Cookies de sessão são excluídos ao fechar a janela
- Cookies persistentes não são salvos
- Suas preferências não são lembradas
- Cada sessão começa "do zero"

**6.4 Sincronização Entre Dispositivos**
Se você estiver logado em sua conta Aurum, algumas preferências podem ser sincronizadas entre dispositivos através de nossa plataforma, independentemente de cookies.`
    },
    {
      id: "direitos",
      icon: Shield,
      title: "7. Seus Direitos",
      content: `De acordo com as leis de proteção de dados aplicáveis, você possui direitos específicos em relação aos dados coletados através de cookies:

**7.1 Direito de Ser Informado**
Você tem direito a saber quais cookies utilizamos e para qual finalidade - esta política cumpre essa obrigação.

**7.2 Direito de Consentimento**
Para cookies não essenciais, solicitamos seu consentimento antes de utilizá-los. Você pode recusar ou retirar seu consentimento a qualquer momento.

**7.3 Direito de Acesso**
Você pode solicitar informações sobre os dados que coletamos através de cookies.

**7.4 Direito de Exclusão**
Você pode solicitar a exclusão de dados coletados através de cookies, sujeito a limitações técnicas e legais.

**7.5 Direito de Oposição**
Você pode se opor ao processamento de seus dados para fins de marketing através de cookies.

**7.6 Como Exercer Seus Direitos**
Para exercer qualquer um desses direitos:
- Use nossa Central de Privacidade
- Entre em contato: privacidade@aurumfoundation.world
- Ajuste as configurações do seu navegador`
    },
    {
      id: "atualizacoes",
      icon: RefreshCw,
      title: "8. Atualizações desta Política",
      content: `Esta Política de Cookies pode ser atualizada periodicamente para refletir:

**8.1 Motivos para Atualização**
- Mudanças em nossos serviços e funcionalidades
- Novos provedores de terceiros
- Alterações na legislação aplicável
- Feedback de usuários e autoridades
- Melhores práticas do setor

**8.2 Notificação de Alterações**
Quando fizermos alterações significativas:
- Atualizaremos a data de "última atualização" no topo
- Exibiremos um aviso destacado em nosso site
- Poderemos enviar notificação por e-mail
- Solicitaremos novo consentimento se necessário

**8.3 Versões Anteriores**
Mantemos um histórico de versões anteriores desta política, disponível mediante solicitação.

**8.4 Seu Consentimento Continuado**
O uso continuado de nossos serviços após alterações indica sua aceitação da política atualizada. Se você não concordar, deve ajustar suas preferências de cookies ou cessar o uso.`
    },
    {
      id: "contato",
      icon: Mail,
      title: "9. Contato",
      content: `Se você tiver dúvidas sobre esta Política de Cookies ou sobre como utilizamos cookies:

**9.1 Contato Principal**
E-mail: privacidade@aurumfoundation.world
E-mail Geral: contato@aurumfoundation.world
WhatsApp: +55 12 98140-8992

**9.2 Endereço**
Aurum Foundation
UNIT 503, 5/FL. SILVERCORD TOWER 2
30 CANTON ROAD, TSIM SHA TSUI
Hong Kong

**9.3 Encarregado de Proteção de Dados**
Nosso DPO pode ser contatado para questões específicas sobre privacidade e proteção de dados.

**9.4 Tempo de Resposta**
Nos esforçamos para responder a todas as consultas dentro de 15 dias úteis.

**9.5 Autoridades Supervisoras**
Se não estiver satisfeito com nossa resposta, você pode entrar em contato com a autoridade de proteção de dados competente em sua jurisdição.`
    }
  ];

  return (
    <>
      <SEOHead
        title="Política de Cookies | Aurum Foundation"
        description="Saiba como a Aurum Foundation utiliza cookies e tecnologias similares. Gerencie suas preferências de privacidade."
        canonicalUrl="https://aurum.foundation/politica-de-cookies"
        keywords="política de cookies, cookies, privacidade, rastreamento, Aurum Foundation"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Cookie className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Documento Legal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Política de{' '}
                <span className="text-gradient">Cookies</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                Transparência sobre como utilizamos cookies e tecnologias similares para melhorar sua experiência.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Última atualização: {lastUpdated}
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Versão 1.0
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
                Tipos de Cookies que Utilizamos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cookieTypes.map((type, index) => (
                  <Card 
                    key={type.name}
                    className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <type.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{type.name}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              {type.required ? (
                                <span className="inline-flex items-center gap-1 text-xs text-amber-500">
                                  <AlertCircle className="w-3 h-3" />
                                  Obrigatório
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs text-green-500">
                                  <CheckCircle2 className="w-3 h-3" />
                                  Opcional
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                      
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Exemplos de Uso
                        </h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-3 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 inline mr-1" />
                          Retenção: {type.retention}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Third Party Cookies Table */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Cookies de Terceiros
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-4 text-sm font-semibold">Provedor</th>
                          <th className="text-left p-4 text-sm font-semibold">Finalidade</th>
                          <th className="text-left p-4 text-sm font-semibold">Cookies</th>
                          <th className="text-left p-4 text-sm font-semibold">Política</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {thirdPartyCookies.map((cookie) => (
                          <tr key={cookie.provider} className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 text-sm font-medium">{cookie.provider}</td>
                            <td className="p-4 text-sm text-muted-foreground">{cookie.purpose}</td>
                            <td className="p-4 text-sm font-mono text-xs text-muted-foreground">{cookie.cookies}</td>
                            <td className="p-4">
                              <a 
                                href={cookie.policy} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline"
                              >
                                Ver política
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {sections.map((section, index) => (
                <Card 
                  key={section.id}
                  id={section.id}
                  className="border-border/50 bg-card/50 backdrop-blur-sm scroll-mt-24 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm lg:prose-base prose-neutral dark:prose-invert max-w-none">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <div key={pIndex} className="mb-4 last:mb-0">
                          {paragraph.startsWith('**') ? (
                            <div className="space-y-2">
                              {paragraph.split('\n').map((line, lIndex) => {
                                if (line.startsWith('**')) {
                                  const title = line.replace(/\*\*/g, '');
                                  return (
                                    <h4 key={lIndex} className="font-semibold text-foreground mt-4 first:mt-0">
                                      {title}
                                    </h4>
                                  );
                                } else if (line.startsWith('- ')) {
                                  return (
                                    <div key={lIndex} className="flex items-start gap-2 ml-4">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                      <span className="text-muted-foreground">{line.replace('- ', '')}</span>
                                    </div>
                                  );
                                }
                                return (
                                  <p key={lIndex} className="text-muted-foreground leading-relaxed">
                                    {line}
                                  </p>
                                );
                              })}
                            </div>
                          ) : (
                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Dúvidas sobre Cookies?
              </h2>
              <p className="text-muted-foreground mb-8">
                Se você tiver qualquer dúvida sobre nossa política de cookies ou sobre como gerenciar suas preferências, entre em contato conosco.
              </p>
              <a
                href="mailto:privacidade@aurumfoundation.world"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                privacidade@aurumfoundation.world
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PoliticaCookies;
