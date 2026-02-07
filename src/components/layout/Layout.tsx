import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <footer className="border-t border-border py-8">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            Arquivo Luiz Braga © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
