import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Shield, 
  Scale, 
  Users, 
  Ban, 
  AlertTriangle, 
  CreditCard, 
  Lock, 
  Globe, 
  MessageSquare, 
  Clock, 
  Mail,
  Gavel,
  BookOpen,
  Wallet,
  Bot,
  Zap,
  Building2,
  Coins,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';

const TermosDeUso = () => {
  const lastUpdated = "26 de dezembro de 2025";

  const sections = [
    {
      id: "aceitacao",
      icon: CheckCircle2,
      title: "1. Aceitação dos Termos",
      content: `Bem-vindo à Aurum Foundation. Estes Termos de Uso ("Termos") constituem um acordo legal vinculativo entre você ("Usuário", "você" ou "seu") e Aurum Foundation ("Aurum", "nós", "nosso" ou "Empresa"), com sede em UNIT 503, 5/FL. SILVERCORD TOWER 2, 30 CANTON ROAD, TSIM SHA TSUI, Hong Kong (Certificado No.: 77289699-000-11-24-6).

Ao acessar, registrar-se ou utilizar qualquer um de nossos serviços — incluindo, mas não limitado a, Aurum EX-AI Bot, Aurum Zeus AI Bot, Aurum Flash Loans, Aurum Neo-Bank, Aurum Card, Aurum Exchange, Aurum Token (AURUM) e Plano de Assinatura Aurum — você declara que:

**1.1 Concordância**
- Leu, compreendeu e concorda em estar vinculado a estes Termos
- Concorda com nossa Política de Privacidade e Política de Cookies
- Tem capacidade legal para celebrar este acordo

**1.2 Requisitos de Elegibilidade**
- Tem no mínimo 18 anos de idade
- Possui capacidade civil plena para atos da vida civil
- Não está sujeito a sanções ou restrições internacionais
- Reside em jurisdição onde nossos serviços são permitidos

**1.3 Atualizações dos Termos**
Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão notificadas através de:
- Aviso destacado em nossa plataforma
- E-mail para usuários registrados
- Atualização da data de "última modificação"

O uso continuado de nossos serviços após tais modificações constitui sua aceitação dos Termos revisados.`
    },
    {
      id: "servicos",
      icon: Globe,
      title: "2. Descrição dos Serviços",
      content: `A Aurum Foundation oferece um ecossistema completo de produtos e serviços financeiros baseados em tecnologia blockchain e inteligência artificial:

**2.1 Aurum EX-AI Bot**
Sistema de negociação automatizada 24/7 que utiliza inteligência artificial para executar trades em mercados de criptomoedas. Inclui:
- Análise de mercado em tempo real
- Execução automática de ordens
- Gestão de risco integrada
- Dashboard de acompanhamento

**2.2 Aurum Zeus AI Bot**
Ferramenta multifuncional via Telegram para gestão de criptoativos:
- Negociação automatizada em múltiplos pares
- Depósitos e saques flexíveis
- Renda passiva através de estratégias de IA

**2.3 Aurum Flash Loans**
Sistema de arbitragem DeFi que opera através de empréstimos flash:
- Identificação automática de oportunidades
- Operações sem colateral via AAVE
- Execução em uma única transação

**2.4 Aurum Neo-Bank**
Hub financeiro completo para gestão de criptoativos:
- Emissão de cartões virtuais e físicos
- Operações bancárias globais
- Programa de parceria e comissões

**2.5 Aurum Card**
Cartões de criptomoedas para pagamentos globais:
- Integração com Apple Pay e Google Pay
- Conversão instantânea para moedas locais
- Disponível em versões Imperium, World Elite e Infinity

**2.6 Aurum Exchange**
Exchange descentralizada (DEX) de próxima geração:
- Liquidez profunda
- Negociação cross-chain
- Suporte a fiat

**2.7 Aurum Token (AURUM)**
Token nativo do ecossistema:
- Ativação de recursos premium
- Staking e recompensas
- Mecanismo deflacionário

**2.8 Plano de Assinatura Aurum**
Acesso completo ao ecossistema por $19,99/ano:
- Todos os produtos e serviços
- Programas de indicação
- Conteúdo educacional exclusivo`
    },
    {
      id: "conta",
      icon: Users,
      title: "3. Registro e Conta do Usuário",
      content: `Para utilizar nossos serviços, você deve criar uma conta na plataforma Aurum:

**3.1 Processo de Registro**
Ao se registrar, você deve fornecer:
- Informações pessoais verdadeiras e atualizadas
- Endereço de e-mail válido
- Número de telefone para verificação
- Documentos de identificação quando solicitado

**3.2 Verificação de Identidade (KYC)**
Dependendo do nível de serviço desejado, podemos exigir:
- Documento de identidade com foto (RG, CNH, passaporte)
- Comprovante de residência
- Selfie com documento
- Comprovação de origem dos fundos

**3.3 Responsabilidades do Usuário**
Você é responsável por:
- Manter a confidencialidade de suas credenciais
- Todas as atividades realizadas em sua conta
- Notificar imediatamente sobre uso não autorizado
- Manter informações de cadastro atualizadas

**3.4 Segurança da Conta**
Implementamos medidas de segurança, incluindo:
- Autenticação de dois fatores (2FA)
- Monitoramento de atividades suspeitas
- Criptografia de dados sensíveis
- Timeouts de sessão

**3.5 Múltiplas Contas**
É proibido criar múltiplas contas por pessoa física ou jurídica, exceto quando expressamente autorizado.

**3.6 Encerramento de Conta**
Você pode solicitar o encerramento de sua conta a qualquer momento. Manteremos seus dados conforme exigido por lei e nossa Política de Privacidade.`
    },
    {
      id: "uso-aceitavel",
      icon: CheckCircle2,
      title: "4. Uso Aceitável",
      content: `Ao utilizar nossos serviços, você concorda em:

**4.1 Condutas Permitidas**
- Utilizar os serviços apenas para fins legais e legítimos
- Fornecer informações verdadeiras e precisas
- Cumprir todas as leis e regulamentações aplicáveis
- Respeitar os direitos de outros usuários
- Reportar atividades suspeitas ou fraudulentas

**4.2 Melhores Práticas**
- Proteger suas credenciais de acesso
- Utilizar conexões seguras (evitar Wi-Fi público)
- Manter software e dispositivos atualizados
- Verificar endereços de carteira antes de transações
- Começar com valores menores para se familiarizar

**4.3 Limites de Uso**
Nossos serviços estão sujeitos a:
- Limites de transação diários e mensais
- Restrições geográficas específicas
- Limites de volume para determinados produtos
- Requisitos mínimos de investimento

**4.4 Integridade do Sistema**
Você concorda em não:
- Tentar burlar medidas de segurança
- Sobrecarregar nossos sistemas intencionalmente
- Utilizar bots não autorizados ou scripts automatizados
- Interferir no funcionamento da plataforma`
    },
    {
      id: "uso-proibido",
      icon: Ban,
      title: "5. Condutas Proibidas",
      content: `As seguintes atividades são estritamente proibidas e resultarão em suspensão ou encerramento imediato da conta:

**5.1 Atividades Ilegais**
- Lavagem de dinheiro ou financiamento ao terrorismo
- Fraude, estelionato ou apropriação indébita
- Evasão fiscal ou ocultação de ativos
- Violação de sanções internacionais
- Qualquer atividade criminosa

**5.2 Manipulação de Mercado**
- Pump and dump schemes
- Wash trading (negociação consigo mesmo)
- Spoofing (ordens falsas para manipular preços)
- Front-running
- Disseminação de informações falsas

**5.3 Violações de Segurança**
- Hacking, phishing ou engenharia social
- Criação de vírus, malware ou código malicioso
- Tentativa de acesso não autorizado a contas
- Mineração não autorizada de dados
- Ataques DDoS ou similares

**5.4 Abuso da Plataforma**
- Criação de contas falsas ou múltiplas
- Uso de VPN para burlar restrições geográficas
- Transferência de conta para terceiros
- Revenda não autorizada de serviços
- Abuso de programas de indicação

**5.5 Conteúdo Inadequado**
- Publicação de conteúdo difamatório ou ofensivo
- Spam ou comunicações não solicitadas
- Violação de direitos de propriedade intelectual
- Divulgação de informações confidenciais de terceiros

**5.6 Consequências**
Violações podem resultar em:
- Suspensão temporária ou permanente da conta
- Congelamento de fundos para investigação
- Reportagem às autoridades competentes
- Ações legais para recuperação de danos`
    },
    {
      id: "riscos",
      icon: AlertTriangle,
      title: "6. Riscos e Isenções",
      content: `O uso de nossos serviços envolve riscos significativos. É essencial que você compreenda:

**6.1 Riscos de Mercado**
- Criptomoedas são altamente voláteis
- Valores podem cair significativamente em curtos períodos
- Perdas podem exceder o investimento inicial em produtos alavancados
- Desempenho passado não garante resultados futuros

**6.2 Riscos Tecnológicos**
- Falhas de software ou hardware podem ocorrer
- Ataques cibernéticos podem afetar a plataforma
- Erros em smart contracts podem causar perdas
- Congestionamento de rede pode atrasar transações

**6.3 Riscos Regulatórios**
- Regulamentações podem mudar sem aviso prévio
- Serviços podem ser restritos em determinadas jurisdições
- Mudanças fiscais podem afetar a rentabilidade
- Cooperação com autoridades pode ser exigida

**6.4 Riscos Específicos dos Produtos**

*Bots de Negociação (EX-AI e Zeus)*
- Algoritmos podem falhar em condições extremas de mercado
- Retornos prometidos não são garantidos
- Configurações inadequadas podem amplificar perdas

*Flash Loans*
- Operações podem falhar e não ser executadas
- Taxas de gás podem consumir lucros potenciais
- Oportunidades de arbitragem podem desaparecer rapidamente

*Aurum Card*
- Taxas de conversão podem variar
- Limites de gasto podem ser alterados
- Comerciantes podem recusar aceitação

**6.5 Declaração de Risco**
VOCÊ RECONHECE QUE:
- Compreende os riscos envolvidos
- Está investindo apenas valores que pode perder
- Não responsabilizará a Aurum por perdas de mercado
- Buscou assessoria financeira independente se necessário`
    },
    {
      id: "taxas",
      icon: CreditCard,
      title: "7. Taxas e Pagamentos",
      content: `Os serviços da Aurum Foundation estão sujeitos a diversas taxas:

**7.1 Estrutura de Taxas**

*Plano de Assinatura*
- Taxa anual: $19,99
- Renovação automática (pode ser cancelada)
- Acesso a todos os recursos da plataforma

*Transações de Criptomoedas*
- Taxas de rede (gas fees): variáveis conforme blockchain
- Taxa de serviço: conforme tabela em vigor

*Aurum Neo-Bank e Card*
- Taxa de depósito: 0,5%
- Taxa de saque: 0,5%
- Processamento: até 72 horas úteis

*Flash Loans*
- Taxa de protocolo: conforme AAVE
- Taxa de sucesso: percentual sobre lucro

**7.2 Forma de Cobrança**
- Taxas são cobradas automaticamente
- Deduzidas do saldo disponível ou transação
- Convertidas para a moeda de referência quando necessário

**7.3 Alterações de Taxas**
- Taxas podem ser alteradas com aviso prévio de 30 dias
- Usuários serão notificados por e-mail e na plataforma
- Uso continuado após alteração implica concordância

**7.4 Reembolsos**
- Taxa de assinatura: reembolsável nos primeiros 14 dias
- Taxas de transação: não reembolsáveis após execução
- Casos especiais: analisados individualmente

**7.5 Impostos**
Você é responsável por:
- Declarar e pagar impostos aplicáveis
- Manter registros de transações
- Consultar contador ou advogado tributário`
    },
    {
      id: "propriedade-intelectual",
      icon: BookOpen,
      title: "8. Propriedade Intelectual",
      content: `Todo o conteúdo e tecnologia da Aurum Foundation são protegidos por direitos de propriedade intelectual:

**8.1 Direitos da Aurum**
São de propriedade exclusiva da Aurum:
- Marca "Aurum", "Aurum Foundation" e variações
- Logotipos, ícones e elementos visuais
- Software, algoritmos e código-fonte
- Conteúdo textual, gráfico e multimídia
- Nomes de produtos e serviços

**8.2 Licença Limitada**
Concedemos a você uma licença:
- Pessoal, intransferível e não exclusiva
- Para uso dos serviços conforme estes Termos
- Revogável a qualquer momento
- Sem direito de sublicenciamento

**8.3 Restrições**
Você não pode:
- Copiar, modificar ou criar obras derivadas
- Fazer engenharia reversa do software
- Remover avisos de direitos autorais
- Usar nossas marcas sem autorização
- Redistribuir ou revender nosso conteúdo

**8.4 Conteúdo do Usuário**
Quanto a conteúdo que você publica:
- Você mantém a propriedade original
- Concede à Aurum licença para uso na plataforma
- Garante ter direitos sobre o conteúdo
- É responsável por violações de terceiros

**8.5 Feedback**
Sugestões e feedback enviados à Aurum:
- Tornam-se propriedade da Aurum
- Podem ser usados sem compensação
- Não criam obrigação de implementação`
    },
    {
      id: "limitacao-responsabilidade",
      icon: Scale,
      title: "9. Limitação de Responsabilidade",
      content: `Na extensão máxima permitida por lei:

**9.1 Isenção de Garantias**
OS SERVIÇOS SÃO FORNECIDOS "COMO ESTÃO" E "CONFORME DISPONÍVEIS", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO:
- Garantias de comercialização
- Adequação a um propósito específico
- Não violação de direitos de terceiros
- Operação ininterrupta ou livre de erros

**9.2 Limitação de Danos**
A AURUM NÃO SERÁ RESPONSÁVEL POR:
- Perdas de lucros ou receitas
- Perda de dados ou interrupção de negócios
- Danos indiretos, incidentais ou consequenciais
- Perdas decorrentes de volatilidade de mercado
- Falhas de terceiros ou provedores de serviços

**9.3 Teto de Responsabilidade**
Em nenhuma circunstância nossa responsabilidade total excederá o maior valor entre:
- Taxas pagas por você nos últimos 12 meses
- USD 1.000,00 (mil dólares americanos)

**9.4 Exclusões**
Esta limitação não se aplica a:
- Danos causados por dolo ou má-fé
- Violação de direitos fundamentais
- Situações onde a lei proíba tal limitação

**9.5 Força Maior**
Não seremos responsáveis por falhas decorrentes de:
- Desastres naturais ou guerras
- Pandemias ou emergências sanitárias
- Falhas de infraestrutura de terceiros
- Ações governamentais ou regulatórias
- Outros eventos fora de nosso controle razoável`
    },
    {
      id: "indenizacao",
      icon: Shield,
      title: "10. Indenização",
      content: `Você concorda em defender, indenizar e manter a Aurum Foundation, seus diretores, funcionários, agentes e afiliados livres de quaisquer reclamações, danos, perdas, responsabilidades e despesas (incluindo honorários advocatícios razoáveis) decorrentes de:

**10.1 Escopo da Indenização**
- Seu uso dos serviços
- Violação destes Termos por você
- Violação de leis ou regulamentos aplicáveis
- Violação de direitos de terceiros
- Conteúdo que você publicar ou transmitir
- Sua negligência ou má conduta intencional

**10.2 Procedimento**
Em caso de reclamação:
- Notificaremos você prontamente
- Você terá direito de assumir a defesa
- Cooperaremos razoavelmente com sua defesa
- Não faremos acordo sem sua aprovação (que não será negada injustificadamente)

**10.3 Direito de Participação**
Reservamo-nos o direito de:
- Participar da defesa a nosso custo
- Assumir a defesa exclusiva em casos críticos
- Aprovar qualquer acordo proposto

**10.4 Sobrevivência**
Esta obrigação de indenização sobreviverá ao término destes Termos.`
    },
    {
      id: "suspensao-encerramento",
      icon: Lock,
      title: "11. Suspensão e Encerramento",
      content: `A Aurum Foundation reserva-se o direito de suspender ou encerrar seu acesso aos serviços:

**11.1 Por Nossa Iniciativa**
Podemos suspender ou encerrar sua conta por:
- Violação destes Termos
- Atividades suspeitas ou fraudulentas
- Solicitação de autoridades competentes
- Descumprimento de obrigações de pagamento
- Inatividade prolongada (após notificação)
- Motivos de segurança da plataforma
- Descontinuação de serviços

**11.2 Por Sua Iniciativa**
Você pode encerrar sua conta:
- A qualquer momento, através das configurações
- Mediante solicitação ao suporte
- O encerramento não elimina obrigações pendentes

**11.3 Efeitos do Encerramento**
Após encerramento:
- Seu acesso aos serviços será revogado
- Dados serão tratados conforme Política de Privacidade
- Saldos serão devolvidos (menos taxas aplicáveis)
- Transações pendentes serão finalizadas ou canceladas
- Licenças concedidas serão revogadas

**11.4 Períodos de Carência**
Em casos de suspensão por violação:
- Você terá oportunidade de regularização quando possível
- Saldos podem ser congelados durante investigação
- Prazo típico de investigação: até 30 dias

**11.5 Sobrevivência**
As seguintes disposições sobrevivem ao encerramento:
- Obrigações de indenização
- Limitações de responsabilidade
- Direitos de propriedade intelectual
- Cláusulas de resolução de disputas`
    },
    {
      id: "resolucao-disputas",
      icon: Gavel,
      title: "12. Resolução de Disputas",
      content: `Em caso de disputas decorrentes destes Termos ou do uso de nossos serviços:

**12.1 Negociação Amigável**
Antes de iniciar qualquer procedimento formal:
- Entre em contato conosco para resolver a questão
- Faremos esforços razoáveis para solucionar amigavelmente
- Prazo para negociação: 30 dias

**12.2 Mediação**
Se a negociação falhar:
- As partes podem acordar mediação
- Custos divididos igualmente
- Mediador escolhido de comum acordo

**12.3 Arbitragem**
Disputas não resolvidas serão submetidas a arbitragem:
- Sede: Hong Kong
- Idioma: Inglês ou Português (conforme eleição do usuário)
- Decisão final e vinculativa
- Custos conforme regras do centro de arbitragem

**12.4 Exceções à Arbitragem**
Podem ser submetidas a tribunais:
- Medidas cautelares urgentes
- Proteção de propriedade intelectual
- Casos de pequenas causas (onde disponível)

**12.5 Renúncia à Ação Coletiva**
Você concorda em não participar de ações coletivas contra a Aurum, exceto onde proibido por lei.

**12.6 Lei Aplicável**
Estes Termos são regidos pelas leis de Hong Kong, sem consideração a princípios de conflitos de leis.

**12.7 Foro**
Para questões não sujeitas a arbitragem, fica eleito o foro de Hong Kong.`
    },
    {
      id: "disposicoes-gerais",
      icon: FileText,
      title: "13. Disposições Gerais",
      content: `**13.1 Acordo Integral**
Estes Termos, juntamente com nossa Política de Privacidade e Política de Cookies, constituem o acordo integral entre você e a Aurum, substituindo quaisquer acordos anteriores.

**13.2 Independência das Cláusulas**
Se qualquer disposição for considerada inválida ou inexequível, as demais permanecerão em pleno vigor.

**13.3 Não Renúncia**
A falha em exercer qualquer direito não constitui renúncia a esse direito.

**13.4 Cessão**
Você não pode ceder seus direitos ou obrigações sem nosso consentimento prévio. Podemos ceder este acordo a afiliadas ou em caso de fusão/aquisição.

**13.5 Notificações**
Notificações serão enviadas:
- Para você: e-mail cadastrado ou na plataforma
- Para nós: contato@aurumfoundation.world

**13.6 Idioma**
Em caso de conflito entre versões em diferentes idiomas, prevalece a versão em português.

**13.7 Títulos**
Os títulos das seções são apenas para referência e não afetam a interpretação.

**13.8 Relação entre as Partes**
Nada nestes Termos cria parceria, emprego ou representação comercial.

**13.9 Força Executória**
Estes Termos são executórios e vinculativos para as partes e seus sucessores.`
    },
    {
      id: "contato",
      icon: Mail,
      title: "14. Contato",
      content: `Para questões sobre estes Termos de Uso:

**14.1 Contato Principal**
E-mail: contato@aurumfoundation.world
E-mail Jurídico: legal@aurumfoundation.world
WhatsApp: +55 12 98140-8992

**14.2 Endereço**
Aurum Foundation
UNIT 503, 5/FL. SILVERCORD TOWER 2
30 CANTON ROAD, TSIM SHA TSUI
Hong Kong

Certificado No.: 77289699-000-11-24-6

**14.3 Horário de Atendimento**
Segunda a Sexta: 9h às 18h (Horário de Hong Kong)
Suporte técnico: 24/7 via plataforma

**14.4 Tempo de Resposta**
Consultas gerais: até 5 dias úteis
Questões jurídicas: até 15 dias úteis
Emergências de segurança: imediato

**14.5 Reclamações Formais**
Para reclamações formais, envie para:
legal@aurumfoundation.world
Com o assunto: "RECLAMAÇÃO FORMAL - [seu nome]"

Incluindo:
- Descrição detalhada da questão
- Documentação de suporte
- Resultado desejado
- Dados de contato`
    }
  ];

  return (
    <>
      <SEOHead
        title="Termos de Uso | Aurum Foundation"
        description="Leia os Termos de Uso da Aurum Foundation. Conheça seus direitos e responsabilidades ao utilizar nossos serviços."
        canonicalUrl="https://aurum.foundation/termos-de-uso"
        keywords="termos de uso, termos de serviço, condições gerais, Aurum Foundation"
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
                <Gavel className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Documento Legal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Termos de{' '}
                <span className="text-gradient">Uso</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                Condições gerais para utilização dos serviços e produtos da Aurum Foundation.
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

        {/* Important Notice */}
        <section className="py-8">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-amber-500/50 bg-amber-500/5">
                <CardContent className="flex items-start gap-4 p-6">
                  <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-500 mb-2">Aviso Importante</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ao utilizar qualquer serviço da Aurum Foundation, você confirma que leu, compreendeu e concorda com estes Termos de Uso. 
                      Investimentos em criptomoedas envolvem riscos significativos, incluindo a possível perda total do capital investido. 
                      Consulte um profissional financeiro antes de tomar decisões de investimento.
                    </p>
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
                          {paragraph.startsWith('**') || paragraph.includes('\n**') ? (
                            <div className="space-y-2">
                              {paragraph.split('\n').map((line, lIndex) => {
                                if (line.startsWith('**') && line.endsWith('**')) {
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
                                } else if (line.startsWith('*') && line.endsWith('*')) {
                                  return (
                                    <p key={lIndex} className="text-muted-foreground italic">
                                      {line.replace(/\*/g, '')}
                                    </p>
                                  );
                                } else if (line.toUpperCase() === line && line.length > 10) {
                                  return (
                                    <p key={lIndex} className="text-foreground font-semibold text-sm uppercase tracking-wide mt-4">
                                      {line}
                                    </p>
                                  );
                                }
                                return line ? (
                                  <p key={lIndex} className="text-muted-foreground leading-relaxed">
                                    {line}
                                  </p>
                                ) : null;
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
                Dúvidas sobre os Termos?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nossa equipe jurídica está disponível para esclarecer qualquer questão sobre estes Termos de Uso ou sobre a utilização de nossos serviços.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:legal@aurumfoundation.world"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  legal@aurumfoundation.world
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Falar com Suporte
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

export default TermosDeUso;
