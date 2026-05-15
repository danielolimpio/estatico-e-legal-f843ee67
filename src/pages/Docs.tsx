import ProductPage from '@/components/ProductPage';

const Docs = () => (
  <ProductPage
    slug="docs"
    title="Documentação | Aurum Foundation - Guias Técnicos e API"
    description="Documentação oficial da Aurum Foundation: guias do NeoBank, da Exchange, dos bots de IA, dos cartões e referência técnica para integradores."
    keywords="documentação Aurum, docs Aurum Foundation, API Aurum, guia Aurum, manual cripto"
    h1="Documentação Aurum Foundation"
    subtitle="Guias práticos, referência técnica e melhores práticas para usar todo o ecossistema Aurum com segurança e eficiência."
    intro="A documentação da Aurum Foundation cobre desde primeiros passos no NeoBank e na Exchange até referência técnica para integradores e parceiros institucionais que desejam conectar sistemas ao ecossistema Aurum."
    sections={[
      {
        h2: 'Guias para usuários',
        paragraphs: [
          'Como criar e verificar sua conta Aurum, configurar 2FA, ativar a wallet multichain e proteger seus ativos com whitelist de saques.',
          'Como solicitar e ativar os Cartões Aurum (Nova, Imperium, World Elite e Infinity), gerenciar limites e acompanhar cashback.',
          'Como operar na Exchange: depósitos, saques, ordens limite e mercado, gestão de risco e relatórios fiscais.',
        ],
      },
      {
        h2: 'Guias dos produtos de IA',
        paragraphs: [
          'Como ativar e configurar Zeus AI, Ex-Ai e Ex-Ai Pro, escolher perfis de risco e acompanhar a performance dos bots de gestão de liquidez.',
          'Como usar Flash Loans e estratégias de staking dentro do ecossistema Aurum.',
        ],
      },
      {
        h2: 'Documentação técnica',
        paragraphs: [
          'Referência de integração para parceiros institucionais, descrição dos contratos do ecossistema, padrões de segurança e SLAs operacionais.',
        ],
      },
    ]}
    features={[
      'Guias passo a passo',
      'Tutoriais em vídeo',
      'Referência técnica',
      'Material institucional',
      'Atualização contínua',
      'Suporte do time',
    ]}
    faqs={[
      { q: 'A documentação é gratuita?', a: 'Sim, todo o material público da Aurum Foundation é gratuito.' },
      { q: 'Existe API pública?', a: 'A Exchange e o NeoBank disponibilizam APIs sob acordo institucional. Solicite via canal de parcerias.' },
      { q: 'Como reportar uma falha na documentação?', a: 'Envie pelo canal de suporte indicado na página de Contato.' },
    ]}
  />
);

export default Docs;
