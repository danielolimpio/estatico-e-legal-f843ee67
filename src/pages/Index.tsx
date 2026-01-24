import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import CardsSection from '@/components/CardsSection';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Aurum | Gestão Inteligente de Ativos Digitais"
        description="Plataforma segura de gestão patrimonial com IA e blockchain. Invista com inteligência e segurança institucional."
        canonicalUrl="https://aurumfoundation.world"
        keywords="gestão de ativos, investimentos, blockchain, fintech, inteligência artificial"
      />
      
      <main>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
        <VideoSection videoId="aYt4c8CON6c" />
        <CardsSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
