import ProductPage from '@/components/ProductPage';

const Contato = () => (
  <ProductPage
    slug="contato"
    title="Contato | Fale com a Aurum Foundation"
    description="Fale com a Aurum Foundation: WhatsApp, Telegram, redes sociais, suporte ao cliente e atendimento institucional para parceiros e imprensa."
    keywords="contato Aurum, falar com Aurum Foundation, WhatsApp Aurum, suporte Aurum, atendimento cripto"
    h1="Contato Aurum Foundation"
    subtitle="Atendimento humano, suporte técnico e canais oficiais para clientes, parceiros e imprensa."
    intro="A Aurum Foundation oferece múltiplos canais de atendimento, com equipe distribuída globalmente para atender investidores, clientes do NeoBank, parceiros institucionais e jornalistas."
    sections={[
      {
        h2: 'Canais oficiais',
        paragraphs: [
          'WhatsApp consultivo: +55 12 98251-9116 — atendimento direto com consultor para investidores e novos clientes.',
          'Telegram: comunidade oficial em t.me/aurum_eng e bot do NeoBank em t.me/aurumneobankbot.',
          'Instagram: @aurum_foundation — novidades, eventos e conteúdo educacional.',
          'X (Twitter): @aurum_ecosystem — anúncios oficiais e atualizações do produto.',
        ],
      },
      {
        h2: 'Atendimento por área',
        paragraphs: [
          'Suporte ao cliente: pelo painel logado da Aurum Foundation, com SLA de resposta priorizado por nível do cartão.',
          'Parcerias institucionais: solicitações via canais oficiais com identificação da empresa e do escopo.',
          'Imprensa: pedidos de entrevista, declarações e materiais institucionais.',
          'Carreiras: candidaturas para vagas abertas e talent pool.',
        ],
      },
      {
        h2: 'Atenção a fraudes',
        paragraphs: [
          'A Aurum Foundation nunca pede senhas, códigos 2FA ou seed phrases. Desconfie de qualquer canal que se identifique como Aurum fora dos endereços oficiais listados acima.',
        ],
      },
    ]}
    features={[
      'WhatsApp com consultor',
      'Telegram oficial',
      'Instagram e X',
      'Suporte 24/7 no painel',
      'Atendimento institucional',
      'Canal exclusivo de imprensa',
    ]}
    faqs={[
      { q: 'Qual o WhatsApp oficial?', a: 'O WhatsApp consultivo oficial é +55 12 98251-9116.' },
      { q: 'A Aurum atende fora do horário comercial?', a: 'Sim, o suporte do painel funciona 24/7 com priorização por nível de cliente.' },
      { q: 'A Aurum pede senha por chat?', a: 'Nunca. Qualquer pedido de senha, 2FA ou seed phrase é tentativa de fraude.' },
    ]}
  />
);

export default Contato;
