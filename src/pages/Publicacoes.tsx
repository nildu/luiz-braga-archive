import { Layout } from '@/components/layout/Layout';
import { PublicacaoCard } from '@/components/cards/PublicacaoCard';
import { mockPublicacoes } from '@/data/mockData';

const Publicacoes = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="section-subtitle mb-2">Edições</p>
          <h1 className="section-title">Publicações</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Livros, catálogos e outras publicações que apresentam ou discutem
            a obra de Luiz Braga.
          </p>
        </div>

        {/* List */}
        <div className="space-y-4">
          {mockPublicacoes.map((publicacao) => (
            <PublicacaoCard key={publicacao.id} publicacao={publicacao} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Publicacoes;
