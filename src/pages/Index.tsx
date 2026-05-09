import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Aurum Foundation | Plataforma Oficial de Investimentos em Cripto com IA"
        description="Aurum Foundation: ecossistema completo de investimentos em criptomoedas com IA, Zeus AI Trading Bot, staking, flash loans e cartão Aurum. Cadastre-se com segurança institucional."
        canonicalUrl="https://aurumfoundation.world/"
        keywords="Aurum Foundation, aurum, aurum foundation cadastro, aurum foundation login, zeus ai, trading bot cripto, staking, flash loans, cartão aurum, investimento criptomoedas"
      />
      
      <main>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
