import { Layout } from '@/components/layout/Layout';
import { ObraCard } from '@/components/cards/ObraCard';
import { mockObras } from '@/data/mockData';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

const Obras = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredObras = mockObras.filter(obra =>
    obra.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    obra.local?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <p className="section-subtitle mb-2">Acervo</p>
          <h1 className="section-title">Obras</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Catálogo completo das fotografias de Luiz Braga, incluindo detalhes técnicos,
            localização e informações sobre acervo.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por título ou local..."
              className="h-10 w-full rounded-sm border border-border bg-card pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex h-10 items-center gap-2 rounded-sm border border-border px-4 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-muted-foreground">
          {filteredObras.length} obra{filteredObras.length !== 1 ? 's' : ''} encontrada{filteredObras.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredObras.map((obra) => (
            <ObraCard key={obra.id} obra={obra} />
          ))}
        </div>

        {filteredObras.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">Nenhuma obra encontrada.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Obras;
