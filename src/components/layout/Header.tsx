import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Início' },
  { path: '/obras', label: 'Obras' },
  { path: '/exposicoes', label: 'Exposições' },
  { path: '/publicacoes', label: 'Publicações' },
  { path: '/premios', label: 'Prêmios' },
  { path: '/pesquisas', label: 'Pesquisas' },
  { path: '/timeline', label: 'Linha do Tempo' },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary">
            <Camera className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-display text-lg font-medium leading-tight tracking-tight">
              Luiz Braga
            </h1>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              Arquivo
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'nav-link text-sm font-medium',
                location.pathname === item.path && 'active'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'block py-3 text-sm font-medium transition-colors',
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
