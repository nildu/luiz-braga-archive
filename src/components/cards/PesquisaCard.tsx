import { Pesquisa } from '@/types/database';
import { GraduationCap, Building, User } from 'lucide-react';

interface PesquisaCardProps {
  pesquisa: Pesquisa;
}

const tipoLabels = {
  doutorado: 'Doutorado',
  mestrado: 'Mestrado',
  tcc: 'TCC',
  artigo: 'Artigo',
  outro: 'Outro',
};

export function PesquisaCard({ pesquisa }: PesquisaCardProps) {
  return (
    <div className="card-hover rounded-sm border border-border bg-card p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {pesquisa.id}
        </span>
        <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          {tipoLabels[pesquisa.tipo]}
        </span>
        {pesquisa.ano && (
          <span className="font-display text-sm font-medium text-muted-foreground">
            {pesquisa.ano}
          </span>
        )}
      </div>

      <h3 className="font-display text-lg font-medium text-foreground">
        {pesquisa.titulo}
      </h3>
      
      {pesquisa.subtitulo && (
        <p className="mt-1 text-sm italic text-muted-foreground">
          {pesquisa.subtitulo}
        </p>
      )}

      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-primary" />
          {pesquisa.autor}
        </div>
        
        {pesquisa.instituicao && (
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-primary" />
            {pesquisa.faculdade && `${pesquisa.faculdade}, `}{pesquisa.instituicao}
          </div>
        )}

        {pesquisa.areaEstudos && (
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            {pesquisa.areaEstudos}
          </div>
        )}
      </div>
    </div>
  );
}
