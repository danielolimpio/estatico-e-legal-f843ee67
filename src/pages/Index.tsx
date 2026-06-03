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
        description="Aurum Foundation: invista em cripto com IA, Zeus AI, staking, flash loans, exchange e cartão Aurum. Cadastro, login e segurança institucional."
        canonicalUrl="https://aurumfoundation.world/"
        keywords="Aurum Foundation, aurum, aurum.foundation, aurumfoundation, aurum foundation pt, aurum foundation brasil, aurum foundation hong kong, aurum foundation login, aurum foundation cadastro, aurum foundation app, aurum foundation logo, backoffice aurum foundation, aurum fundation, arum foundation, aurum cripto, aurum infinity, aurum broker, aurum bot, aurum bot ai, aurumbotai, zeus ai, zeus ai trading bot, robô de trading cripto, trading bot cripto, staking cripto, aurum staking, flash loans, flash loan cripto, exchange aurum, aurum exchange, cartão aurum, aurum card, cartão cripto visa, investimento em criptomoedas, fintech blockchain, defi, web3"
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
