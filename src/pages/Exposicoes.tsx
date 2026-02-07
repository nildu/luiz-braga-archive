import { Layout } from '@/components/layout/Layout';
import { ExposicaoCard } from '@/components/cards/ExposicaoCard';
import { mockExposicoes } from '@/data/mockData';

const Exposicoes = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="section-subtitle mb-2">Mostras</p>
          <h1 className="section-title">Exposições</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Histórico de exposições individuais e coletivas, com detalhes sobre
            locais, datas e obras apresentadas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockExposicoes.map((exposicao) => (
            <ExposicaoCard key={exposicao.id} exposicao={exposicao} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Exposicoes;
