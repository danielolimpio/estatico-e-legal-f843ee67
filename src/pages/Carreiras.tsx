import ProductPage from '@/components/ProductPage';

const Carreiras = () => (
  <ProductPage
    slug="carreiras"
    title="Carreiras | Trabalhe na Aurum Foundation"
    description="Faça parte do time global da Aurum Foundation. Vagas em engenharia blockchain, IA, trading, produto, marketing e operações no ecossistema cripto."
    keywords="carreiras Aurum, vagas Aurum Foundation, trabalhar com cripto, jobs blockchain, vagas Web3"
    h1="Carreiras na Aurum Foundation"
    subtitle="Junte-se a uma equipe global construindo o futuro das finanças descentralizadas."
    intro="Buscamos profissionais apaixonados por blockchain, IA e finanças para construir o ecossistema Aurum Foundation. Trabalhamos de forma remota e distribuída, com cultura orientada a impacto, autonomia e excelência técnica."
    sections={[
      {
        h2: 'Áreas em que contratamos',
        paragraphs: [
          'Engenharia blockchain (Solidity, Rust, Go), back-end de exchange de alta performance, infraestrutura cloud, segurança ofensiva e defensiva, dados e IA aplicada a trading.',
          'Produto, design, growth, marketing de performance, parcerias institucionais, suporte ao cliente, compliance, jurídico e operações financeiras.',
        ],
      },
      {
        h2: 'Como é trabalhar na Aurum',
        paragraphs: [
          'Modelo 100% remoto, com encontros estratégicos presenciais. Pacote competitivo em fiat e tokens Aurum, vesting, plano de saúde internacional e budget de aprendizado.',
          'Cultura de ownership: cada pessoa é responsável por resultados mensuráveis e tem autonomia para experimentar e propor melhorias.',
        ],
      },
      {
        h2: 'Como se candidatar',
        paragraphs: [
          'Envie seu currículo e portfólio para o e-mail de carreiras informado na página de Contato. Em breve, todas as vagas abertas estarão listadas diretamente nesta página.',
        ],
      },
    ]}
    features={[
      'Trabalho 100% remoto',
      'Pacote em fiat + tokens Aurum',
      'Plano de saúde internacional',
      'Budget de aprendizado',
      'Cultura de ownership',
      'Times multinacionais',
    ]}
    faqs={[
      { q: 'A Aurum contrata em qualquer país?', a: 'Sim, somos 100% remotos e contratamos talentos globalmente, observando regras de compliance locais.' },
      { q: 'Como envio meu currículo?', a: 'Pelo canal indicado na página de Contato, com link para LinkedIn ou portfólio.' },
      { q: 'Existem programas de estágio?', a: 'Pontualmente abrimos programas para early-career — fique de olho nas redes sociais oficiais.' },
    ]}
  />
);

export default Carreiras;
