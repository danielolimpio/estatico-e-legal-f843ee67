import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  MessageCircle,
  Bot,
  CreditCard,
  Shield,
  Coins,
  Zap,
  Building2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    category: "Geral",
    icon: HelpCircle,
    gradient: "from-blue-500 to-cyan-500",
    questions: [
      {
        question: "O que é a Aurum Foundation?",
        answer: "A Aurum Foundation é uma empresa de tecnologia financeira sediada em Hong Kong, especializada em soluções de IA e Blockchain para gestão de ativos digitais. Oferecemos um ecossistema completo de produtos e serviços para maximizar seus investimentos em criptomoedas."
      },
      {
        question: "Como posso começar a usar os serviços da Aurum?",
        answer: "Para começar, basta criar uma conta em nossa plataforma. Você pode então escolher o plano de assinatura Aurum por $19,99/ano e ter acesso a todos os nossos produtos e serviços, incluindo bots de negociação, Flash Loans, Neo-Bank e muito mais."
      },
      {
        question: "A Aurum Foundation é regulamentada?",
        answer: "Sim, a Aurum Foundation opera sob as regulamentações de Hong Kong e possui certificação de compliance (Certificado No.: 77289699-000-11-24-6). Priorizamos transparência e segurança em todas as nossas operações."
      },
      {
        question: "Quais moedas e tokens são suportados?",
        answer: "Suportamos as principais criptomoedas do mercado, incluindo BTC, ETH, USDT, BNB, SOL, e muitas outras. Nosso token nativo AURUM também é central para o funcionamento do ecossistema."
      }
    ]
  },
  {
    category: "Bots de Negociação",
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    questions: [
      {
        question: "Como funciona o EX-AI Bot?",
        answer: "O EX-AI Bot é um sistema de negociação autônomo que opera 24/7. Utilizando inteligência artificial avançada, ele analisa dados de mercado em tempo real, executa trades estratégicos e adapta-se às condições do mercado, tudo de forma automatizada."
      },
      {
        question: "Qual é o retorno esperado dos bots?",
        answer: "O EX-AI Bot tem uma média histórica de retorno de +18,5% ao mês ao longo de 1,5 anos. O Zeus AI Bot oferece retornos entre 10-15% mensais. Resultados passados não garantem resultados futuros, e todo investimento envolve riscos."
      },
      {
        question: "Preciso ter experiência em trading para usar os bots?",
        answer: "Não! Nossos bots foram projetados para serem totalmente autônomos. Você não precisa de experiência em trading - basta configurar seu investimento inicial e o bot faz o resto."
      },
      {
        question: "Como monitoro o desempenho do meu bot?",
        answer: "Oferecemos um dashboard em tempo real onde você pode acompanhar todos os seus trades, lucros, histórico de operações e métricas de desempenho. Você tem total transparência sobre suas operações."
      }
    ]
  },
  {
    category: "Flash Loans",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
    questions: [
      {
        question: "O que são Flash Loans?",
        answer: "Flash Loans são empréstimos instantâneos sem colateral, executados em uma única transação blockchain. Nosso sistema usa esses empréstimos para realizar arbitragem entre exchanges descentralizadas, gerando lucros sem risco de capital."
      },
      {
        question: "Como funciona a arbitragem com Flash Loans?",
        answer: "Nosso algoritmo de IA identifica diferenças de preço do mesmo ativo em diferentes DEXs. Ele toma emprestado fundos da AAVE, compra o ativo onde está mais barato, vende onde está mais caro, paga o empréstimo e mantém o lucro - tudo em segundos."
      },
      {
        question: "Qual é o retorno potencial dos Flash Loans?",
        answer: "O sistema de Flash Loans pode gerar até 270% APY (rendimento anual). O retorno real depende das oportunidades de arbitragem disponíveis no mercado."
      }
    ]
  },
  {
    category: "Cartões & Neo-Bank",
    icon: CreditCard,
    gradient: "from-emerald-500 to-teal-500",
    questions: [
      {
        question: "Como funciona o Aurum Card?",
        answer: "O Aurum Card permite que você gaste suas criptomoedas em qualquer estabelecimento que aceite Visa/Mastercard. A conversão de cripto para moeda local é feita instantaneamente no momento da compra."
      },
      {
        question: "Preciso de verificação KYC para ter um cartão?",
        answer: "Os três primeiros cartões podem ser emitidos sem verificação KYC. Para o cartão Infinity, com limite de $100.000/mês, a verificação é necessária."
      },
      {
        question: "Os cartões funcionam com Apple Pay e Google Pay?",
        answer: "Sim! Nossos cartões são totalmente compatíveis com Apple Pay e Google Pay, permitindo pagamentos contactless em milhões de estabelecimentos em todo o mundo."
      },
      {
        question: "Quais são as taxas do Neo-Bank?",
        answer: "O Neo-Bank oferece taxas extremamente competitivas: 0,5% para depósitos e saques, sem taxas de manutenção mensais. Você pode ver todas as taxas detalhadas em nossa página de serviços."
      }
    ]
  },
  {
    category: "AURUM Token",
    icon: Coins,
    gradient: "from-pink-500 to-rose-500",
    questions: [
      {
        question: "O que é o AURUM Token?",
        answer: "O AURUM Token é o ativo nativo do ecossistema Aurum Foundation. Ele é usado para ativar algoritmos Flash, staking, recompensas e acesso a recursos exclusivos da plataforma."
      },
      {
        question: "Como funciona o mecanismo deflacionário?",
        answer: "Uma parte dos tokens AURUM usados em transações e na compra de licenças é permanentemente queimada. Isso reduz gradualmente a oferta total, aumentando a escassez e potencialmente o valor do token."
      },
      {
        question: "Posso fazer staking do AURUM Token?",
        answer: "Sim! Você pode fazer staking dos seus tokens AURUM para ganhar recompensas passivas e contribuir para a segurança da rede. As taxas de staking variam de acordo com o período de bloqueio."
      }
    ]
  },
  {
    category: "Segurança",
    icon: Shield,
    gradient: "from-indigo-500 to-blue-500",
    questions: [
      {
        question: "Meus fundos estão seguros na Aurum?",
        answer: "Sim. Utilizamos criptografia de ponta, armazenamento cold wallet para a maioria dos fundos, autenticação de dois fatores (2FA) e passamos por auditorias regulares de segurança. Seus ativos estão protegidos com os mais altos padrões do mercado."
      },
      {
        question: "Os smart contracts são auditados?",
        answer: "Todos os nossos smart contracts passam por auditorias rigorosas de empresas de segurança reconhecidas no mercado antes de serem implantados. Os relatórios de auditoria estão disponíveis em nossa documentação."
      },
      {
        question: "Como a Aurum protege contra fraudes?",
        answer: "Implementamos sistemas avançados de detecção de fraudes, monitoramento 24/7, verificações de identidade quando necessário e protocolos de segurança em múltiplas camadas para proteger você e seus ativos."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="FAQ | Aurum Foundation - Perguntas Frequentes"
        description="Encontre respostas para as perguntas mais frequentes sobre a Aurum Foundation, nossos produtos, serviços e tecnologias."
        canonicalUrl="https://aurumfoundation.world/faq"
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
              <HelpCircle className="w-4 h-4 mr-2" />
              Central de Ajuda
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Perguntas <span className="text-primary">Frequentes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Encontre respostas rápidas para as dúvidas mais comuns sobre nossos produtos e serviços.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.category}</h2>
                  </div>
                </div>
                
                <Accordion type="single" collapsible className="px-6">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-border/50"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center bg-card/80 backdrop-blur-sm border-border/50">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nossa equipe de suporte está pronta para ajudar você. Entre em contato conosco e responderemos o mais rápido possível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-full">
                <Link to="/suporte">
                  Falar com Suporte
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/contato">
                  Enviar Mensagem
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
