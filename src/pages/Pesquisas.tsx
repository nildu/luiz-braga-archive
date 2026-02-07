import { Layout } from '@/components/layout/Layout';
import { PesquisaCard } from '@/components/cards/PesquisaCard';
import { mockPesquisas } from '@/data/mockData';

const Pesquisas = () => {
  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="section-subtitle mb-2">Acadêmico</p>
          <h1 className="section-title">Pesquisas</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Teses, dissertações e pesquisas acadêmicas que analisam e discutem
            a obra de Luiz Braga.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {mockPesquisas.map((pesquisa) => (
            <PesquisaCard key={pesquisa.id} pesquisa={pesquisa} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Pesquisas;
