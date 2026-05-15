import ProductPage from '@/components/ProductPage';

const Cookies = () => (
  <ProductPage
    slug="cookies"
    title="Política de Cookies | Aurum Foundation"
    description="Política de Cookies da Aurum Foundation: tipos de cookies utilizados, finalidades e como gerenciar suas preferências de navegação."
    keywords="cookies Aurum, política de cookies Aurum Foundation, gerenciar cookies, LGPD cookies"
    h1="Política de Cookies"
    subtitle="Como a Aurum Foundation utiliza cookies para melhorar sua experiência e segurança."
    intro="A Aurum Foundation utiliza cookies e tecnologias semelhantes para garantir o funcionamento dos serviços, prevenir fraudes, lembrar suas preferências e medir a performance dos produtos."
    sections={[
      {
        h2: '1. O que são cookies',
        paragraphs: [
          'Cookies são pequenos arquivos armazenados no seu dispositivo quando você visita um site. Eles permitem reconhecer o navegador, manter sessões ativas e personalizar a experiência.',
        ],
      },
      {
        h2: '2. Tipos de cookies que usamos',
        paragraphs: [
          'Essenciais: necessários para login, sessão e segurança da conta.',
          'Funcionais: lembram preferências como idioma e moeda.',
          'Analíticos: medem uso e desempenho para melhorar a plataforma.',
          'Marketing: mensuram performance de campanhas e personalizam conteúdo (somente com consentimento).',
        ],
      },
      {
        h2: '3. Como gerenciar cookies',
        paragraphs: [
          'Você pode aceitar, recusar ou apagar cookies a qualquer momento pelas configurações do seu navegador. Desabilitar cookies essenciais pode impedir o uso de partes da plataforma.',
        ],
      },
      {
        h2: '4. Atualizações',
        paragraphs: [
          'Esta política pode ser atualizada para refletir mudanças regulatórias ou novas funcionalidades. A versão vigente é sempre a publicada nesta página.',
        ],
      },
    ]}
    features={[
      'Cookies essenciais protegidos',
      'Controle pelo navegador',
      'Conformidade com LGPD/GDPR',
      'Sem cookies de terceiros sem consentimento',
      'Auditoria periódica',
      'Política transparente',
    ]}
    faqs={[
      { q: 'Posso navegar sem aceitar cookies?', a: 'Cookies essenciais são necessários para login e segurança. Os demais são opcionais.' },
      { q: 'Como apago os cookies já armazenados?', a: 'Pelas configurações de privacidade do seu navegador.' },
      { q: 'Vocês usam cookies de rastreamento de terceiros?', a: 'Apenas mediante consentimento explícito, conforme a legislação aplicável.' },
    ]}
  />
);

export default Cookies;
