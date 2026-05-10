import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/zeus-ai/', label: 'Zeus AI' },
    { href: '/staking/', label: 'Staking' },
    { href: '/flash-loans/', label: 'Flash Loans' },
    { href: '/cartao-aurum/', label: 'Cartão Aurum' },
    { href: '/exchange/', label: 'Exchange' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Aurum - Página Inicial">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">A</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">AURUM</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:text-primary font-semibold"
            onClick={() => window.open('https://backoffice.aurum.foundation/', '_blank')}
          >
            Entrar
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => window.open('https://backoffice.aurum.foundation/u/5CW428', '_blank')}
          >
            Começar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <ul className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 flex flex-col gap-2">
              <Button 
                variant="outline" 
                className="w-full border-primary/30 text-primary hover:bg-primary/10 font-semibold"
                onClick={() => window.open('https://backoffice.aurum.foundation/', '_blank')}
              >
                Entrar
              </Button>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => window.open('https://backoffice.aurum.foundation/u/5CW428', '_blank')}
              >
                Começar Agora
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
