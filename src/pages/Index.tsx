import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import VisualShowcase from '@/components/VisualShowcase';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Aurum Foundation | Investimentos Cripto com IA"
        description="Aurum Foundation: invista em cripto com IA, Zeus AI, staking, flash loans e cartão Aurum. Segurança institucional."
        canonicalUrl="https://aurumfoundation.world/"
        keywords="Aurum Foundation, aurum, aurum foundation cadastro, aurum foundation login, zeus ai, trading bot cripto, staking, flash loans, cartão aurum, investimento criptomoedas"
      />
      
      <main>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <VisualShowcase />
        <StatsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
