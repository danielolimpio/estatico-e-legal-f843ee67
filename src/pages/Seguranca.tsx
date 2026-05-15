import ProductPage from '@/components/ProductPage';

const Seguranca = () => (
  <ProductPage
    slug="seguranca"
    title="Segurança | Aurum Foundation - Custódia e Proteção Institucional"
    description="Conheça as práticas de segurança da Aurum Foundation: custódia institucional, criptografia, auditorias e monitoramento 24/7 do ecossistema cripto."
    keywords="segurança Aurum, custódia cripto, segurança Aurum Foundation, proteção criptomoedas, segurança blockchain"
    h1="Segurança Aurum Foundation"
    subtitle="Padrões institucionais de segurança aplicados a todo o ecossistema: custódia segregada, monitoramento 24/7 e auditoria contínua."
    intro="A segurança é o pilar central da Aurum Foundation. Combinamos custódia institucional, criptografia de ponta, monitoramento em tempo real e auditorias independentes para proteger seus ativos digitais com o mesmo rigor das maiores instituições financeiras do mundo."
    sections={[
      {
        h2: 'Custódia institucional segregada',
        paragraphs: [
          'A Aurum Foundation opera com parceiros de custódia regulados, mantendo os ativos dos clientes segregados dos ativos operacionais. Carteiras frias multi-assinatura armazenam a maior parte dos fundos, enquanto carteiras quentes de operação seguem limites estritos.',
        ],
      },
      {
        h2: 'Camadas de proteção do usuário',
        paragraphs: [
          'Autenticação 2FA, whitelist de saques, anti-phishing code, detecção de dispositivos e biometria garantem que apenas o titular acesse a conta. O time de risco monitora padrões anômalos 24/7 para bloquear movimentações suspeitas.',
        ],
      },
      {
        h2: 'Conformidade regulatória',
        paragraphs: [
          'A Aurum Foundation atua sob 3 licenças internacionais, com programas de KYC, AML e prevenção a fraudes alinhados aos padrões globais (FATF). Auditorias independentes e provas de reservas são publicadas regularmente.',
        ],
      },
    ]}
    features={[
      'Custódia institucional segregada',
      'Cold wallets multi-assinatura',
      'Autenticação 2FA e biometria',
      'Whitelist de saques',
      'Monitoramento antifraude 24/7',
      'Prova de reservas auditada',
    ]}
    faqs={[
      { q: 'Onde meus ativos ficam guardados?', a: 'Em custódia institucional segregada com carteiras frias multi-assinatura e parceiros regulados.' },
      { q: 'A Aurum tem prova de reservas?', a: 'Sim. A Aurum Foundation publica auditorias e prova de reservas periodicamente.' },
      { q: 'O que fazer se eu suspeitar de fraude?', a: 'Acione imediatamente o suporte oficial da Aurum Foundation e bloqueie o acesso pela conta.' },
    ]}
  />
);

export default Seguranca;
