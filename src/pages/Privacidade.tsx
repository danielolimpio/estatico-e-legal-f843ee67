import ProductPage from '@/components/ProductPage';

const Privacidade = () => (
  <ProductPage
    slug="privacidade"
    title="Política de Privacidade | Aurum Foundation"
    description="Política de Privacidade da Aurum Foundation: como coletamos, usamos e protegemos seus dados pessoais no ecossistema cripto, NeoBank e Exchange."
    keywords="privacidade Aurum, política de privacidade Aurum Foundation, LGPD, GDPR cripto, dados pessoais"
    h1="Política de Privacidade"
    subtitle="Como a Aurum Foundation coleta, utiliza, armazena e protege seus dados pessoais."
    intro="Esta Política de Privacidade descreve as práticas da Aurum Foundation em relação aos dados pessoais coletados de usuários do ecossistema, em conformidade com a LGPD, o GDPR e demais regulações internacionais aplicáveis."
    sections={[
      {
        h2: '1. Dados que coletamos',
        paragraphs: [
          'Dados cadastrais (nome, e-mail, telefone), documentos de KYC, dados financeiros, dados de uso da plataforma, dispositivo, IP e cookies de navegação.',
        ],
      },
      {
        h2: '2. Como usamos seus dados',
        paragraphs: [
          'Para identificação e prevenção a fraudes, cumprimento de obrigações legais e regulatórias, prestação dos serviços contratados, comunicação institucional e melhoria contínua dos produtos.',
        ],
      },
      {
        h2: '3. Compartilhamento',
        paragraphs: [
          'Compartilhamos dados apenas com parceiros de custódia, processadores de pagamento, autoridades competentes e prestadores de serviços essenciais à operação, sempre sob obrigação contratual de confidencialidade.',
        ],
      },
      {
        h2: '4. Seus direitos',
        paragraphs: [
          'Você pode solicitar acesso, correção, portabilidade, anonimização ou exclusão dos seus dados a qualquer momento, observadas as obrigações regulatórias de retenção.',
        ],
      },
      {
        h2: '5. Segurança',
        paragraphs: [
          'Aplicamos criptografia em trânsito e em repouso, controles de acesso por privilégio mínimo e auditorias periódicas para proteger seus dados.',
        ],
      },
      {
        h2: '6. Encarregado de dados (DPO)',
        paragraphs: [
          'Solicitações relacionadas à privacidade podem ser feitas pelos canais oficiais indicados na página de Contato.',
        ],
      },
    ]}
    features={[
      'Conformidade LGPD e GDPR',
      'Criptografia em trânsito e repouso',
      'Direito de acesso e exclusão',
      'Compartilhamento controlado',
      'Auditorias periódicas',
      'DPO disponível',
    ]}
    faqs={[
      { q: 'Vocês vendem meus dados?', a: 'Não. A Aurum Foundation não comercializa dados pessoais.' },
      { q: 'Posso pedir exclusão dos meus dados?', a: 'Sim, observadas as obrigações regulatórias de retenção.' },
      { q: 'Onde meus dados ficam armazenados?', a: 'Em provedores de nuvem com padrões internacionais de segurança e residência adequada à legislação aplicável.' },
    ]}
  />
);

export default Privacidade;
