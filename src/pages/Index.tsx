import { Layout } from '@/components/layout/Layout';
import { StatCard } from '@/components/ui/StatCard';
import { TimelineItem } from '@/components/timeline/TimelineItem';
import { ObraCard } from '@/components/cards/ObraCard';
import { mockStats, mockTimeline, mockObras } from '@/data/mockData';
import { Camera, Image, BookOpen, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const recentTimeline = mockTimeline.slice(-5).reverse();
  const featuredObras = mockObras.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container relative py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="section-subtitle mb-4 opacity-0 animate-fade-in">
              Arquivo Digital
            </p>
            <h1 className="font-display text-5xl font-medium leading-tight tracking-tight text-foreground opacity-0 animate-fade-in md:text-7xl" style={{ animationDelay: '100ms' }}>
              Luiz Braga
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Fotógrafo brasileiro nascido em Belém do Pará, reconhecido internacionalmente 
              por sua documentação visual da cultura e paisagem amazônica.
            </p>
            
            <div className="mt-8 flex gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Link 
                to="/obras" 
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Explorar Obras
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                to="/timeline" 
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                Linha do Tempo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border py-16">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <StatCard title="Obras" value={mockStats.obras} icon={Camera} delay={0} />
            <StatCard title="Exposições" value={mockStats.exposicoes} icon={Image} delay={100} />
            <StatCard title="Publicações" value={mockStats.publicacoes} icon={BookOpen} delay={200} />
            <StatCard title="Prêmios" value={mockStats.premios} icon={Award} delay={300} />
            <StatCard title="Pesquisas" value={mockStats.pesquisas} icon={GraduationCap} delay={400} />
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="border-b border-border py-16">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="section-subtitle mb-2">Destaques</p>
              <h2 className="section-title">Obras Recentes</h2>
            </div>
            <Link 
              to="/obras"
              className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredObras.map((obra) => (
              <ObraCard key={obra.id} obra={obra} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="section-subtitle mb-2">Cronologia</p>
              <h2 className="section-title">Linha do Tempo</h2>
            </div>
            <Link 
              to="/timeline"
              className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Ver completa
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="max-w-2xl">
            {recentTimeline.map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                isLast={index === recentTimeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
