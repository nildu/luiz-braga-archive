import { Obra } from '@/types/database';
import { MapPin, Calendar, Camera } from 'lucide-react';

interface ObraCardProps {
  obra: Obra;
}

export function ObraCard({ obra }: ObraCardProps) {
  return (
    <div className="group card-hover overflow-hidden rounded-sm border border-border bg-card">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={obra.imagemUrl || '/placeholder.svg'} 
          alt={obra.titulo}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Badges */}
        <div className="absolute right-3 top-3 flex gap-2">
          {obra.cor && (
            <span className="rounded-sm bg-primary/90 px-2 py-1 text-xs font-medium text-primary-foreground">
              Cor
            </span>
          )}
          {obra.analogica ? (
            <span className="rounded-sm bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              Analógica
            </span>
          ) : (
            <span className="rounded-sm bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              Digital
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="mb-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {obra.id}
        </p>
        <h3 className="font-display text-lg font-medium text-foreground line-clamp-1">
          {obra.titulo}
        </h3>
        
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
          {obra.data && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {obra.data}
            </span>
          )}
          {obra.local && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {obra.local}
            </span>
          )}
        </div>

        {obra.dimensoes && (
          <p className="mt-2 text-sm text-muted-foreground">
            {obra.dimensoes}
          </p>
        )}
      </div>
    </div>
  );
}
