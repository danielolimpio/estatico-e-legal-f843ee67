import SEOHead from './SEOHead';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface ProductPageProps {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: { h2: string; paragraphs: string[] }[];
  features: string[];
  faqs: { q: string; a: string }[];
  ctaLabel?: string;
}

const CTA_URL = 'https://backoffice.aurum.foundation/u/5CW428';

const ProductPage = ({
  slug,
  title,
  description,
  keywords,
  h1,
  subtitle,
  intro,
  sections,
  features,
  faqs,
  ctaLabel = 'Cadastrar na Aurum Foundation',
}: ProductPageProps) => {
  const url = `https://aurumfoundation.world/${slug}/`;
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Aurum Foundation', item: 'https://aurumfoundation.world/' },
      { '@type': 'ListItem', position: 2, name: h1, item: url },
    ],
  };

  return (
    <>
      <SEOHead title={title} description={description} canonicalUrl={url} keywords={keywords} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container py-12 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-primary">Aurum Foundation</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">{h1}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient">{h1}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-4">{subtitle}</p>
          <p className="text-base text-muted-foreground max-w-3xl mb-8">{intro}</p>
          <Button variant="hero" size="xl" onClick={() => window.open(CTA_URL, '_blank')}>
            {ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </section>

        {/* Content sections */}
        <section className="container py-12 grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-3xl font-bold mb-4 text-foreground">{s.h2}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="text-muted-foreground mb-4 leading-relaxed">{p}</p>
                ))}
              </div>
            ))}
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xl font-bold mb-4">Principais recursos</h3>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-hero p-6 text-primary-foreground">
              <h3 className="text-xl font-bold mb-2">Comece com a Aurum Foundation</h3>
              <p className="text-sm mb-4 opacity-90">Crie sua conta gratuita e acesse o ecossistema completo.</p>
              <Button variant="secondary" className="w-full" onClick={() => window.open(CTA_URL, '_blank')}>
                {ctaLabel}
              </Button>
            </div>
          </aside>
        </section>

        {/* FAQ */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold mb-8">Perguntas frequentes sobre {h1}</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="rounded-xl border border-border bg-card p-5 group">
                <summary className="font-semibold cursor-pointer text-foreground">{f.q}</summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
