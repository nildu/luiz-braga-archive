import { Premio } from '@/types/database';
import { Award, MapPin } from 'lucide-react';

interface PremioCardProps {
  premio: Premio;
}

export function PremioCard({ premio }: PremioCardProps) {
  return (
    <div className="card-hover flex items-center gap-6 rounded-sm border border-border bg-card p-6">
      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-primary">
        <Award className="h-7 w-7 text-primary-foreground" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="mb-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {premio.id}
        </p>
        
        <div className="flex items-baseline gap-4">
          <span className="font-display text-2xl font-medium text-primary">
            {premio.ano}
          </span>
          <h3 className="font-display text-lg font-medium text-foreground">
            {premio.titulo}
          </h3>
        </div>

        {premio.local && (
          <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {premio.local}
          </div>
        )}
      </div>
    </div>
  );
}
