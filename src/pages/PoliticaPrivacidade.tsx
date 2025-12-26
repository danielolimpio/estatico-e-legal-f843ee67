import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  Bell, 
  FileText, 
  Mail, 
  UserCheck,
  Server,
  Key,
  AlertCircle,
  Clock,
  Share2,
  Settings
} from 'lucide-react';

const PoliticaPrivacidade = () => {
  const lastUpdated = "26 de dezembro de 2025";

  const sections = [
    {
      id: "introducao",
      icon: FileText,
      title: "1. Introdução",
      content: `A Aurum Foundation ("nós", "nosso" ou "Aurum") está comprometida em proteger a privacidade e os dados pessoais de todos os usuários de nossa plataforma. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossos produtos e serviços, incluindo o Aurum EX-AI Bot, Zeus AI Bot, Flash Loans, Neo-Bank, Aurum Card, Aurum Exchange, Aurum Token e nosso Plano de Assinatura.

Ao acessar ou utilizar qualquer um dos serviços da Aurum Foundation, você concorda com as práticas descritas nesta Política de Privacidade. Recomendamos que leia este documento com atenção para entender nossos compromissos com a proteção de seus dados.

Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados (LGPD) do Brasil, o Regulamento Geral sobre a Proteção de Dados (GDPR) da União Europeia, e outras legislações de proteção de dados aplicáveis em jurisdições onde operamos.`
    },
    {
      id: "dados-coletados",
      icon: Database,
      title: "2. Dados que Coletamos",
      content: `A Aurum Foundation coleta diferentes tipos de informações para fornecer e melhorar nossos serviços:

**2.1 Dados de Identificação Pessoal**
- Nome completo e data de nascimento
- Endereço de e-mail e número de telefone
- Documentos de identificação (RG, CPF, passaporte)
- Comprovante de endereço residencial
- Fotografias para verificação de identidade (selfie, documentos)

**2.2 Dados Financeiros**
- Informações de carteira de criptomoedas (endereços públicos)
- Histórico de transações na plataforma
- Dados bancários para operações com moeda fiduciária
- Informações sobre patrimônio e origem dos fundos

**2.3 Dados de Uso da Plataforma**
- Registros de acesso e navegação
- Configurações de bots de negociação (EX-AI Bot, Zeus AI Bot)
- Preferências de investimento e tolerância a risco
- Histórico de utilização de Flash Loans
- Transações realizadas via Aurum Card

**2.4 Dados Técnicos**
- Endereço IP e geolocalização aproximada
- Tipo de dispositivo, navegador e sistema operacional
- Cookies e identificadores de dispositivo
- Logs de atividade e registros de sessão

**2.5 Dados de Comunicação**
- Mensagens trocadas com nosso suporte
- Feedback e avaliações fornecidos
- Preferências de comunicação e marketing`
    },
    {
      id: "uso-dados",
      icon: Settings,
      title: "3. Como Usamos Seus Dados",
      content: `Utilizamos as informações coletadas para as seguintes finalidades:

**3.1 Prestação de Serviços**
- Criar e gerenciar sua conta na plataforma Aurum
- Processar transações de criptomoedas e operações financeiras
- Operar os bots de negociação automatizada (EX-AI e Zeus AI)
- Executar operações de Flash Loans e arbitragem
- Emitir e gerenciar Aurum Cards (virtuais e físicos)
- Processar staking e distribuição de recompensas do AURUM Token

**3.2 Segurança e Conformidade**
- Verificar sua identidade (procedimentos KYC/AML)
- Prevenir fraudes, lavagem de dinheiro e atividades ilícitas
- Cumprir obrigações legais e regulatórias
- Monitorar atividades suspeitas na plataforma
- Proteger a segurança da plataforma e dos usuários

**3.3 Melhoria de Serviços**
- Analisar padrões de uso para melhorar nossos produtos
- Desenvolver novos recursos e funcionalidades
- Personalizar sua experiência na plataforma
- Treinar e aprimorar nossos algoritmos de IA

**3.4 Comunicação**
- Enviar atualizações sobre sua conta e transações
- Notificar sobre mudanças em nossos serviços ou políticas
- Responder a solicitações de suporte
- Enviar comunicações de marketing (com seu consentimento)`
    },
    {
      id: "base-legal",
      icon: UserCheck,
      title: "4. Base Legal para Processamento",
      content: `O processamento de seus dados pessoais pela Aurum Foundation é fundamentado nas seguintes bases legais:

**4.1 Execução de Contrato**
Processamos dados necessários para a execução dos serviços contratados, incluindo:
- Abertura e manutenção de conta
- Operações de negociação e investimento
- Emissão de cartões e processamento de pagamentos
- Operações com o AURUM Token

**4.2 Cumprimento de Obrigação Legal**
Somos obrigados a coletar e reter determinados dados para:
- Conformidade com leis de combate à lavagem de dinheiro (AML)
- Relatórios fiscais e contábeis
- Respostas a solicitações de autoridades competentes
- Cumprimento de regulamentações do setor financeiro

**4.3 Interesse Legítimo**
Podemos processar dados com base em nosso interesse legítimo para:
- Prevenir fraudes e proteger a plataforma
- Melhorar nossos produtos e serviços
- Realizar análises estatísticas e pesquisas de mercado
- Garantir a segurança cibernética

**4.4 Consentimento**
Solicitamos seu consentimento específico para:
- Envio de comunicações de marketing
- Uso de cookies não essenciais
- Compartilhamento de dados com parceiros para finalidades específicas
- Processamento de categorias especiais de dados pessoais`
    },
    {
      id: "compartilhamento",
      icon: Share2,
      title: "5. Compartilhamento de Dados",
      content: `A Aurum Foundation pode compartilhar seus dados pessoais nas seguintes circunstâncias:

**5.1 Provedores de Serviços**
Compartilhamos dados com terceiros que nos auxiliam na prestação de serviços:
- Provedores de infraestrutura em nuvem e hospedagem
- Processadores de pagamento e emissores de cartões
- Serviços de verificação de identidade (KYC)
- Provedores de análise e monitoramento de segurança

**5.2 Parceiros de Negócios**
- Exchanges e plataformas de criptomoedas para execução de ordens
- Protocolos DeFi (como AAVE) para operações de Flash Loans
- Bandeiras de cartão (Visa) para processamento de pagamentos

**5.3 Autoridades e Reguladores**
Podemos divulgar dados quando exigido por lei:
- Órgãos reguladores do sistema financeiro
- Autoridades fiscais e tributárias
- Órgãos de aplicação da lei mediante ordem judicial
- Unidades de inteligência financeira

**5.4 Proteção de Direitos**
Podemos compartilhar dados para:
- Proteger nossos direitos legais
- Investigar possíveis violações de nossos termos
- Responder a procedimentos judiciais

**Importante:** Nunca vendemos seus dados pessoais a terceiros para fins de marketing ou publicidade.`
    },
    {
      id: "transferencia-internacional",
      icon: Globe,
      title: "6. Transferência Internacional de Dados",
      content: `Devido à natureza global de nossos serviços, seus dados pessoais podem ser transferidos e processados em países diferentes daquele em que você reside.

**6.1 Localização dos Servidores**
Nossos servidores e infraestrutura estão localizados em:
- Hong Kong (sede operacional)
- União Europeia
- Estados Unidos
- Singapura

**6.2 Salvaguardas Aplicadas**
Para transferências internacionais, implementamos:
- Cláusulas contratuais padrão aprovadas pela Comissão Europeia
- Certificações de adequação reconhecidas
- Mecanismos de transferência aprovados por autoridades de proteção de dados
- Avaliações de impacto para transferências de alto risco

**6.3 Países com Decisão de Adequação**
Priorizamos o armazenamento em países que possuem decisões de adequação reconhecidas ou que oferecem proteção equivalente aos padrões da GDPR e LGPD.`
    },
    {
      id: "retencao",
      icon: Clock,
      title: "7. Retenção de Dados",
      content: `Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política:

**7.1 Períodos de Retenção**

| Tipo de Dado | Período de Retenção |
|--------------|---------------------|
| Dados de conta | Durante a vigência da conta + 5 anos |
| Transações financeiras | 10 anos (obrigação legal) |
| Dados de KYC/AML | 5 a 10 anos após encerramento |
| Logs de acesso | 6 meses a 2 anos |
| Comunicações de suporte | 5 anos |
| Dados de marketing | Até revogação do consentimento |

**7.2 Critérios de Retenção**
Os períodos são determinados por:
- Obrigações legais e regulatórias
- Prazos de prescrição para ações judiciais
- Necessidades operacionais legítimas
- Suas solicitações de exclusão

**7.3 Após o Período de Retenção**
Quando o período de retenção expira:
- Dados são anonimizados para fins estatísticos, ou
- Dados são excluídos de forma segura e irreversível`
    },
    {
      id: "seus-direitos",
      icon: UserCheck,
      title: "8. Seus Direitos",
      content: `Você possui diversos direitos em relação aos seus dados pessoais:

**8.1 Direito de Acesso**
Você pode solicitar uma cópia de todos os dados pessoais que mantemos sobre você, bem como informações sobre como são processados.

**8.2 Direito de Retificação**
Você pode solicitar a correção de dados pessoais imprecisos ou incompletos.

**8.3 Direito de Exclusão**
Você pode solicitar a exclusão de seus dados pessoais, sujeito a limitações legais e contratuais.

**8.4 Direito de Portabilidade**
Você pode solicitar a transferência de seus dados para outro provedor de serviços em formato estruturado e legível por máquina.

**8.5 Direito de Oposição**
Você pode se opor ao processamento de seus dados para fins específicos, incluindo marketing direto.

**8.6 Direito de Limitação**
Você pode solicitar a restrição do processamento de seus dados em determinadas circunstâncias.

**8.7 Direito de Revogação de Consentimento**
Quando o processamento é baseado em consentimento, você pode revogá-lo a qualquer momento.

**Como Exercer Seus Direitos**
Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: privacidade@aurumfoundation.world

Responderemos sua solicitação dentro de 15 dias úteis, podendo este prazo ser estendido por mais 15 dias em casos complexos.`
    },
    {
      id: "seguranca",
      icon: Lock,
      title: "9. Segurança dos Dados",
      content: `A Aurum Foundation implementa medidas técnicas e organizacionais robustas para proteger seus dados:

**9.1 Medidas Técnicas**
- Criptografia de ponta a ponta (AES-256) para dados em trânsito e em repouso
- Autenticação multifator (2FA/MFA) obrigatória
- Monitoramento contínuo de segurança 24/7
- Firewalls de aplicação web (WAF) e proteção DDoS
- Segregação de ambientes e redes
- Backup regular com criptografia

**9.2 Medidas Organizacionais**
- Políticas de acesso baseadas no princípio do menor privilégio
- Treinamento regular de funcionários em segurança e privacidade
- Acordos de confidencialidade com todos os colaboradores
- Auditorias de segurança periódicas por terceiros independentes
- Plano de resposta a incidentes de segurança

**9.3 Certificações e Conformidade**
- Conformidade com padrões PCI-DSS para processamento de pagamentos
- Auditorias regulares de smart contracts
- Testes de penetração realizados trimestralmente

**9.4 Notificação de Violações**
Em caso de violação de dados que represente risco aos seus direitos:
- Notificaremos as autoridades competentes em até 72 horas
- Comunicaremos você diretamente se houver alto risco`
    },
    {
      id: "menores",
      icon: Users,
      title: "10. Proteção de Menores",
      content: `A Aurum Foundation não oferece serviços a menores de 18 anos.

**10.1 Restrição de Idade**
Nossos produtos e serviços financeiros são destinados exclusivamente a adultos com capacidade legal para celebrar contratos.

**10.2 Verificação de Idade**
Implementamos processos de verificação de identidade (KYC) que incluem a confirmação da idade do usuário.

**10.3 Coleta Inadvertida**
Se tomarmos conhecimento de que coletamos dados de menores de 18 anos:
- Excluiremos imediatamente todos os dados associados
- Encerraremos a conta do usuário
- Notificaremos os responsáveis legais quando possível

**10.4 Denúncia**
Se você acredita que um menor está utilizando nossos serviços, entre em contato conosco imediatamente.`
    },
    {
      id: "cookies",
      icon: Eye,
      title: "11. Cookies e Tecnologias de Rastreamento",
      content: `Utilizamos cookies e tecnologias similares para melhorar sua experiência. Para informações detalhadas, consulte nossa Política de Cookies.

**11.1 Tipos de Cookies**
- **Essenciais:** Necessários para funcionamento básico da plataforma
- **Funcionais:** Lembram suas preferências e configurações
- **Analíticos:** Nos ajudam a entender como você usa a plataforma
- **Marketing:** Permitem campanhas publicitárias relevantes

**11.2 Seu Controle**
Você pode gerenciar suas preferências de cookies através:
- Do banner de consentimento ao acessar o site
- Das configurações do seu navegador
- Da página de configurações de privacidade da sua conta

**11.3 Consequências da Desativação**
A desativação de cookies essenciais pode impedir o funcionamento adequado de nossos serviços.`
    },
    {
      id: "alteracoes",
      icon: Bell,
      title: "12. Alterações nesta Política",
      content: `A Aurum Foundation pode atualizar esta Política de Privacidade periodicamente.

**12.1 Notificação de Alterações**
Quando fizermos alterações significativas:
- Publicaremos a versão atualizada em nossa plataforma
- Enviaremos notificação por e-mail
- Destacaremos as mudanças principais
- Indicaremos a data da última atualização

**12.2 Seu Consentimento Continuado**
O uso continuado de nossos serviços após a publicação de alterações constitui sua aceitação da política atualizada.

**12.3 Histórico de Versões**
Mantemos um registro histórico das versões anteriores desta política, disponível mediante solicitação.`
    },
    {
      id: "contato",
      icon: Mail,
      title: "13. Contato e Encarregado de Dados",
      content: `Para questões sobre esta Política de Privacidade ou sobre seus dados pessoais:

**13.1 Contato Principal**
- **E-mail:** privacidade@aurumfoundation.world
- **E-mail Geral:** contato@aurumfoundation.world
- **WhatsApp:** +55 12 98140-8992

**13.2 Endereço**
Aurum Foundation
UNIT 503, 5/FL. SILVERCORD TOWER 2
30 CANTON ROAD, TSIM SHA TSUI
Hong Kong

**13.3 Encarregado de Proteção de Dados (DPO)**
Nosso Encarregado de Proteção de Dados pode ser contatado para:
- Dúvidas sobre o tratamento de dados pessoais
- Exercício de direitos dos titulares
- Reclamações sobre práticas de privacidade

**13.4 Autoridades de Proteção de Dados**
Você também tem o direito de apresentar reclamação junto à autoridade de proteção de dados competente em sua jurisdição.`
    }
  ];

  return (
    <>
      <SEOHead
        title="Política de Privacidade | Aurum Foundation"
        description="Conheça como a Aurum Foundation coleta, usa e protege seus dados pessoais. Nossa política de privacidade em conformidade com LGPD e GDPR."
        canonicalUrl="https://aurum.foundation/politica-de-privacidade"
        keywords="política de privacidade, proteção de dados, LGPD, GDPR, Aurum Foundation"
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
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Documento Legal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Política de{' '}
                <span className="text-gradient">Privacidade</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                Seu direito à privacidade é nossa prioridade. Entenda como protegemos suas informações pessoais.
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

        {/* Quick Navigation */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="w-5 h-5 text-primary" />
                    Índice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm text-muted-foreground hover:text-foreground"
                      >
                        <section.icon className="w-4 h-4 text-primary shrink-0" />
                        <span className="truncate">{section.title}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16 lg:py-24">
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
                                } else if (line.startsWith('| ')) {
                                  return null; // Skip table rows for now
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Dúvidas sobre Privacidade?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nossa equipe de proteção de dados está disponível para esclarecer qualquer questão sobre o tratamento de suas informações pessoais.
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

export default PoliticaPrivacidade;
