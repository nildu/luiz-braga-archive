import { Publicacao } from '@/types/database';
import { BookOpen, Building, FileText } from 'lucide-react';

interface PublicacaoCardProps {
  publicacao: Publicacao;
}

const tipoLabels = {
  livro: 'Livro',
  catalogo: 'Catálogo',
  revista: 'Revista',
  outro: 'Outro',
};

export function PublicacaoCard({ publicacao }: PublicacaoCardProps) {
  return (
    <div className="card-hover flex gap-6 rounded-sm border border-border bg-card p-6">
      {/* Icon */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-primary/10">
        <BookOpen className="h-8 w-8 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-2 flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {publicacao.id}
          </span>
          <span className="rounded-sm bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
            {tipoLabels[publicacao.tipo]}
          </span>
        </div>

        <h3 className="font-display text-xl font-medium text-foreground">
          {publicacao.titulo}
        </h3>
        
        {publicacao.subtitulo && (
          <p className="mt-1 text-sm italic text-muted-foreground">
            {publicacao.subtitulo}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="font-display text-lg font-medium text-primary">
            {publicacao.ano}
          </span>
          
          {publicacao.editora && (
            <span className="flex items-center gap-1">
              <Building className="h-4 w-4" />
              {publicacao.editora}
            </span>
          )}
          
          {publicacao.numeroPaginas && (
            <span className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              {publicacao.numeroPaginas} páginas
            </span>
          )}
        </div>

        {publicacao.isbn && (
          <p className="mt-2 text-xs text-muted-foreground">
            ISBN: {publicacao.isbn}
          </p>
        )}
      </div>
    </div>
  );
}
