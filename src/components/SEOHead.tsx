import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  keywords?: string;
}

const SITE = 'https://aurumfoundation.world';

const toAbsolute = (url?: string) => {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE}${url.startsWith('/') ? '' : '/'}${url}`;
};

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  ogImageAlt,
  ogType = 'website',
  keywords,
}: SEOHeadProps) => {
  const absoluteImage = toAbsolute(ogImage);
  const imageAlt = ogImageAlt || title;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:site_name" content="Aurum Foundation" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}
      {absoluteImage && <meta property="og:image:alt" content={imageAlt} />}
      {absoluteImage && <meta property="og:image:width" content="1200" />}
      {absoluteImage && <meta property="og:image:height" content="630" />}
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AurumFoundation" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
      {absoluteImage && <meta name="twitter:image:alt" content={imageAlt} />}

      {/* Robots */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Helmet>
  );
};

export default SEOHead;
