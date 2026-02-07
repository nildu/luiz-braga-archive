import { Layout } from '@/components/layout/Layout';
import { TimelineItem } from '@/components/timeline/TimelineItem';
import { mockTimeline } from '@/data/mockData';
import { useState } from 'react';

const tipoFilters = [
  { value: 'all', label: 'Todos' },
  { value: 'biografico', label: 'Biográfico' },
  { value: 'obra', label: 'Obras' },
  { value: 'exposicao', label: 'Exposições' },
  { value: 'publicacao', label: 'Publicações' },
  { value: 'premio', label: 'Prêmios' },
  { value: 'pesquisa', label: 'Pesquisas' },
];

const Timeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? mockTimeline
    : mockTimeline.filter(event => event.tipo === activeFilter);

  const sortedEvents = [...filteredEvents].sort((a, b) => a.ano - b.ano);

  // Group by decade
  const decades = sortedEvents.reduce((acc, event) => {
    const decade = Math.floor(event.ano / 10) * 10;
    if (!acc[decade]) acc[decade] = [];
    acc[decade].push(event);
    return acc;
  }, {} as Record<number, typeof mockTimeline>);

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="section-subtitle mb-2">Cronologia</p>
          <h1 className="section-title">Linha do Tempo</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Cronologia completa reunindo dados biográficos e marcos importantes
            da trajetória artística de Luiz Braga.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-2">
          {tipoFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-sm px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Timeline by Decades */}
        <div className="space-y-16">
          {Object.entries(decades).map(([decade, events]) => (
            <div key={decade}>
              <div className="mb-8 flex items-center gap-4">
                <span className="font-display text-5xl font-medium text-primary/30">
                  {decade}s
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              
              <div className="ml-4 md:ml-8">
                {events.map((event, index) => (
                  <TimelineItem
                    key={event.id}
                    event={event}
                    isLast={index === events.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">Nenhum evento encontrado.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Timeline;
