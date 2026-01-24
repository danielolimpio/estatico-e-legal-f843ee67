import type React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import type { RouteRecord } from 'vite-react-ssg';
import * as HelmetAsync from 'react-helmet-async';
const HelmetProvider = (HelmetAsync as any).HelmetProvider as React.ComponentType<React.PropsWithChildren>;
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

// Import all pages
import Index from './pages/Index';
import SobreNos from './pages/SobreNos';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Cartoes from './pages/Cartoes';
import Exchange from './pages/Exchange';
import Plataforma from './pages/Plataforma';
import Seguranca from './pages/Seguranca';
import Blog from './pages/Blog';
import Documentacao from './pages/Documentacao';
import FAQ from './pages/FAQ';
import Suporte from './pages/Suporte';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import PoliticaCookies from './pages/PoliticaCookies';
import TermosDeUso from './pages/TermosDeUso';
import Sitemap from './pages/Sitemap';
import NotFound from './pages/NotFound';

// Layout wrapper with all providers
const Layout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

// Routes configuration for SSG - each route will generate a static HTML file
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Index />
      </Layout>
    ),
  },
  {
    path: '/sobre-nos',
    element: (
      <Layout>
        <SobreNos />
      </Layout>
    ),
  },
  {
    path: '/servicos',
    element: (
      <Layout>
        <Servicos />
      </Layout>
    ),
  },
  {
    path: '/contato',
    element: (
      <Layout>
        <Contato />
      </Layout>
    ),
  },
  {
    path: '/cartoes',
    element: (
      <Layout>
        <Cartoes />
      </Layout>
    ),
  },
  {
    path: '/exchange',
    element: (
      <Layout>
        <Exchange />
      </Layout>
    ),
  },
  {
    path: '/plataforma',
    element: (
      <Layout>
        <Plataforma />
      </Layout>
    ),
  },
  {
    path: '/seguranca',
    element: (
      <Layout>
        <Seguranca />
      </Layout>
    ),
  },
  {
    path: '/blog',
    element: (
      <Layout>
        <Blog />
      </Layout>
    ),
  },
  {
    path: '/documentacao',
    element: (
      <Layout>
        <Documentacao />
      </Layout>
    ),
  },
  {
    path: '/faq',
    element: (
      <Layout>
        <FAQ />
      </Layout>
    ),
  },
  {
    path: '/suporte',
    element: (
      <Layout>
        <Suporte />
      </Layout>
    ),
  },
  {
    path: '/politica-de-privacidade',
    element: (
      <Layout>
        <PoliticaPrivacidade />
      </Layout>
    ),
  },
  {
    path: '/politica-de-cookies',
    element: (
      <Layout>
        <PoliticaCookies />
      </Layout>
    ),
  },
  {
    path: '/termos-de-uso',
    element: (
      <Layout>
        <TermosDeUso />
      </Layout>
    ),
  },
  {
    path: '/sitemap',
    element: (
      <Layout>
        <Sitemap />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  },
];

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    // Client-side setup can go here if needed
  }
);
