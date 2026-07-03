import type { ImgHTMLAttributes } from 'react';

/**
 * Estrutura retornada por `vite-imagetools` com o directive `as=picture`.
 * Ex.: import img from '@/assets/foo.webp?picture'
 */
export type PictureSource = {
  sources: Record<string, string>; // { 'image/avif': 'srcset...', 'image/webp': 'srcset...' }
  img: { src: string; w: number; h: number };
};

interface PictureProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
  source: PictureSource;
  width?: number;
  height?: number;
  sizes?: string;
}

/**
 * <Picture /> — serve AVIF/WebP com fallback para o formato original.
 * Mantém `width`/`height` explícitos para evitar CLS. Se o browser não
 * suportar AVIF/WebP, cai automaticamente para o <img> final.
 */
const Picture = ({
  source,
  alt = '',
  width,
  height,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  loading = 'lazy',
  decoding = 'async',
  className,
  ...rest
}: PictureProps) => {
  const w = width ?? source.img.w;
  const h = height ?? source.img.h;

  return (
    <picture>
      {Object.entries(source.sources).map(([type, srcSet]) => (
        <source key={type} type={type} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={source.img.src}
        alt={alt}
        width={w}
        height={h}
        loading={loading}
        decoding={decoding}
        className={className}
        {...rest}
      />
    </picture>
  );
};

export default Picture;
