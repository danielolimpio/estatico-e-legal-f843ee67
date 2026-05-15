import ProductPage from '@/components/ProductPage';

const Termos = () => (
  <ProductPage
    slug="termos"
    title="Termos de Uso | Aurum Foundation"
    description="Leia os Termos de Uso oficiais da Aurum Foundation para acesso e utilização do ecossistema cripto, NeoBank, Exchange, cartões e bots de IA."
    keywords="termos de uso Aurum, termos Aurum Foundation, contrato cripto, condições de uso"
    h1="Termos de Uso"
    subtitle="Condições gerais para o uso dos produtos e serviços do ecossistema Aurum Foundation."
    intro="Estes Termos de Uso regem o acesso e a utilização dos produtos da Aurum Foundation, incluindo o NeoBank, a Exchange, os bots de IA, os cartões e demais serviços. Ao criar uma conta, você concorda integralmente com estas condições."
    sections={[
      {
        h2: '1. Aceitação dos termos',
        paragraphs: [
          'Ao se cadastrar, acessar ou usar qualquer produto da Aurum Foundation, o usuário declara ter lido, compreendido e aceito integralmente estes Termos de Uso e a Política de Privacidade.',
        ],
      },
      {
        h2: '2. Elegibilidade',
        paragraphs: [
          'O usuário deve ter capacidade civil plena, ser maior de 18 anos e residir em jurisdição não restrita pelas políticas de compliance da Aurum Foundation.',
        ],
      },
      {
        h2: '3. Riscos do mercado cripto',
        paragraphs: [
          'O usuário reconhece que ativos digitais são voláteis e que rentabilidades passadas não garantem resultados futuros. A Aurum Foundation não oferece garantia de retorno em qualquer produto.',
        ],
      },
      {
        h2: '4. KYC, AML e compliance',
        paragraphs: [
          'O usuário concorda em fornecer informações verídicas e atualizadas para os procedimentos de KYC e AML, podendo ter sua conta restringida em caso de inconsistências.',
        ],
      },
      {
        h2: '5. Limitação de responsabilidade',
        paragraphs: [
          'A Aurum Foundation não se responsabiliza por perdas decorrentes de oscilações de mercado, uso indevido das credenciais pelo usuário ou eventos de força maior.',
        ],
      },
      {
        h2: '6. Alterações dos termos',
        paragraphs: [
          'A Aurum Foundation pode atualizar estes Termos a qualquer momento, sendo a versão vigente sempre a publicada nesta página.',
        ],
      },
    ]}
    features={[
      'Aceitação obrigatória no cadastro',
      'Aplicáveis a todo o ecossistema',
      'Atualizações comunicadas',
      'Conformidade KYC/AML',
      'Política de risco transparente',
      'Validade global',
    ]}
    faqs={[
      { q: 'Onde encontro a versão mais recente?', a: 'A versão vigente está sempre publicada nesta página oficial.' },
      { q: 'Posso encerrar minha conta?', a: 'Sim, a qualquer momento, observando as obrigações pendentes.' },
      { q: 'Os termos valem em qualquer país?', a: 'Sim, respeitadas as leis locais aplicáveis.' },
    ]}
  />
);

export default Termos;
