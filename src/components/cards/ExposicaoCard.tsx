import { Exposicao } from '@/types/database';
import { MapPin, Calendar } from 'lucide-react';

interface ExposicaoCardProps {
  exposicao: Exposicao;
}

export function ExposicaoCard({ exposicao }: ExposicaoCardProps) {
  return (
    <div className="card-hover rounded-sm border border-border bg-card p-6">
      <p className="mb-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {exposicao.id}
      </p>
      
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-display text-3xl font-medium text-primary">
          {exposicao.ano}
        </span>
      </div>

      <h3 className="font-display text-xl font-medium text-foreground">
        {exposicao.titulo}
      </h3>
      
      {exposicao.subtitulo && (
        <p className="mt-1 text-sm italic text-muted-foreground">
          {exposicao.subtitulo}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-primary" />
        {exposicao.local}
      </div>

      {(exposicao.dataAbertura || exposicao.dataEncerramento) && (
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          {exposicao.dataAbertura && new Date(exposicao.dataAbertura).toLocaleDateString('pt-BR')}
          {exposicao.dataEncerramento && ` — ${new Date(exposicao.dataEncerramento).toLocaleDateString('pt-BR')}`}
        </div>
      )}
    </div>
  );
}
