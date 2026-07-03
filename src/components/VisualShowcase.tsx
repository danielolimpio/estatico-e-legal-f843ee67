import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Picture, { type PictureSource } from './Picture';
import zeusAi from '@/assets/zeus-ai-trading-bot-aurum-foundation.webp?picture';
import exchange from '@/assets/exchange-aurum-foundation-plataforma-trading.webp?picture';
import cards from '@/assets/cartao-aurum-cripto-debito.webp?picture';
import phone from '@/assets/aurum-neobank-app-cartao-aurum-nova.png?picture';

const CTA = 'https://backoffice.aurum.foundation/u/5CW428';

interface Block {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  image: PictureSource;
  alt: string;
  reverse?: boolean;
}

const blocks: Block[] = [
  {
    eyebrow: 'Zeus AI Trading Bot',
    title: 'Inteligência artificial operando 24/7 em criptomoedas',
    text: 'O Zeus AI da Aurum Foundation analisa milhões de pontos de dados e executa estratégias automatizadas de trading com baixa latência, machine learning e gestão de risco institucional.',
    href: '/zeus-ai/',
    image: zeusAi as PictureSource,
    alt: 'Zeus AI Trading Bot da Aurum Foundation - inteligência artificial para investimento em criptomoedas',
  },
  {
    eyebrow: 'Exchange Aurum Foundation',
    title: 'Plataforma de trading profissional para cripto',
    text: 'Compre, venda e troque criptomoedas com alta liquidez, gráficos avançados e taxas competitivas na exchange oficial da Aurum Foundation.',
    href: '/exchange/',
    image: exchange as PictureSource,
    alt: 'Exchange Aurum Foundation - plataforma profissional de trading de criptomoedas',
    reverse: true,
  },
  {
    eyebrow: 'Cartão Aurum',
    title: 'Use suas criptomoedas no mundo real',
    text: 'O Cartão Aurum Visa transforma seus ativos digitais em poder de compra global, com cashback em tokens Aurum e gestão completa pelo app da Aurum Foundation.',
    href: '/cartao-aurum/',
    image: cards as PictureSource,
    alt: 'Cartão Aurum Infinity e Aurum Nova - cartões de débito cripto da Aurum Foundation',
  },
  {
    eyebrow: 'App Aurum Foundation',
    title: 'Todo o ecossistema cripto na palma da sua mão',
    text: 'Acompanhe staking, trading, cartões e flash loans em um único aplicativo. A Aurum Foundation entrega uma experiência mobile premium para investidores.',
    href: '/staking/',
    image: phone as PictureSource,
    alt: 'Aplicativo Aurum Foundation - gestão de cartão Aurum Nova e investimentos em criptomoedas',
    reverse: true,
  },
];

const VisualShowcase = () => {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="container space-y-20 lg:space-y-28">
        {blocks.map((b) => (
          <article
            key={b.title}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
              b.reverse ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {b.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 leading-tight">
                {b.title}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">{b.text}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open(CTA, '_blank')}
                  className="group"
                >
                  Começar Agora
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={b.href}>Saiba mais</a>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-3xl rounded-full" />
              <Picture
                source={b.image}
                alt={b.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={`relative h-auto rounded-2xl object-contain ${
                  b.eyebrow.startsWith('App') ? 'max-h-[460px] w-auto' : 'w-full max-h-[420px]'
                }`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VisualShowcase;
