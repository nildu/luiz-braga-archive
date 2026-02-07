import { Layout } from '@/components/layout/Layout';
import { PremioCard } from '@/components/cards/PremioCard';
import { mockPremios } from '@/data/mockData';
import { Award } from 'lucide-react';

const Premios = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="section-subtitle mb-2">Reconhecimento</p>
          <h1 className="section-title">Prêmios</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Premiações e distinções recebidas ao longo da carreira.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 flex items-center gap-6 rounded-sm border border-primary/20 bg-primary/5 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-primary">
            <Award className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <p className="font-display text-4xl font-medium text-primary">
              {mockPremios.length}
            </p>
            <p className="text-sm text-muted-foreground">
              Prêmios e distinções
            </p>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {mockPremios.map((premio) => (
            <PremioCard key={premio.id} premio={premio} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Premios;
