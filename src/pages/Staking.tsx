import ProductPage from '@/components/ProductPage';
import stakingHero from '@/assets/app-aurum-foundation-cartao-cripto.webp';

const Staking = () => (
  <ProductPage
    heroImage={stakingHero}
    heroImageAlt="App Aurum Foundation - acompanhe rendimentos do Aurum Staking em tempo real"
    slug="staking"
    title="Aurum Staking | Renda Passiva em Cripto na Aurum Foundation"
    description="Aurum Staking: ganhe rendimentos passivos com criptomoedas na Aurum Foundation. Plataforma segura, transparente e com retornos competitivos."
    keywords="Aurum Staking, staking cripto, staking Aurum Foundation, renda passiva criptomoedas, melhor staking"
    h1="Aurum Staking"
    subtitle="Ganhe rendimentos passivos em criptomoedas com o staking oficial da Aurum Foundation."
    intro="O Aurum Staking permite que você receba recompensas periódicas mantendo seus ativos digitais alocados na infraestrutura da Aurum Foundation, com transparência total e segurança institucional."
    sections={[
      {
        h2: 'O que é o Aurum Staking',
        paragraphs: [
          'Staking é o processo de bloquear criptomoedas para apoiar a operação de uma rede ou plataforma e, em troca, receber recompensas. O Aurum Staking é o programa oficial da Aurum Foundation que distribui retornos previsíveis aos participantes.',
          'Diferente de aplicações tradicionais, o Aurum Staking utiliza smart contracts auditados e uma camada de governança gerida pela Aurum Foundation para garantir disponibilidade e proteção dos ativos.',
        ],
      },
      {
        h2: 'Como funciona o staking na Aurum Foundation',
        paragraphs: [
          'Você seleciona o ativo, define o valor e o prazo, e ativa o staking diretamente no backoffice da Aurum Foundation. As recompensas são creditadas automaticamente conforme o cronograma de cada plano.',
          'A Aurum Foundation oferece diferentes faixas de rendimento e prazos, atendendo desde investidores conservadores até estratégias mais agressivas.',
        ],
      },
    ]}
    features={[
      'Rendimentos passivos automáticos',
      'Smart contracts auditados',
      'Múltiplos ativos suportados',
      'Prazos flexíveis',
      'Acompanhamento em tempo real',
      'Cold storage da Aurum Foundation',
    ]}
    faqs={[
      { q: 'Qual o rendimento do Aurum Staking?', a: 'Os rendimentos variam por ativo e prazo. Os valores atualizados estão disponíveis no painel oficial da Aurum Foundation.' },
      { q: 'Posso resgatar antes do prazo?', a: 'Depende do plano contratado. Alguns planos da Aurum Foundation permitem resgate antecipado com regras específicas.' },
      { q: 'O Aurum Staking é seguro?', a: 'Sim. Ativos ficam em cold storage e contratos auditados, sob a infraestrutura da Aurum Foundation.' },
    ]}
  />
);

export default Staking;
